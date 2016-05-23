var middleware = require("./middleware.js");
var controller = require("../controller/controller-user.js");

module.exports = function(app, request) {

  /*
   * GET USER
   */

  app.get('/user/:id', middleware.validateToken, controller.getUser);


  /*
   * GET ALL USERS
   */

  app.get('/users/', middleware.validateToken, controller.getAllUser);


  /*
   *  CREATE USER
   */

  app.post('/user/create', middleware.validateToken, controller.createUser);


  /*
   *  UPDATE USER
   */

  app.put('/user/update/:id', middleware.validateToken, controller.updateUser);


  /*
   *  DELETE USER
   */

  app.delete('/user/delete/:id', middleware.validateToken, controller.deleteUser);

}
