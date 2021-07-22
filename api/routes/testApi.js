var express = require("express");
var router = express.Router();



// const app = express();
// app.use('/login', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
//   });





router.get("/", function (req, res, next) {
    // let b = null;
    // const c = b ?? 5;

    // res.send("API is NOT working properly");
    res.send(`is working+ ${c}`);

});
module.exports = router;