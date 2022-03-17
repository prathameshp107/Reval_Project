'user strict';
var sql = require('./db');

var Credential = function(credential){
    this.credentialid=credential.credentialid;
    this.username = credential.username;
    this.password = credential.status;
    this.last_login = new Date();
};
 
Credential.createCredential = function (newcredential,result) {    
        sql.query("INSERT into credentialtable set ?",newcredential, function (err, res) {
                if(err) {
                          console.log("error: ", err);
                          result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                 
                }
            });           
};

Credential.getCredentialById = function (credentialid,result) {
        sql.query("Select * from credentialtable where credentialid = ? ", credentialid, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Credential.getAllCredential = function (result) {
        sql.query("Select * from credentialtable", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('credentialtable : ', res);  
                  result(null, res);
                }
            });   
};

Credential.updateById = function(credentialid,password, result){
  sql.query( `UPDATE credentialtable SET  password= "${password}" WHERE credentialid = ?` ,credentialid, function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};


Credential.remove = function(credentialid, result){
    sql.query("DELETE  from credentialtable WHERE credentialid= ?", [credentialid], function (err, res) {
                if(err) {
                    result(null, err);
                   console.log("error: ", err);
                 }
                else{
                    result(null, res);
                }
            }); 
};


// Credential.login = function (username,password, result) {
  
//   sql.query('SELECT * FROM credentialtable WHERE username =? AND password =?',[username,password], function (err, res) {             
//     if(err) {
//       result(null, err);
//      console.log("error: ", err);
//    }
//   else{
//     if(username == req.username && password ==req.body.password){
//       //  Username = req.body.Username;
//       //  Password =req.body.Password;
//       result("valid user", res);
//        console.log("valid user ", res);
//    }else{
//     result("Invalid user", res);
//         console.log("error: ", res);
//    }
//  }
// }); 
// };




// Credential.login = function (username,password, result) {
//   sql.query('SELECT * FROM credentialtabl e WHERE username =? AND password =?',[username,password], function (err, res) {             
//     if(err) {
//       console.log("error: ", err);
//       result(err, null);
//     }
//     else{
//       if(data.length>0){
//        if( username == req.body.username && password == req.body.password){
//         // req.session.loggedinUser= true;
//         //  username = req.body.username;
//         //  password =req.body.password;
//          result("Valid User",null);
//      }else{

//       result("Invalid User",null);   
//      }
     
//     }
//     else{
//       result("Insert credential",null); 
//      }
           
//     }
//       });   
// };

module.exports=Credential;