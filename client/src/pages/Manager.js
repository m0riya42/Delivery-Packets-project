import React from 'react'
import NavBar from '../components/Layout/NavBar';
import Preloder from '../components/Layout/Preloader';
import Footer from '../components/Layout/Footer';
import '../App.css';
import Users from './managerPages/Users';

const Manager = () => {
    const pages = [{ ref: "/manager/blog", text: "בלוג" }]


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

    const users = [{ fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }, { fullName: 'אוריה כהן' }]
    return (

        <div>
            <Preloder >
            </Preloder>
            <NavBar pages={pages} />
            <div id="managerContainer" style={{ height: "100rem", "padding-top": "106px" }}>
                <Users users={users} />
            </div>
            {/* <Chat/> */}
            <Footer />
        </div >
    )
}

export default Manager;