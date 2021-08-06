import React, { useState, useEffect } from 'react';
import '../App.css';
import './Manager.css'
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Schedule from '../components/Accessories/Schedule';
import Chart from './managerPages/Chart';
import Maps from './managerPages/Maps';
import Blog from '../components/Layout/Blog';
import { Button } from '@material-ui/core';
import CreatePost from '../components/Modals/CreatePost'
import socketClient from "socket.io-client";
import axios from 'axios';
import ScheduleInfo from './managerPages/ScheduleInfo';


// var io = require('socket.io-client')
// const ENDPOINT = 'http://127.0.0.1:9000'
// // // var socket = io(ENDPOINT);
// var socket = io.connect(ENDPOINT);
// socket.on('connect', function (socket) {
//   console.log('Connected!');
// })




// const SERVER = "ws://127.0.0.1:9000";
// const SERVER = "http://localhost:9000";
// var socket = socketClient(SERVER);
// socket.on('connect', () => {
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
    rightPosts: [{}]
  });


  const requestListOfPosts = () => {
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
  }

  useEffect(() => {
    requestListOfPosts()
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

        //update list 
        requestListOfPosts()
      })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <div id="managerContainer" style={{ height: "fitContent", "paddingBottom": "106px", "paddingTop": "106px", background: "url(/assets/images/a0010.jpg)" }}>
      <Switch>
        <Route path="/Users" >
          <UsersInfo />
        </Route>
        <Route path="/Schedule" >
          <ScheduleInfo />
        </Route>
        <Route path="/Charts" >
          <Chart />
        </Route>
        <Route path="/Maps" >
          <Maps />
        </Route>
        <Route path="/ManagerHome" >
          <CreatePost handleClose={closeEditPost} display={isOpen} handleSave={publishPost} />
          <div style={{ background: 'transparent' }}>

            <Button onClick={openEditPost} variant="outlined" color="primary" style={{ background: 'white', right: '-87%', width: '159px', 'font-size': '23px', height: '61px', color: "black", border: '1px solid black' }}>
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