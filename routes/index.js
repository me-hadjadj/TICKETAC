var express = require('express');
var router = express.Router();

var journeyModel = require('../models/journey')
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

router.get('/homepage', function(req, res, next) {
  res.render('homepage', {});
});

router.get('/basket', async function(req, res, next) {
  var result = await journeyModel.find()
  res.render('basket', {});
});

module.exports = router;
