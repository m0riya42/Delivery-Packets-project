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
import { connectToSocketIo, socket } from './socket_io'
import { serverGetUserChatMsgs, serverGetUserByNameData } from './axios_requests'
// localStorage['token'] && connectToSocketIo()

connectToSocketIo()

const App = () => {


  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt);
  const [pages, setPages] = useState([]);
  const [returnVal, setReturnVal] = useState(null);
  const [chatMsgs, setChatMsgs] = useState([])

  const authenticateHandler = ({ token }) => {


    //save token
    localStorage.setItem('token', JSON.stringify(token));
    console.log(token)
    setJwt(JSON.stringify(token));



    //CONNECT TO SOCKET IO
    // connectToSocketIo()

    //GET USER MESSAGES
    serverGetUserChatMsgs({ userName: token.userName, handler: setChatMsgs }).then((data) => setChatMsgs(data))

  }
  const setPagesHandler = (pages) => {
    setPages(pages)
  }


  useEffect(() => {
    setPages(pages)
  }, [pages,])



  const onLoad = () => {
    if (jwt) { //-------------->Manager/User
      const type = JSON.parse(jwt).type;
      if (type === "manager") {
        type === "manager" ? setReturnVal(<><Manager pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Manager /></>)

      }
      else if (type === "worker") {
        let name = JSON.parse(jwt).userName;
        serverGetUserByNameData({ name }).then(user => {
          type === "worker" ? setReturnVal(<><Worker pagesHandler={setPagesHandler} user={user} /></>) : setReturnVal(<><Worker /></>)
        })
      }
    }
    else {
      setPagesHandler([{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
      )
      setReturnVal(<Home authenticate={authenticateHandler} token={jwt} />)
    }
  }
  useEffect(onLoad, [jwt])

  return <Router>
    <Preloder />
    <NavBar pages={pages} userName={JSON.parse(jwt)?.userName} />
    {returnVal}
    <Footer />
  </Router>
}


export default App;