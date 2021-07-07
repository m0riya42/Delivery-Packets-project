var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
    // let b = null;
    // const c = b ?? 5;

    // res.send("API is NOT working properly");
    res.send(`is working+ ${c}`);

});
module.exports = router;