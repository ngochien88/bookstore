var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ds-don-hang.html', function(req, res, next) {
  res.render('don-hang/ds-don-hang', { title: 'Express' });
});

module.exports = router;
