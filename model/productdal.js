'user strict';
var sql = require('./db');

var Product = function(p){
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

// Insert Product

Product.createProduct = function (newProduct, result) {    
        sql.query("INSERT INTO productdb.product set ?", newProduct, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId );
                  result(null, "Product inserted");
               }
            });           
};

// Get Product By ID

Product.getProductById = function (productid, result) {
        sql.query(`Select * from product where productid = ? `, productid, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


// Get Product By Product Category



Product.getProductByCategory = function (product_category, result) {
  sql.query("Select * from `productdb`.`product` where `productdb`.`product`.`product_category` = ? ",product_category, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};


// Get All Product

Product.getAllProduct = function (result) {
        sql.query("Select * from product", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('products : ', res);  
                  result(null, res);
                }
            });   
};



// Update By ID

Product.updateById = function(id, products, result){
   sql.query("UPDATE `productdb`.`product` SET `productid` =?,`product_category` =?,`subcategory` =?,`productname` =? ,`product_description` =? ,`product_price` =? ,`product_quantity` =? ,`product_offers` =?, `seller_details` =? WHERE (`productid` = ?)", 
    [products.productid,products.product_category,products.subcategory,products.productname,products.product_description,products.product_price,products.product_quantity,products.product_offers, products.seller_details,id], function (err, res) {  
  if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};


// Delete Product

Product.remove = function(productid, result){
    sql.query("DELETE FROM `productdb`.`product` WHERE `productid` = ?", [productid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};


 
module.exports= Product;