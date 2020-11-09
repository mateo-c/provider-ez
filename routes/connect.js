var express = require('express');
var router = express.Router();

/* GET connect . */
router.get('/', function(req, res, next) {
  res.render('connect', { title: 'CloudNet Login' });
});

module.exports = router;