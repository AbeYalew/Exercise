var express = require('express');
var router = express.Router();
var inventorsList = require('./../data/inventors.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercise 05' });
});

router.get('/inventors', function(req, res, next) {
  res.render('inventors', { inventors: inventorsList });
});

module.exports = router;
