//const Blog = require('../models')("blog");
// const RightPosts = require('../models')("rightPosts");
const ChatMSG = require('../models')("chatMsg");
var express = require('express');
var router = express.Router();
// var io = require('../bin/www')
const User = require('../models')("users");


let POSSIBLE_USERS;
User.REQUEST().then(list => {
    POSSIBLE_USERS = list.reduce((allUsers, user) => {
        if (!(user.userName in allUsers)) {
            allUsers[user.userName] = user.fullName
        }
        return allUsers
    }, {})
    console.log('******************************')
    console.log(POSSIBLE_USERS)
}).catch((msg) => { })


router.post('/getUserMsg', async function (req, res, next) {
    console.log("I AM AT get CHAT MESSAGE")

    if (POSSIBLE_USERS) {
        // console.log(req.body.userName)
        const user = POSSIBLE_USERS[req.body.userName]
        console.log(user)
        ChatMSG.REQUEST_BY_USER(user).then(msgs => res.send(msgs)).catch(err => console.log(`Failed: ${err}`))

    }
})
// router.post('/createRightPost', async function (req, res, next) {
//     console.log("----I AM AT POST CREATE RIGHT POST---")
//     const rightPost = req.body.rightPost;
//     try {
//         await RightPosts.CREATE(rightPost);
//         res.sendStatus(200)
//     }
//     catch (err) { console.log(`Failed: ${err}`) }
//     // res.sendStatus()
//     // res.send)(blogInfo);
// });

module.exports = router;

