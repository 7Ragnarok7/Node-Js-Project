var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('homepage', {
     title: 'Welcome to Dot.Chat!',
     style1: 'template/css/lib/bootstrap.min.css', 
     style2: "template/css/swipe.min.css", 
  });
});

module.exports = router;