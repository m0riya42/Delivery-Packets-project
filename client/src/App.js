import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Manager from './pages/Manager';
import Worker from './pages/Worker';
import Preloder from './components/Layout/Preloader';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
// import socketClient from "socket.io-client";
import axios from 'axios';

// import io from "socket.io-client";

// var io = require('socket.io-client')
// const ENDPOINT = 'http://127.0.0.1:9000'
// // // var socket = io(ENDPOINT);
// var socket = io.connect(ENDPOINT);
// socket.on('connect', function (socket) {
//   console.log('Connected!');
// })

const App = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const openSignInPopUp = () => {
  //   setIsOpen(true);
  //   console.log(isOpen)
  // }
  // const closeSignInPopUp = () => {
  //   setIsOpen(false);
  // }



  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt);
  // const [jwt, setJwt] = useState(storedJwt || null);

  // const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES
  const [pages, setPages] = useState([]);
  const [returnVal, setReturnVal] = useState(null);

  const authenticateHandler = ({ token }) => {


    //save token
    localStorage.setItem('token', JSON.stringify(token));
    console.log(token)
    console.log(jwt)
    setJwt(JSON.stringify(token));
    console.log(jwt)

    // setUserInfo(user);
    // console.log(userInfo)
    //set Authentication
    // setAuth({ type, userName, user })
  }
  const setPagesHandler = (pages) => {
    setPages(pages)
  }


  useEffect(() => {
    //console.log(pages)
    setPages(pages)
  }, [pages,])



  const onLoad = () => {

    if (jwt) { //-------------->Manager/User
      const type = JSON.parse(jwt).type;
      //console.log('onLoad')
      // console.log(JSON.parse(jwt).type)
      if (type === "manager") {
        type === "manager" ? setReturnVal(<><Manager pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Manager /></>)

      }
      else if (type === "worker") {
        let user = {};
        let info = {name: JSON.parse(jwt).userName}
        axios.post('http://localhost:9000/usersInfo/getUserByName', info)
          .then(res => {
            user = res.data;
            type === "worker" ? setReturnVal(<><Worker pagesHandler={setPagesHandler} user={user} /></>) : setReturnVal(<><Worker /></>)

          })
      }
      //console.log(auth)
    }
    else {
      setPagesHandler([{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
      )
      setReturnVal(<Home authenticate={authenticateHandler} token={jwt} />)
      // setReturnVal(<Home authenticate={authenticateHandler} token={jwt} isOpen={isOpen} openSignInPopUp={openSignInPopUp} closeSignInPopUp={closeSignInPopUp} />)
    }
  }
  useEffect(onLoad, [jwt])
  // const onLoad = () => {
  //   if (auth) { //-------------->Manager/User
  //     if (auth.type === "manager") {
  //       auth.type === "manager" ? setReturnVal(<><Manager pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Manager /></>)

  //     }
  //     else if (auth.type === "worker") {
  //       auth.type === "worker" ? setReturnVal(<><Worker pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Worker /></>)
  //     }
  //     //console.log(auth)
  //   }
  //   else {
  //     setPagesHandler([{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
  //     )
  //     setReturnVal(<Home authenticate={authenticateHandler} />)
  //   }
  // }
  // useEffect(onLoad, [auth])
  // const type = JSON.parse(jwt).userName;

  return <Router>
    <Preloder />
    <NavBar pages={pages} userName={JSON.parse(jwt)?.userName} />
    {returnVal}
    <Footer />
  </Router>
}

//redirect- when not moving to the right page go back to home

export default App;