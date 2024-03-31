import { useState, useEffect } from "react";
import { Card, Button, Form, Row, Container, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import questions from "../utils/questions";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_HIGH_SCORE } from "../utils/mutations";

const Quiz = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(100); // 2 minutes
  const [quizEnded, setQuizEnded] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const { loading, error, data, refetch } = useQuery(QUERY_ME);
  const [updateHighScores] = useMutation(UPDATE_HIGH_SCORE);

  useEffect(() => {
    let timer;
    if (showQuestion && !quizEnded && !sessionExpired) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setQuizEnded(true);
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Cleanup function to clear the interval when component unmounts or conditions change
    return () => clearInterval(timer);
  }, [showQuestion, quizEnded, sessionExpired]);

  useEffect(() => {
    // Check if token has expired
    if (!Auth.loggedIn()) {
      setSessionExpired(true);
    }
  }, []);

  useEffect(() => {
    // Update high score when quiz ends
    if (quizEnded && data && data.me) {
      console.log(data.me.userHighscores);
      if (score) {
        const userId = data.me._id;
        updateHighScores({ variables: { userId: userId, highScore: score } })
          .then(() => {
            console.log("High score updated successfully.");
            // Refetch user data to ensure updated high scores are reflected
            refetch(); // Assuming `refetch` is a function provided by useQuery
          })
          .catch((error) => console.error("Error updating high score:", error));
      }
    }
  }, [quizEnded]);

  const handleAnswerSelect = (index) => setSelectedAnswer(index);

  const checkAnswer = () => {
    if (timeLeft > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswerIndex) {
        setScore((prevScore) => prevScore + 250);
      } else {
        // Deduct 15 seconds for wrong answer
        setTimeLeft((prevTime) => Math.max(prevTime - 15, 0));
        // Deduct 100 points for wrong answer
        setScore((prevScore) => Math.max(prevScore - 100, 0));
      }
      setSelectedAnswer("");
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizEnded(true);
      }
    }
  };

  const startQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizEnded(false);
    setShowQuestion(true);
    setSessionExpired(false); // Reset session expiration flag
  };

  // Handle session expiration
  const handleSessionExpiration = () => {
    // Clear token and user info
    Auth.logout();
    // Set session expiration flag
    setSessionExpired(true);
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Show session expiration alert if session expired */}
      {sessionExpired && (
        <Alert
          variant="danger"
          onClose={() => setSessionExpired(false)}
          dismissible
        >
          <Alert.Heading>Session Expired</Alert.Heading>
          <p>Your session has expired. Please log in again to continue.</p>
        </Alert>
      )}

      {/* Start Quiz Button */}
      {!showQuestion && !quizEnded && !sessionExpired && (
        <Card className="w-75">
          <Card.Header>
            <h1 className="text-center">Javascript Quiz</h1>
          </Card.Header>
          <Card.Title className="text-center">
            <h3>The Rules</h3>
          </Card.Title>
          <Row className="justify-content-center pb-4">
            <Card.Text className="w-75 text-center">
              <h6>
                You will have 2 minutes to answer as many questions as possible.
                Each correct answer is worth 250 points. If you get a question
                wrong, 15 seconds will be deducted from the time, and you will
                lose 100 points. When you are ready, Click the 'Start Quiz'
                button below.
              </h6>
            </Card.Text>
          </Row>
          <Row className="justify-content-center mb-3">
            <Button className="w-25 h-25" variant="success" onClick={startQuiz}>
              Start Quiz
            </Button>
          </Row>
        </Card>
      )}

      {/* Quiz Finished Message */}
      {quizEnded && (
        <p className="text-center">Quiz Finished! Your score: {score}</p>
      )}

      {/* Quiz Card */}
      {showQuestion && !quizEnded && !sessionExpired && (
        <Card className="questionCard">
          <Card.Body>
            {Auth.loggedIn() ? (
              <>
                {currentQuestionIndex < questions.length ? (
                  <>
                    <h5 className="pb-2 text-center">
                      {questions[currentQuestionIndex].question}
                    </h5>
                    <Form>
                      {questions[currentQuestionIndex].answers.map(
                        (answer, index) => (
                          <Form.Check
                            key={index}
                            type="radio"
                            id={`answer-${index}`}
                            label={answer}
                            checked={selectedAnswer === index}
                            onChange={() => handleAnswerSelect(index)}
                            className="pb-2"
                          />
                        )
                      )}
                    </Form>
                    <Row className="justify-content-center">
                      <Button
                        className="text-center w-25"
                        variant="success"
                        onClick={checkAnswer}
                      >
                        Submit Answer
                      </Button>
                    </Row>
                    <Row className="text-center p-2">
                      <p>Time Left: {timeLeft} seconds</p>
                    </Row>
                    <Row className="text-center">
                      <p>Current Score: {score}</p>
                    </Row>
                  </>
                ) : (
                  <p className="text-center">
                    Quiz Finished! Your score: {score}
                  </p>
                )}
              </>
            ) : (
              <p className="text-center">
                If you're not logged in, please sign up or create a player to
                begin
              </p>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Quiz;
