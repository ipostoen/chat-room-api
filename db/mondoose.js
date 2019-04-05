const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://testuser:testuser1@ds133086.mlab.com:33086/heroku_583d2fr5');

module.exports = { mongoose };