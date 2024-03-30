const { Schema } = require("mongoose");

const UserHighScoresSchema = new Schema({

    user_highscores: {
        type: Number,
        default: 0,
    },
    createdAt : 
    { type : Date,
       default: Date.now 
  },

});

module.exports = UserHighScoresSchema;