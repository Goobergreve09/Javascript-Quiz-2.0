const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

const UserHighScoresSchema = require('./Highscores')

const userSchema = new Schema(
    {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: { 
    type: String,
    required: true,
  },
  userHighscores: [UserHighScoresSchema]
});

// Hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
