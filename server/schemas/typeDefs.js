const typeDefs = `

scalar DateTime

type User {
    _id: ID!
    username: String!
    country: String!
  userHighscores: [UserHighScoresSchema]
  }

  type UserHighScoresSchema {
    _id: ID!
    user_highscores: Int!
    createdAt:DateTime

  }

  type Query {
    me: User
    users: [User]
  }



  type Auth {
    token: ID!
    user: User
  }
  

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, country: String!, password: String!): Auth
    updateHighScores(userId: ID!, highScore: Int!): User
  }`

  module.exports = typeDefs;