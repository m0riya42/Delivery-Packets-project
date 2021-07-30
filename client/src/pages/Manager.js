import React, { useState, useEffect } from 'react';
import '../App.css';
import './Manager.css'
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Schedule from './managerPages/Schedule';
import Chart from './managerPages/Chart';
import Maps from './managerPages/Maps';
import Blog from '../components/Layout/Blog';
import { Button } from '@material-ui/core';
import CreatePost from '../components/Modals/CreatePost'
import socketClient from "socket.io-client";
import axios from 'axios';

// const SERVER = "ws://127.0.0.1:9000";
// const SERVER = "http://localhost:9000";
// var socket = socketClient(SERVER);
// socket.on('connection', () => {
//   console.log(`I'm connected with the back-end`);
// });
// var io = require('socket.io-client')
// var socket = io.connect('http://localhost:9000', { reconnect: true, rejectUnauthorized: false, allowEIO3: true });
// socket.on('connect', function (socket) {
//   console.log('Connected!');
// });

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:9000');

// socket.on('connect', () => {
//   console.log('Successfully connected!');
// });




const Manager = ({ pagesHandler }) => {
  pagesHandler([{ ref: "/ManagerHome", text: "דף הבית" }, { ref: "/Users", text: "פרטי עובדים" }, { ref: "/Schedule", text: "סידור עבודה" }, { ref: "/Charts", text: "גרפים" }, { ref: "/Maps", text: "מפות" }]);
  const [isOpen, setIsOpen] = useState(false);
  const [listOfPosts, updateListOfPosts] = useState({
    leftPosts: [{}],
    //,     [{
    //       innerHtml: ` <img src="/assets/images/yadToFriend.svg" alt="יד לחבר" />
    //     <h4>עמותת עזרה לנזקקים</h4>`}, {
    //       innerHtml: ` <h3><b>בית הדפוס 7, גבעת שאול, ירושלים</b></h3>`
    //     }],
    rightPosts: [{}]
    //     title: "פתיחת שנה ביד לחבר", titleDescription: "חבילות לראש השנה", date: new Date(2020, 8, 25), text: `
    //   <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.pinimg.com/originals/74/67/21/746721e4f831240a660d7a389bebb5a1.png" alt="מתנות לראש השנה - צפו במארזי מתנה, חבילות שי לראש השנה - פרלינה | Perlina" /></p>
    //   <p>בשעה טובה נפתח את פעילותנו במשלוח מיוחד לכבוד ראש השנה.</p>
    //   <p ><strong>עובדים יקרים! </strong>יש לעדכן את שעות הפעילות בהם לא תוכלו לעבוד.</p>
    //   <p><span style="color: #ff0000;"><strong>שנה טובה לכולנו!</strong></span></p>`, images: []
    //   }, {
    //     title: "מעבר כתובת", titleDescription: "שינוי כתובת העמותה", date: new Date(2020, 8, 31), text: `<p>&nbsp;</p>
    //   <p>&nbsp;</p>
    //   <p><img src="https://icon-library.com/images/position-icon/position-icon-8.jpg" width="184" height="184" /></p>
    //   <p><strong>שימו לב!&nbsp;</strong>עברנו לכתובת חדשה:</p>
    //   <p>&nbsp;בית הדפוס 7, גבעת שאול, ירושלים</p>
    //   <p>&nbsp;</p>`}, {
    //     title: 'שעות חלוקה בשבוע הקרוב', titleDescription: 'עדכון שעות', date: new Date(2020, 9, 4), text: `<p><img src="https://www.ynet.co.il/PicServer5/2019/04/11/9180259/917944801000100980651no.jpg" alt="היכן נתנדב השבוע?" width="343" height="213" /></p>
    // <p>בשבוע הקרוב החלוקות ייתקיימו בין השעות:</p>
    // <p>15:30-20:00</p>
    // <p>נסיעה טובה!</p>`}]
  });


  useEffect(() => {
    let blogData = []
    axios.post('http://localhost:9000/blog')
      .then(res => {
        blogData = res.data;
        console.log(blogData);

        updateListOfPosts(blogData);

      })
      .catch(err => {
        console.log(err);
      })
    // },[]
    //get post from server?
    // const serverReq= 
  }, []);


  const openEditPost = () => {
    setIsOpen(true);
  }
  const closeEditPost = () => {
    setIsOpen(false);
  }

  const publishPost = (newPost) => {

    console.log(newPost)
    debugger
    //send to DB
    const body = { rightPost: newPost }
    axios.post('http://localhost:9000/blog/createRightPost', body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    //update view?

    // updateListOfPosts(newList)

    // const newList = {
    //   ...listOfPosts, ...{
    //     rightPosts: newPost
    //   }
    // }
  }

  return (
    <div id="managerContainer" style={{ height: "fitContent", "paddingBottom": "106px", "paddingTop": "106px", background: "url(/assets/images/a0010.jpg)" }}>
      <Switch>
        {/* <Route path="/" exact >
                 </Route> */}
        <Route path="/Users" >
          <UsersInfo />
        </Route>
        <Route path="/Schedule" >
          <Schedule />
        </Route>
        <Route path="/Charts" >
          <Chart />
        </Route>
        <Route path="/Maps" >
          <Maps />
        </Route>
        <Route path="/ManagerHome" >
          <CreatePost handleClose={closeEditPost} display={isOpen} handleSave={publishPost} />
          <div style={{ background: 'white' }}>

            <Button onClick={openEditPost} variant="outlined" color="primary" style={{ right: '-87%', width: '159px', 'font-size': '23px', height: '61px', }}>
              פוסט חדש
            </Button>
          </div>
          <Blog listOfPosts={listOfPosts} />
        </Route>
        <Redirect from="/" to="/ManagerHome" />
        to: object
      </Switch>
    </div >



  )

}

export default Manager;