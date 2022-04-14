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

router.get('/result', function(req, res, next) {
  res.render('result', {title: 'Result'});
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', {});
});

router.get('/result',  function(req, res, next) {
 
  res.render('result', {});
});

router.get('/basket', async function(req, res, next) {
  var result = await journeyModel.find()
  console.log(result);
  res.render('basket', {});
});

module.exports = router;
