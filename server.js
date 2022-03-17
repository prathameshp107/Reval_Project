const express = require('express');
var path=require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var routes = require('./router/router.'); //importing route
routes(app); //register the route

var onListen=function(){
  console.log("Server is listening ")
}
app.listen(8000,onListen);
console.log("Server is listening on port 8000");