var express = require('express');
var router = express.Router();

var journeyModel = require('../models/journey')
var usersModel = require('../models/users')
require('../models/connection')



var city = ["Paris","Marseille","Nantes","Lyon","Rennes","Melun","Bordeaux","Lille"]
var date = ["2018-11-20","2018-11-21","2018-11-22","2018-11-23","2018-11-24"]



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user);

  res.render('login', { title: 'Express' });
});



router.get('/login', function(req, res, next) {
//KILL SESSION
  req.session.destroy();
  res.render('login', { title: 'Express' });
});

router.get('/error', function(req, res, next) {
  res.render('error', {title: 'Error'});
});

router.post('/result',async function(req, res, next) {
  //si l'utilisateur n'est pas connecté
  if(req.session.user == undefined){
    res.redirect('/')  //redirection vers la page de connexion 
  } else {
    // Récupère les trajets demandés par l'utilisateur
  var journeyFind = await journeyModel.find({departure : req.body.departureCity, arrival : req.body.arrivalCity, date : req.body.date })
  }
  res.render('result', {journeyFind});
});

router.get('/homepage', async function(req, res, next) {
  if(req.session.user == undefined){
    res.redirect('/')  //redirection vers la page de connexion 
  } else {
  res.render('homepage', {});
  }
});

router.get('/basket', async function(req, res, next) {
  if(req.session.user == undefined){
    res.redirect('/')  //redirection vers la page de connexion 
  } else {
  if (req.session.basketTable == undefined){
    req.session.basketTable = []
  }
  var journeySeleted = await journeyModel.findOne({_id : req.query.id})
  req.session.basketTable.push(journeySeleted);
  
  res.render('basket', {tableau : req.session.basketTable});
}
});

router.get('/last-trips', async function(req, res, next) {
  if(req.session.user == undefined){
    res.redirect('/')  //redirection vers la page de connexion 
  } else {
  for (element of req.session.basketTable){
    await usersModel.updateOne({ _id: req.session.user.id }, { $push: { lasttrips: element._id}})
  }
 var userTrip = await usersModel.findOne({_id: req.session.user.id}).populate('lasttrips').exec();
console.log(userTrip.lasttrips);

res.render('last-trips',{lastTripsList : userTrip.lasttrips});
  }
});


module.exports = router;
