var express = require("express");
var router = express.Router();
<<<<<<< HEAD
// router.get("/", function (req, res, next) {
//     // res.send("API is NOT working properly");
//     res.render('index', { title: 'חברים לעת צרה' });
=======
router.get("/", function (req, res, next) {
    // let b = null;
    // const c = b ?? 5;

    // res.send("API is NOT working properly");
    res.send(`is working+ ${c}`);
>>>>>>> 3cc1a98737183359d4c77249cb95c5756c14b988

// });
module.exports = router;