import React, { useState, Fragment } from 'react'
import NavBar from '../components/Layout/NavBar';
import Preloder from '../components/Layout/Preloader';
import Footer from '../components/Layout/Footer';
import '../App.css';
import Users from './managerPages/Users';
import EditUser from '../components/Modals/EditUser';
import Chart from './managerPages/Chart';
import Chat from '../components/Modals/Chat';

const Manager = () => {
  const pages = [{ ref: "/manager/Users", text: "פרטי עובדים" }, { ref: "/", text: "" }, { ref: "/", text: "" }, { ref: "/", text: "" }]
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
      setIsOpen(!isOpen);
  }

  /* return <Router>
  <Switch>
    <Route path="/manager/" exact>
      <Home />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/manager" exact>
      <Manager />
    </Route>
    <Redirect to="/" />
  </Switch>
</Router>*/

  const users = [{ fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }]
  return (
    <div>
      <Preloder >
      </Preloder>
      <NavBar pages={pages} />
      <div id="managerContainer" style={{ height: "100rem", "padding-top": "106px", background: "url(assets/images/a0010.jpg)" }}>
         <EditUser handleClose={togglePopup} display={isOpen}/> 
          <Users users={users} handleClose={togglePopup} />  
          {/* <Chat handleClose={togglePopup} display={true}/> */}
          {/* <Chart/> */}
      </div>
      <Footer />
    </div >
  )
}

export default Manager;