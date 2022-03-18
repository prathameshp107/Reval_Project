const express = require('express');
var path=require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var router = require('./router/router'); //importing route
router(app); //register the route

var onListen=function(){
  console.log("server is listening on port ")
}
app.listen(3000,onListen);
console.log("Server is listening on port 3000");
