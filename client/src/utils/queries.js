import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      _id
      username
      country
      userHighscores
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_ALL_USERS = gql`
  query {
    users {
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
