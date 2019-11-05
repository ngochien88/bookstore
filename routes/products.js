var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bachviet.html', function(req, res, next) {
  res.render('products/bachviet', { title: 'Express' });
});

router.get('/khac.html', function(req, res, next) {
  res.render('products/khac', { title: 'Express' });
});
router.get('/kimdong.html', function(req, res, next) {
  res.render('products/kimdong', { title: 'Express' });
});
router.get('/kinhte.html', function(req, res, next) {
  res.render('products/kinhte.html', { title: 'Express' });
});
router.get('/ngoaingu.html', function(req, res, next) {
  res.render('products/ngoaingu', { title: 'Express' });
});
router.get('/nhanam.html', function(req, res, next) {
  res.render('products/nhanam', { title: 'Express' });
});
router.get('/nxbtre.html', function(req, res, next) {
    res.render('products/nxbtre', { title: 'Express' });
  });
  router.get('/thieunhi.html', function(req, res, next) {
    res.render('products/thieunhi', { title: 'Express' });
  });
  router.get('/vanhoc.html', function(req, res, next) {
    res.render('products/vanhoc', { title: 'Express' });
  });
module.exports = router;
