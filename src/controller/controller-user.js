var User = require("../model/model-user.js");


exports.getUser = function(req, res) {
  console.log('__________ get User __________');

  console.log(req.params.id);

 User.findById(req.params.id, function (err, user) {

    callbackResponse(err, res, user);

  });

};


exports.getAllUser = function(req, res) {
  console.log('__________ get All Users __________');

  User.find({ visible:true }, function (err, user) {

    callbackResponse(err, res, user);

  });

};


exports.createUser = function(req, res) {
  console.log('______________ Post createUser ______________');

  var user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    yearOfBirth: req.body.yearOfBirth,
    city: req.body.city,
    gender: req.body.gender,
    created: new Date(),
    visible: true
  });

  user.save(function(err, response){
    if (!err) {
      res.send({
        status: response.statusCode,
        content: {
          message: 'User Create Success',
          user : user
        }
      });
    } else {
      console.log('ERROR: ' + err);
      res.send('Error create user');
    }
  })

};


exports.updateUser = function(req, res){
  console.log('______________ UPDATE User ______________');
console.log(req.body);
  User.findById(req.params.id, function (err, user) {
    user.lastName = req.body.lastName;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.yearOfBirth = req.body.yearOfBirth;
    user.name = req.body.name;
    user.city = req.body.city;
    user.gender = req.body.gender;
    user.modified = new Date();
    user.save(function(err) {
      if(err){
        return res.status(500).send(err.message);
      }
      res.status(200).jsonp(user);
    });
  });

};


exports.deleteUser = function(req, res) {
  console.log('______________ DELETE User ______________');

  User.findById(req.params.id, function (err, user) {
    if (user.visible) {
      user.visible = false;
      user.modified = new Date();
    } else {
      user.visible = true;
    }
    user.save(function(err) {
      if(err){
        return res.status(500).send(err.message);
      }
      res.status(200).jsonp(user);
    })  ;
  });

};


function callbackResponse(err,res,data){

  var statusCode = 200;
  var message = "Ok";

  if (err) {
    return res.status(400).json({
      status: 400,
      content: {
          message: err.toString()
      }
    });
  }

  res.status(statusCode).json({
    status: statusCode,
    content: {
      message: message,
      data: data
    }
  });
};

