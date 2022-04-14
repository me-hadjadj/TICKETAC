var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/error', function(req, res, next) {
  res.render('error', {title: 'Error'});
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage', {});
});

router.get('/result', function(req, res, next) {
  res.render('result', {});
});

router.get('/basket', function(req, res, next) {
  res.render('basket', {});
});

router.get('/save', function(req, res, next) {
  res.render('', {});
});

bdd = mongodb+srv://EdouardROUSSEL:3iE0DoUomLswhzgV@cluster0.uvhwb.mongodb.net/Ticktak?retryWrites=true&w=majority
3iE0DoUomLswhzgV

module.exports = router;
