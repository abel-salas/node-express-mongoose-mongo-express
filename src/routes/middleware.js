var request = require('request');
var nconf   = require('nconf');

/*
 *  ------ PRODUCT -----
 *
 *  MIDDLEWARE VALIDATE ROUTE
 *
 */

exports.validateToken = function(req, res, next) {
  console.log('-------- MIDDLEWARE -------');

      next();

};
