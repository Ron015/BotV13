const mongo = require('mongoose');

const Schema = mongo.Schema({
  Guild: String,
  Channel: String,
});

module.exports = mongo.model('welcome-channel', Schema)