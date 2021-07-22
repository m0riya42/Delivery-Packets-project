import React, { useState } from 'react'
import Footer from '../components/Layout/Footer'
import NavBar from '../components/Layout/NavBar'
import Preloder from '../components/Layout/Preloader'
import HomeSection from '../components/Layout/Sections/HomeSection'
import AboutSection from '../components/Layout/Sections/AboutSection'
import FeatureSection from '../components/Layout/Sections/FeatureSection'
import TeamSkillsSection from '../components/Layout/Sections/TeamSkillsSection'
import ChooseSection from '../components/Layout/Sections/ChooseSection'
import PortfolioSection from '../components/Layout/Sections/PortfolioSection'
import TextSection from '../components/Layout/Sections/TextSection'
import SignIn from '../components/Modals/SignIn'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pages = [{ ref: "#home", text: "עמוד הבית" }, { ref: "#features", text: "אודותינו" }, { ref: "#activity", text: "הפעילות שלנו" }, { ref: "#text", text: "השותפים שלנו" }, { ref: "#contact", text: "צרו קשר" }]
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // const [token, setToken] = useState();
    function setToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));

    }

    function getToken() {

    }
    const token = getToken();

    if (!token) {
        //   return <Login setToken={setToken} />
        // }

        return (<div>
            <Preloder >
            </Preloder>
            <div className="culmn">
                <SignIn handleClose={togglePopup} display={isOpen} setToken={setToken} />
                <NavBar pages={pages} />
                <HomeSection />
                <AboutSection handleClose={togglePopup} />
                <FeatureSection />
                <ChooseSection />
                <TextSection />
                <Footer />
            </div>

        </div>
        )
    }
}

export default Home