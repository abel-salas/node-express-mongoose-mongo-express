var Product = require("../model/model-product.js");


exports.getAllProducts = function(req, res) {
  console.log('__________ get all products __________');

  Product.find({}, function (err, product) {

    if (err) {
      return res.status(400).json({
        status: 400,
        content: {
            message: err.toString()
        }
      });
    }

    res.status(res.statusCode).json({
      status: res.statusCode,
      content: {
        message: 'too coorrecto',
        data: product
      }
    });

  });

};


exports.addProduct = function(req, res) {
  console.log('______________ Post add Product ______________');

  var product = new Product({
    "name": req.body.name,
    "type": req.body.type,
    "price": req.body.price,
    "brand": req.body.brand,
    "stock": req.body.stock,
    "description": req.body.description,
    "created": new Date()
  });

  product.save(function(err, response){
    if (!err) {
      res.send({
        status: response.statusCode,
        content: {
          message: 'Product saved',
          data: response
        }
      });
    } else {
      console.log('ERROR: ' + err);
      res.send('ERROR - Post add Product');
    }
  })

};


exports.updateProduct = function(req, res){
  console.log('UPDATE Product', req.body);

  Product.findById(req.params.id, function (err, product) {
      product.name = req.body.name;
      product.type = req.body.type;
      product.price = req.body.price;
      product.brand = req.body.brand;
      product.stock = req.body.stock;
      product.description = req.body.description;
      product.modified = new Date();

    product.save(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'Product saved',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - Update Product');
      }
    });

  });
};


exports.deleteProduct = function(req, res) {
  console.log('DELETE Product');

  Product.findById(req.params.id, function (err, product) {
    product.remove(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'SUCCESS - remove Product',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - remove Product');
      }
    });

  });

};

