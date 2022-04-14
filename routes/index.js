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

module.exports = router;
