import React, { useState, useEffect } from 'react';
import '../App.css';
import UsersInfo from './managerPages/UsersInfo';
//import { matchPath } from "react-router";
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Schedule from './managerPages/Schedule';
import Chart from './managerPages/Chart';
import Maps from './managerPages/Maps';
import Blog from '../components/Layout/Blog';
import { Button } from '@material-ui/core';
import CreatePost from '../components/Modals/CreatePost'




const Manager = ({ pagesHandler }) => {
  pagesHandler([{ ref: "/ManagerHome", text: "דף הבית" }, { ref: "/Users", text: "פרטי עובדים" }, { ref: "/Schedule", text: "סידור עבודה" }, { ref: "/Charts", text: "גרפים" }, { ref: "/Maps", text: "מפות" }]);
  const [isOpen, setIsOpen] = useState(false);
  const [listOfPosts, updateListOfPosts] = useState({
    leftPosts:
      [],
    rightPosts: [{
      title: "פתיחת שנה ביד לחבר", titleDescription: "חבילות לראש השנה", date: new Date(2020, 8, 25), text: `
    <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.pinimg.com/originals/74/67/21/746721e4f831240a660d7a389bebb5a1.png" alt="מתנות לראש השנה - צפו במארזי מתנה, חבילות שי לראש השנה - פרלינה | Perlina" /></p>
    <p>בשעה טובה נפתח את פעילותנו במשלוח מיוחד לכבוד ראש השנה.</p>
    <p ><strong>עובדים יקרים! </strong>יש לעדכן את שעות הפעילות בהם לא תוכלו לעבוד.</p>
    <p><span style="color: #ff0000;"><strong>שנה טובה לכולנו!</strong></span></p>`, images: []
    }, {
      title: "מעבר כתובת", titleDescription: "שינוי כתובת העמותה", date: new Date(2020, 8, 31), text: `<p>&nbsp;</p>
    <p>&nbsp;</p>
    <p><img src="https://icon-library.com/images/position-icon/position-icon-8.jpg" width="184" height="184" /></p>
    <p><strong>שימו לב!&nbsp;</strong>עברנו לכתובת חדשה:</p>
    <p>&nbsp;בית הדפוס 7, גבעת שאול, ירושלים</p>
    <p>&nbsp;</p>`}, {
      title: 'שעות חלוקה בשבוע הקרוב', titleDescription: 'עדכון שעות', date: new Date(2020, 9, 4), text: `<p><img src="https://www.ynet.co.il/PicServer5/2019/04/11/9180259/917944801000100980651no.jpg" alt="היכן נתנדב השבוע?" width="343" height="213" /></p>
  <p>בשבוע הקרוב החלוקות ייתקיימו בין השעות:</p>
  <p>15:30-20:00</p>
  <p>נסיעה טובה!</p>`}]
  });


  // useEffect(() => {
  //get post from server

  // const serverReq= 
  //     updateListOfPosts(user);
  // }, [user]);


  const openEditPost = () => {
    setIsOpen(true);
  }
  const closeEditPost = () => {
    setIsOpen(false);
  }

  const publishPost = (newPost) => {
    //send to DB
    //update view?


    // const newList = {
    //   ...listOfPosts, ...{
    //     rightPosts: newPost
    //   }
    // }
    // updateListOfPosts(newList)
    console.log(newPost)
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
          <Button onClick={openEditPost} variant="outlined" color="primary" style={{ right: '-87%', width: '159px', 'font-size': '23px', height: '61px' }}>
            פוסט חדש
          </Button>
          <Blog listOfPosts={listOfPosts} />
        </Route>
        <Redirect from="/" to="/ManagerHome" />
to: object
      </Switch>
    </div >



  )

}

export default Manager;