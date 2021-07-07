import React from 'react'
const NavBar = () => {
    return (
        <nav className="navbar navbar-default bootsnav navbar-fixed no-background white">
            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
            {/* <!-- End Top Search --> */}


            <div className="container">
                <div className="attr-nav">
                    <ul>
                        <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>

                {/* <!-- Start Header Navigation --> */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#brand">
                        <img src="assets/images/logo.png" className="logo" alt="" />
                        {/* <!--<img src="assets/images/footer-logo.png" className="logo logo-scrolled" alt="">--> */}
                    </a>

                </div>
                {/* <!-- End Header Navigation --> */}

                {/* <!-- navbar menu --> */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#test">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavBar