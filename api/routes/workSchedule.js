const RightPosts = require('../models')("workSchedule");
var express = require('express');
var router = express.Router();

const Schedule = require('../models')("workSchedule");


router.post('/addSchedule', async function (req, res, next) {
    let { date, id } = req.body;

    newSchedule = {
        date: date,
        id: id
    }
    try {
        await Schedule.create(newSchedule);
        res.send(200);
      }
      catch (err) { console.log(`Failed: ${err}`) }
})


module.exports = router;

