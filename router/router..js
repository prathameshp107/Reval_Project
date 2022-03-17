'use strict';
module.exports = function(app) {
  var credentialController = require('../controllers/credentialcontroller');
   var Login= require('../model/login');
  app.route('/credentialtable')
     .get(credentialController.getAll)
     .post(credentialController.insert);
   
  app.route('/credentialtable/:credentialId')
      .get(credentialController.getBy)
      .put(credentialController.update)
      .delete(credentialController.remove);

//   app.route('/login/')
//       .post(credentialController.Login)

 app.route('/credentialtable/login')
    .post(Login.login);


};