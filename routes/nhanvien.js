var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/role-detail.html', function(req, res, next) {
  res.render('nhan-vien/role-detail', { title: 'Express' });
});
router.get('/role-list.html', function(req, res, next) {
  res.render('nhan-vien/role-list', { title: 'Express' });
});
router.get('/user-detail.html', function(req, res, next) {
  res.render('nhan-vien/user-detail', { title: 'Express' });
});
router.get('/user-list.html', function(req, res, next) {
  res.render('nhan-vien/user-list', { title: 'Express' });
});

module.exports = router;
