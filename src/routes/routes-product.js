var middleware = require("./middleware.js");
var controller = require("../controller/controller-product.js");


module.exports = function(app, request) {

  /*
   * GET PRODUCTS
   */

  app.get('/products/', controller.getAllProducts);


  /*
   *  PRODUCT POST
   */

  app.post('/product/', controller.addProduct);


  /*
   *  PRODUCT UPDATE
   */

  app.put('/product/:id', controller.updateProduct);


  /*
   *  PRODUCT DELETE
   */

  app.delete('/product/:id', controller.deleteProduct);


}
