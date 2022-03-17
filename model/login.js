'use strict';
var sql = require('./db');



    var Credentials = function(credential){
        //this.credentialid=credential.credentialid;
        this.username = credential.username;
        this.password = credential.status;
        //this.last_login = new Date();
    };

 

Credentials.login = function (req,res) {
    var Username = req.body.username;
    var Password = req.body.password;
    sql.query('SELECT * FROM credentialtable WHERE username =? AND password =?',[Username,Password], function (err, data,fields) {             
        if(err) throw err
        if(data.length>0){
      // req.session.loggedinUser= true;
       Username = req.body.Username;
       Password =req.body.Password;
       res.send("Valid user");
   }else{
       res.send("Invalid user");
   }
    
})
}
module.exports=Credentials;