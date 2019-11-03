var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/history.html', function(req, res, next) {
  res.render('account/history', { title: 'Express' });
});
router.get('/info.html', function(req, res, next) {
    res.render('account/info', { title: 'Express' });
});
router.get('/mh001.html', function(req, res, next) {
    res.render('account/mh001', { title: 'Express' });
});
router.get('/mh002.html', function(req, res, next) {
    res.render('account/mh002', { title: 'Express' });
  });

module.exports = router;
