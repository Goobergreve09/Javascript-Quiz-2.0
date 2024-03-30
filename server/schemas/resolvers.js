// user-resolvers.js
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    users: async () => {
      return User.find({});
    },

    
  },

  Mutation: {
    addUser: async (parent, { username, country, password }) => {
      const user = await User.create({ username, country, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    updateHighScores: async (parent,  {highScore} , context) => { // Define resolver function with parameters: parent, { highScore }, context
      if (context.user) { // Check if there is a user in the context (i.e., if the user is authenticated)
        const updatedUser = await User.findByIdAndUpdate( // Use Mongoose's findByIdAndUpdate method to find and update the user
          { _id: context.user._id }, // Find the user by its _id, which is obtained from the context
          { $push: { userHighscores: { user_highscores: highScore } } }, // Push the new highScore value into the userHighscores array using the $push operator
          { new: true } // Return the updated document after the update is applied
        );
        return updatedUser; // Return the updated user object
      }
    },
    
  },
};

module.exports = resolvers;
