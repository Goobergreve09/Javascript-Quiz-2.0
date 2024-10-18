import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import "../index.css";

// Define the HighScores component
const HighScores = () => {
  // Use the useQuery hook to execute the QUERY_ME query
  const { loading, error, data } = useQuery(QUERY_ME);

  // Check if data is loading or if there's an error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract user's high scores from the data
  const userData = data?.me || {};

  // Sort userHighscores by user_highscores in descending order
  const sortedScores = userData.userHighscores
    .slice()
    .sort((a, b) => b.user_highscores - a.user_highscores);

  // Get the top 12 scores
  const top12Scores = sortedScores.slice(0, 12);

  return (
    <Container fluid className="d-flex justify-content-center ">
      <Card className="justify-content-center mt-4 mb-4" style={{ width: "75%" }}>
        <Card.Header className="text-center userScoresheader">
          <span className="bold">{userData.username}'s High Scores</span>
        </Card.Header>
        <Card.Body className="text-center">
          <ListGroup>
            {/* Map over the top 12 scores and display each score */}
            {top12Scores.map((score, index) => (
              <ListGroup.Item key={index} className="scoreRow">
                <Row>
                  <Col className="player-score-col">
                    <span className="bold">
                      Player Score: {score.user_highscores}
                    </span>
                  </Col>
                  <Col className="date-col">
                    <span className="bold">Taken:</span>{" "}
                    {new Date(score.createdAt).toLocaleString()}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HighScores;
