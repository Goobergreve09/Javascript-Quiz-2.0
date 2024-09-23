const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI_LOCAL || 'mongodb://127.0.0.1:27017/javascriptquiz');

module.exports = mongoose.connection;
