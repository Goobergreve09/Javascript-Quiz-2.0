const { signToken, AuthenticationError } = require("../utils/auth.js");
const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('User not authenticated');
    },

    users: async () => {
      return User.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, country, password }) => {
      const user = await User.create({ username, country, password }); // Hash the password here before saving
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },

    updateHighScores: async (parent, { highScore }, context) => {
      if (!context.user) {
        throw new AuthenticationError('User must be logged in');
      }
      
      const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { userHighscores: { user_highscores: highScore } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

module.exports = resolvers;

