var express = require('express');
var router = express.Router();

const data = require(`../data`);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

router.get('/beans/:beantype', function(req, res, next) {
  console.log('beans: ',req.params.beantype);
  res.render('beanspage', data.beans[req.params.beantype]);
});

module.exports = router;
