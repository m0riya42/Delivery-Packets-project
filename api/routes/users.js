var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.params)


  res.send({
    token: 'test123',
    msg: "works"
  });
});

// router.get('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

module.exports = router;
