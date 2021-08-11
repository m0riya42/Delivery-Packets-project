var express = require('express');
var router = express.Router();

const Schedule = require('../models')("workSchedule");
const haversine = require('haversine')
const kmeans = require('node-kmeans');


router.post('/addSchedule', async function (req, res, next) {
    console.log('i am in addSchedule')
    let { date, id } = req.body;

    newSchedule = {
        date: date,
        id: id,
        packages: []
    }
    try {
        await Schedule.create(newSchedule);
        res.send(200);
    }
    catch (err) { console.log(`Failed: ${err}`) }
}),


    router.post('/setDistribution', async function (req, res, next) {
        console.log('i am in setDistribution')
        let package_list = req.body;

        let data = [];
        package_list.map((item) => {
            data.push([parseFloat(item.lat), parseFloat(item.lon)])
        });
        kmeans.clusterize(data, { k: 4 }, (err, res) => {
            if (err) console.error(err);
            else console.log('%o', res);
        });
    })

module.exports = router;

