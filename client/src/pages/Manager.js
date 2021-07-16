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
  const [editUserIsOpen, setEditUserIsOpen] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});
  const users = [{ fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'ליאור אדרי', phone: '050-654-3212', email: 'lior@gmail.com' }, { fullName: 'מאיה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }]




  const handlers = {
    //close an open
    closeHandle: () => {
      setEditUserIsOpen(!editUserIsOpen);
    },
    openChat: () => {
      console.log('chat To User');

      setChatIsOpen(!chatIsOpen)
    },
    updateUserToEdit: (user) => {
      setUserToEdit(user)
    },
    saveUser: (user) => {

      handlers.updateUserToEdit(user);
      //Send user information to the server to save it -DB
      users[0] = user
      console.log(users)


      //clse window
      handlers.closeHandle()
      //change user information on view--> refresh page
      // window.location.reload(true);
    },
    editUser: (user) => {
      //Open the Window:
      handlers.closeHandle();
      //Show User Information
      handlers.updateUserToEdit(user);

    },
    // chatToUser: () => {
    //   console.log('chat To User');
    // },
    newUser: () => {
      console.log('new User');

    }

  }

  //show 
  // {}


  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }

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

  return (
    <div>
      <Preloder >
      </Preloder>
      <NavBar pages={pages} />
      <div id="managerContainer" style={{ height: "fit-content","padding-bottom": "106px", "padding-top": "106px", background: "url(assets/images/a0010.jpg)" }}>
        <EditUser handleClose={handlers.closeHandle} display={editUserIsOpen} user={userToEdit} handleSave={handlers.saveUser} />
        <Users users={users} handlers={handlers} />
        <Chat handleClose={handlers.openChat} display={chatIsOpen} />
        {/* <Chart/> */}
      </div>
      <Footer />
    </div >
  )
}

export default Manager;