import React, { useState, Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import NavBar from '../components/Layout/NavBar';
import Preloder from '../components/Layout/Preloader';
import Footer from '../components/Layout/Footer';

import '../App.css';
import UsersInfo from './managerPages/UsersInfo';
import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'





const Manager = ({ pagesHandler }) => {
  pagesHandler([{ ref: "/Users", text: "פרטי עובדים" }, { ref: "/Try", text: "ניסיון" }]);

  return (
    <div id="managerContainer" style={{ height: "fit-content", "padding-bottom": "106px", "padding-top": "106px", background: "url(/assets/images/a0010.jpg)" }}>
      <Switch>
        <Route path="/" exact >
          <h1>Manager!! Welcome Back!!</h1>
        </Route>
        <Route path="/Users" >
          <UsersInfo />
        </Route>
        <Route path="/Try" >
          <h1>We Have To believe</h1>
        </Route>
      </Switch>
    </div>



  )

}

export default Manager;