var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/loai-sach.html', function(req, res, next) {
  res.render('sach/loai-sach', { title: 'Express' });
});
router.get('/nxb.html', function(req, res, next) {
  res.render('sach/nxb', { title: 'Express' });
});
router.get('/sach.html', function(req, res, next) {
  res.render('sach/sach', { title: 'Express' });
});
router.get('/them-loai-sach.html', function(req, res, next) {
  res.render('sach/them-loai-sach', { title: 'Express' });
});
router.get('/them-moi-nxb.html', function(req, res, next) {
  res.render('sach/them-moi-nxb', { title: 'Express' });
});
router.get('/them-sach-moi.html', function(req, res, next) {
  res.render('sach/them-sach-moi', { title: 'Express' });
});

module.exports = router;
