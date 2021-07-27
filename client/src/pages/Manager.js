import React from 'react'
//{ useState, Fragment, useEffect }
import '../App.css';
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Schedule from './managerPages/Schedule';
import Chart from './managerPages/Chart';
import Maps from './managerPages/Maps';



const Manager = ({ pagesHandler }) => {
  pagesHandler([{ ref: "/Users", text: "פרטי עובדים"}, { ref: "/Schedule", text: "סידור עבודה" }, { ref: "/Charts", text: "גרפים" }, { ref: "/Maps", text: "מפות" }, { ref: "/Try", text: "בלוג" }]);

  return (
    <div id="managerContainer" style={{ height: "fit-content", "padding-bottom": "106px", "padding-top": "106px", background: "url(/assets/images/a0010.jpg)" }}>
      <Switch>
        <Route path="/" exact >
          <h1>Manager!! Welcome Back!!</h1>
        </Route>
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
        <Route path="/Try" >
          <h1>We Have To believe</h1>
        </Route>
      </Switch>
    </div>



  )

}

export default Manager;