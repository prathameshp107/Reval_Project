
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Givita@04',
    database:'productdb'
});

connection.connect(function(err){
    if(err) throw err;
    
});
module.exports=connection;