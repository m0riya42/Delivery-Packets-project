import React, { useState } from 'react'
import Footer from '../components/Layout/Footer'
import HomeSection from '../components/Layout/Sections/HomeSection'
import AboutSection from '../components/Layout/Sections/AboutSection'
import FeatureSection from '../components/Layout/Sections/FeatureSection'
import ChooseSection from '../components/Layout/Sections/ChooseSection'
import TextSection from '../components/Layout/Sections/TextSection'
import SignIn from '../components/Modals/SignIn'
const Home = ({ authenticate }) => {




    const [isOpen, setIsOpen] = useState(false);
    const openSignInPopUp = () => {
        setIsOpen(true);
    }
    const closeSignInPopUp = () => {
        setIsOpen(false);
    }

    return (<div>
        <div className="culmn">
            <SignIn handleClose={closeSignInPopUp} display={isOpen} authenticate={authenticate} />
            {/* setToken={setToken} /> */}
            <HomeSection />
            <AboutSection handleClose={openSignInPopUp} />
            <FeatureSection />
            <ChooseSection />
            <TextSection />
            <Footer />
        </div>

    </div>
    )
}


export default Home