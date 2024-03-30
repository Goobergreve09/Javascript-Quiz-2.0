import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $country: String!, $password: String!) {
    addUser(username: $username, country: $country, password: $password) {
      token
      user {
        _id
        username
        country
      }
    }
  }
`;

export const UPDATE_HIGH_SCORE = gql`
  mutation updateHighScores($userId: ID!, $highScore: Int!) {
    updateHighScores(userId: $userId, highScore: $highScore) {
      _id
      username
      country
      userHighscores {
        _id
        user_highscores
        createdAt
      }
    }
  }
`;
