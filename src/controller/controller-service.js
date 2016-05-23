var Service = require("../model/model-service.js");


exports.getAllServices = function(req, res) {
  console.log('__________ get Client Notifications By Id __________');

  Service.find({}, function (err, AllServices) {

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
        data: AllServices
      }
    });

  });

};


exports.addService = function(req, res) {
  console.log('______________ Post add Service ______________');

  var service = new Service({
    "name": req.body.name,
    "type": req.body.type,
    "price": req.body.price,
    "brand": req.body.brand,
    "description": req.body.description,
    "created": new Date()
  });

  service.save(function(err, response){
    if (!err) {
      res.send({
        status: response.statusCode,
        content: {
          message: 'Service saved',
          data: response
        }
      });
    } else {
      console.log('ERROR: ' + err);
      res.send('ERROR - Post add SERVICE');
    }
  })

};


exports.updateService = function(req, res){
  console.log('UPDATE service By ID');

  Service.findById(req.params.id, function (err, service) {
      service.name = req.body.name;
      service.type = req.body.type;
      service.price = req.body.price;
      service.brand = req.body.brand;
      service.description = req.body.description;
      service.modified = new Date();

    service.save(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'service saved',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - Update SERVICE');
      }
    });

  });
};


exports.deleteService = function(req, res) {
  console.log('DELETE Service');

  Service.findById(req.params.id, function (err, service) {
    service.remove(function(err, response){
      if (!err) {
        res.send({
          status: response.statusCode,
          content: {
            message: 'SUCCESS - remove SERVICE',
            data: response
          }
        });
      } else {
        console.log('ERROR: ' + err);
        res.send('ERROR - remove SERVICE');
      }
    });

  });

};

