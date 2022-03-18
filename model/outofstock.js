'user strict';
var sql = require('./db');

var OutOfStock = function(p){
    this.productid=p.productid;
    this.product_category=p.product_category;
    this.subcategory=p.subcategory;
    this.productname=p.productname;
    this.product_description=p.product_description;
    this.product_price=p.product_price;
    this.product_quantity=p.product_quantity;
    this.product_offers=p.product_offers;
    this.seller_details=p.seller_details;
  };

  OutOfStock.outofstock=function(req, res){
          var Productid=req.params.productid;
          
          sql.query("SELECT * from product WHERE product_quantity =0",(err, rows, fields) =>{
                                  if (!err){
                                     res.send(rows);
                                  }
                                  else{
                                      console.log(JSON.stringify(err));
                                  }
      });
} 


  module.exports= OutOfStock;