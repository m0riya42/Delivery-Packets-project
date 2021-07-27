//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
// import React, { Component, useState } from "react"
// import LearnReact from './components/LearnReact/LearnReact';
// import FormLearn from './components/FormLearn/FormLearn'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About';
import Manager from './pages/Manager';
import Preloder from './components/Layout/Preloader';
import NavBar from './components/Layout/NavBar';
// import UsersInfo from './pages/managerPages/UsersInfo';
import Footer from './components/Layout/Footer';



const App = () => {


  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES
  const [pages, setPages] = useState([]);
  const [returnVal, setReturnVal] = useState(null);

  const authenticateHandler = ({ type, userName }) => {
    setAuth({ type, userName })
  }
  const setPagesHandler = (pages) => {
    setPages(pages)
  }

  // const setReturnValHandler = (val) => {
  //   setReturnVal(val)
  // }
  useEffect(() => {
    console.log(pages)
    setPages(pages)
  }, [pages,])



  const onLoad = () => {
    if (auth) { //-------------->Manager/User
      auth.type === "manager" ? setReturnVal(<><Manager pagesHandler={setPagesHandler} /></>) : setReturnVal(<><Manager /></>)
      console.log(auth)
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