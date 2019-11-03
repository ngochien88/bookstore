var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/01.html', function(req, res, next) {
  res.render('product-page/01', { title: 'Express' });
});
router.get('/02.html', function(req, res, next) {
    res.render('product-page/02', { title: 'Express' });
});
router.get('/03.html', function(req, res, next) {
    res.render('product-page/03', { title: 'Express' });
});
router.get('/04.html', function(req, res, next) {
    res.render('product-page/04', { title: 'Express' });
  });
  router.get('/05.html', function(req, res, next) {
    res.render('product-page/05', { title: 'Express' });
  });
  router.get('/06.html', function(req, res, next) {
    res.render('product-page/06', { title: 'Express' });
  });
  router.get('/07.html', function(req, res, next) {
    res.render('product-page/07', { title: 'Express' });
  });
  router.get('/08.html', function(req, res, next) {
    res.render('product-page/08', { title: 'Express' });
  });
  router.get('/09.html', function(req, res, next) {
    res.render('product-page/09', { title: 'Express' });
  });
module.exports = router;
