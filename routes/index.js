var express = require('express');
var router = express.Router();

const data = require(`../data`);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ':' is dynamic placeholder
router.get('/:user', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('data: ',data);
  //req.params is placeholder
  console.log('user: ',req.params.user);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
