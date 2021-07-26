var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models')("users");


/* POST users listing. */
router.post('/', async function (req, res, next) {
  console.log("i am here")
  var userName = req.body.username;
  var password = req.body.password;

  // Inquire all the users at once and get it as an array
  let users = [];
  try {
    users = await User.REQUEST();
  }
  catch (err) { console.log(`Failed: ${err}`) }

  let hashUser = '';
  users.forEach(user => {
    if ((user.Active) && (user.userName == userName)) {
      console.log('useruseruser');
      hashUser = user.password;
    }
  });

  bcrypt.compare(req.body.password, hashUser, function (err, result) {
    if (result) {
      console.log("true");
    }
    else {
      console.log("wrong");
    }
  });

  const createToken = jwt.sign({ password }, 'jwtSecret', {
    expiresIn: 24 * 60 * 60 * 1000,
  })

  res.send({
    token: createToken,
    msg: "success",
    user: req.body
  });


  // bcrypt.hash('', saltRounds, (err, hash) => {
  //   if (err){
  //     console.log(err);
  //   }
  //   console.log(hash)
  // });

});

module.exports = router;
