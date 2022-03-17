'use strict';
var Credential = require('../model/credentialdal');

exports.getAll = function(req, res) {
  Credential.getAllCredential(function(err, credential) {
    if (err)
      res.send(err);
    res.send(credential);
  });
};

exports.insert = function(req, res) {
  
  var new_credential = new Credential(req.body);


    Credential.createCredential(new_credential, function(err, credential) {
      if (err)
      res.send(err);
    res.json({ message: 'Credential Added' });
    });

};

exports.getBy = function(req, res) {
  Credential.getCredentialById(req.params.credentialId, function(err, credential) {
    if (err)
      res.send(err);
    res.json(credential);
  });
};

exports.update = function(req, res) {
  Credential.updateById(req.params.credentialId,req.body.password, function(err, credential) {
    if (err)
      res.send(err);
    res.json({ message: 'Credential successfully UPDATED' });
  });
};

exports.remove = function(req, res) {
  Credential.remove( req.params.credentialId, function(err, credential) {
    if (err)
      res.send(err);
    res.json({ message: 'Credential successfully DELETED' });

  });
};

// exports.login = function(req, res) {

//     Credential.login(req.body.username,req.body.password, function(err, credential) {
//       if (err){
//         res.send(err);
//       }
      
//       res.send(credential);
//       console.log(req.body.username);
//     });

//};
