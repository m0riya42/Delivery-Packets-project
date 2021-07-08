var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
=======
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


>>>>>>> 3cc1a98737183359d4c77249cb95c5756c14b988

module.exports = router;
