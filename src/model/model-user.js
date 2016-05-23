var mongoose = require('mongoose');


/*
 *  ------  USER  --------
 *  Define model collection
 */

var user = mongoose.Schema({
  name: String,
  lastName: String,
  phone: Number,
  email: String,
  yearOfBirth: Date,
  city: String,
  gender: String,
  created: Date,
  modified: Date,
  visible: Boolean
});
module.exports = mongoose.model('User', user);
