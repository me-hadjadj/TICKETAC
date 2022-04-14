var express = require('express');
var router = express.Router();
var request = require('sync-request');
var usersModel = require('../models/users')
require('../models/connection')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//route sign-up
router.post('/sign-up', async function(req, res) {
  var actualUser= await usersModel.findOne({mail:req.body.mail});
  
 
 console.log(actualUser);
 if (actualUser == null) {
  
  var newUsers = new usersModel({
    lastname : req.body.lastname,
    firstname : req.body.firstname,
    mail: req.body.mail,
    password: req.body.password, 
  });
  var allUsers = await newUsers.save(); // sauvgarder les données dans la bdd dans la variable allUsers
  req.session.user = {
    lastname: allUsers.lastname,
    id: allUsers.id
  }
  res.redirect('/homepage');

} else {
  res.redirect('/')   
}
  
    
    });

router.post('/sign-in', async function(req, res) {
  // console.log(req.body.mail)
  var actualUser = await usersModel.findOne({mail:req.body.mail});
  // console.log(req.body.mail);
  // console.log(req.body.password);
  // console.log(actualUser.password)

      if(actualUser == null){
        res.redirect('/')
      } else if (actualUser !== null && req.body.password == actualUser.password){
        req.session.mail = req.body.mail;
      
        req.session.user = {
          lastname: actualUser.lastname,
          id: actualUser.id
        }
        res.redirect('/homepage')} else {
          res.redirect('/')
        }
      });
    

module.exports = router;
