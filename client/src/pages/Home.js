import React, { useState } from 'react'
import WelcomeSection from './HomeSections/WelcomeSection'
import OpenningSection from './HomeSections/OpenningSection'
import AboutSection from './HomeSections/AboutSection'
import OurActivitiesSection from './HomeSections/OurActivitiesSection'
import OurPartnersSection from './HomeSections/OurPartnersSection'
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
            <WelcomeSection />
            <OpenningSection signInPopUp={openSignInPopUp} />
            <AboutSection />
            <OurActivitiesSection />
            <OurPartnersSection />
        </div>
    </div>
    )
}


export default Home