'use strict';
var Product = require('../model/productdal');


// Get All Products

exports.getAll = function(req, res) {
  Product.getAllProduct(function(err, products) {
    if (err)
      res.send(err);
    res.send(products);
  });
};


// Get Product By ID
exports.getBy = function(req, res) {
  Product.getProductById(req.params.productid, function(err, products) {
    if (err)
      res.send(err);
    res.json(products);
  });
};

exports.getByProduct = function(req, res) {
  Product.getProductByCategory(req.body.product_category, function(err, products) {
    if (err)
      res.send(err);
    res.json(products);
  });
};





// // Get Product By Product_category
// exports.getByCategory = function(req, res) {
//   Product.getProductByProductCategory(req.params.product_ca, function(err, products) {
//     if (err)
//       res.send(err);
//     res.json(products);
//   });
// };



// Insert Products

exports.insert = function(req, res) {
  
  var new_product = new Product(req.body);

//  // handles null error 
   if(!new_product.productid){
      res.status(400).send({ error:true, message: 'Please provide product/status' });
    }
   else{
    Product.createProduct(new_product, function(err, products) {
      if (err)
      res.send(err);
    res.json(products);

    });
 }
};



// Update Product By ID

exports.update = function(req, res) {
  Product.updateById(req.params.productid, new Product(req.body), function(err, products) {
    if (err)
      res.send(err);
    res.json("products updated successfully");
  });
};


// Delete Product By ID

exports.remove = function(req, res) {
  Product.remove( req.params.productid, function(err, product) {
    if (err)
      res.send(err);
    res.json("Product successfully deleted");
  });
};