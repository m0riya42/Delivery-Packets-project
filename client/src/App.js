import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Manager from './pages/Manager';
import Worker from './pages/Worker';
import Preloder from './components/Layout/Preloader';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import socketClient from "socket.io-client";
// import io from "socket.io-client";

// var io = require('socket.io-client')
// const ENDPOINT = 'http://127.0.0.1:9000'
// // // var socket = io(ENDPOINT);
// var socket = io.connect(ENDPOINT);
// socket.on('connect', function (socket) {
//   console.log('Connected!');
// })

const App = () => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  // const [users, setUsers] = useState('');
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState([]);


  // useEffect(() => {
  // const { name, room } = queryString.parse(location.search);

  // socket = io(ENDPOINT);

  // setRoom(room);
  // setName(name)

  //   socket.emit('join', { name, room }, (error) => {
  //     if (error) {
  //       alert(error);
  //     }
  //   });
  // }, [ENDPOINT, location.search]);

  // useEffect(() => {
  //   socket.on('message', message => {
  //     setMessages(messages => [...messages, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   if (message) {
  //     socket.emit('sendMessage', message, () => setMessage(''));
  //   }
  // }



  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES
  const [pages, setPages] = useState([]);
  const [returnVal, setReturnVal] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const authenticateHandler = ({ type, userName, user}) => {
    setAuth({ type, userName })
  }
  const setPagesHandler = (pages) => {
    setPages(pages)
  }


  useEffect(() => {
    //console.log(pages)
    setPages(pages)
  }, [pages,])



  const onLoad = () => {
    if (auth) { //-------------->Manager/User
      if (auth.type == "manager"){
        auth.type === "manager" ? setReturnVal(<><Manager pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Manager /></>)

      }
      if (auth.type == "worker"){
        auth.type === "worker" ? setReturnVal(<><Worker pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Worker /></>)
      }
      //console.log(auth)
    }
    else {
      setPagesHandler([{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
      )
      setReturnVal(<Home authenticate={authenticateHandler} />)
    }
  }
  useEffect(onLoad, [auth])

  return <Router>
    <Preloder />
    <NavBar pages={pages} />
    {returnVal}
    <Footer />
  </Router>
}

//redirect- when not moving to the right page go back to home

export default App;