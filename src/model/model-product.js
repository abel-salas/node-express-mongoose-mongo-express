var mongoose = require('mongoose');

/*
 *  ------  product  --------
 *  Define model collection
 */

var product = mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  brand: String,
  description: String,
  stock: Number,
  created: Date,
  modified: Date
});
module.exports = mongoose.model('Product', product);
