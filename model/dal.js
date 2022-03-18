var sql =  require('./db.js');

//data access logic layer

//Product act like instance

var Product= function(p){

    //initialization code, constructor
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

Product.createProduct=function(newProduct, result){
    //inserting new product for product table


};

Product.getProductById=function(productId, result){
    //getting product by id
    
};

Product.getProductByProductCategory=function(product_category, result){
    //getting product by category
    
};


Product.updateById=function(productid, products, result){
    //updating product by id
    
};

Product.remove=function(id, result){
    //removing product by id
    
};

module.exports= Product;
