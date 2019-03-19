var express = require('express');
var router = express.Router();
//var handlebars = require('handlebars');

const data = require(`../data`);
/* GET home page. */
router.get('/', function(req, res, next) {
  //handlebars.registerPartial('header', 'header');
  res.render('index', data);
});

// ':' is dynamic placeholder
// router.get('/:user', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   console.log('data: ',data);
//   //req.params is placeholder
//   console.log('user: ',req.params.user);
//   res.render('userpage', data[req.params.user]);
// });

router.get('/beans/:beantype', function(req, res, next) {
  //console.log('data: ',data);
  console.log('beans: ',req.params.beantype);
  res.render('beanspage', data.beans[req.params.beantype]);
});

module.exports = router;
