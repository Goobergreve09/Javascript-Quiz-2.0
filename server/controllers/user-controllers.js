// Import user model
const { User } = require("../models");
// Import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  async createUser(req, res) {
    try {
      const { username, password, country } = req.body;
      const user = await User.create({ username, password, country });

      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      res.status(400).json({ message: "Failed to create user", error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { username, password, country } = req.body;
      const user = await User.findOne({ $or: [{ username }, { country }] });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = signToken(user);
      res.json({ token, user });
    } catch (error) {
      res.status(500).json({ message: "Failed to log in", error: error.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
  },

  async updateUserHighScores({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { userHighscores: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

};






