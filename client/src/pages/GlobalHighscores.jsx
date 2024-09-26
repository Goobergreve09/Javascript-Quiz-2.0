import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_USERS } from "../utils/queries";
import countryList from "client/src/utils/country.jsx";
import "../index.css";

const GlobalHighScores = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract all users' data
  const allUsers = data.users;

  // Flatten user high scores
  let allScores = [];
  allUsers.forEach((user) => {
    if (user.userHighscores.length > 0) {
      allScores = allScores.concat(
        user.userHighscores.map((score) => ({ user, score }))
      );
    }
  });

  // Sort scores based on the score value
  allScores.sort((a, b) => b.score.user_highscores - a.score.user_highscores);

  // Get top 25 scores
  const top25Scores = allScores.slice(0, 25);

  const countryLookup = {};
  countryList.forEach(({ name, code }) => {
    countryLookup[name] = code;
  });

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Card className="justify-content-center" style={{ width: "90%" }}>
        <Card.Header className="text-center userScoresheader">
          Top 25 High Scores
        </Card.Header>
        <Card.Body className="text-center">
          <ListGroup>
            {/* Map over the top 25 scores and display each score */}
            {top25Scores.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center justify-content-center h-100 bold">
                  <Col>{index + 1}.</Col>
                  <Col>{item.user.username}</Col>
                  <Col>{item.score.user_highscores}</Col>
                  <Col>
                    {countryLookup[item.user.country] ? (
                      <img
                        src={`https://flagsapi.com/${
                          countryLookup[item.user.country]
                        }/shiny/64.png`}
                        alt={`Flag of ${item.user.country}`}
                        className="flag-image ml-2"
                        style={{ width: "100px", height: "auto" }}
                      />
                    ) : (
                      <span>No flag available</span>
                    )}
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

export default GlobalHighScores;
