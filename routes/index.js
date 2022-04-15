var express = require('express');
var router = express.Router();

var journeyModel = require('../models/journey')
var usersModel = require('../models/users')
require('../models/connection')



var city = ["Paris","Marseille","Nantes","Lyon","Rennes","Melun","Bordeaux","Lille"]
var date = ["2018-11-20","2018-11-21","2018-11-22","2018-11-23","2018-11-24"]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});



router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/error', function(req, res, next) {
  res.render('error', {title: 'Error'});
});

router.post('/result',async function(req, res, next) {
  // Récupère les trajets demandés par l'utilisateur
  var journeyFind = await journeyModel.find({departure : req.body.departureCity, arrival : req.body.arrivalCity, date : req.body.date })
  res.render('result', {journeyFind});
});

router.get('/homepage', async function(req, res, next) {
  res.render('homepage', {});
});

router.get('/basket', async function(req, res, next) {
  if (req.session.basketTable == undefined){
    req.session.basketTable = []
  }
  var journeySeleted = await journeyModel.findOne({_id : req.query.id})
  req.session.basketTable.push(journeySeleted);
  
  res.render('basket', {tableau : req.session.basketTable});
  
});

router.get('/last-trips', async function(req, res, next) {
  for (element of req.session.basketTable){
    await usersModel.updateOne({ _id: req.session.user.id }, { $push: { lasttrips: element._id}})
  }
res.render('last-trips');
});


module.exports = router;
