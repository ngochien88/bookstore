var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/detail-khachhang.html', function(req, res, next) {
  res.render('khach-hang/detail-khachhang', { title: 'Express' });
});
router.get('/ds-khach-hang.html', function(req, res, next) {
  res.render('khach-hang/ds-khach-hang', { title: 'Express' });
});

module.exports = router;
