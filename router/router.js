'use strict';
module.exports = function(app) {
  var productController = require('../controllers/productcontroller');
  var outofStocks = require('../model/outofstock');

  app.route('/product')
     .get(productController.getAll)
     .post(productController.insert);
   
  app.route('/product/:productid')
      .get(productController.getBy)
      .put(productController.update)
      .delete(productController.remove);

  app.route('/product/:product_category')
      .get(productController.getByProduct);

  app.route('/product/outofstock')
      .get(outofStocks.outofstock);
  };