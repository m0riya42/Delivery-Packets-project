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
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (<div>
     <Preloder > 
    </Preloder>
        <div className="culmn">
            <SignIn handleClose={togglePopup} display={isOpen} />
            <NavBar />
            <HomeSection />
            <AboutSection handleClose={togglePopup} />
            <FeatureSection />
            {/* <TeamSkillsSection /> */}
            <ChooseSection />
            {/* <PortfolioSection /> */}
            <TextSection />
            <Footer />
        </div>
        
    </div>
    )
    // (
    {/* <h2> Home works!</h2> */ }
    // )
}

export default Home