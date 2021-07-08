import React from 'react'
const NavBar = () => {
    return (
        <nav className="navbar navbar-default bootsnav navbar-fixed no-background white">
            <div className="top-search">
                <div className="container" >
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
            {/* <!-- End Top Search --> */}


            <div className="container" style={{ display: 'block' }}>
                <div className="attr-nav" style={{ float: "left" }}>
                    <ul>
                        <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>

                {/* <!-- Start Header Navigation --> */}
                <div className="navbar-header" style={{ float: "right", margin_left: "36px" }}>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#brand">

                        <img src="assets/images/yadToFriend.svg" className="logo" alt="" width="93px" style={{ margin: '-14px' }} />
                        {/* <img src="assets/images/icon-removebg-preview.png" className="logo" alt="" /> */}
                        {/* <!--<img src="assets/images/footer-logo.png" className="logo logo-scrolled" alt="">--> */}
                    </a>

                </div>
                {/* <!-- End Header Navigation --> */}

                {/* <!-- navbar menu --> */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" style={{ "flex-direction": "row-reverse", display: "flex" }}>
                        <li><a href="">          </a></li>
                        <li><a href="#home">עמוד הבית</a></li>
                        <li><a href="#features">אודותינו</a></li>
                        <li><a href="#activity">הפעילות שלנו</a></li>
                        <li><a href="#text">השותפים שלנו</a></li>
                        {/* <li><a href="#test">Testimonial</a></li> */}
                        <li><a href="#contact">צרו קשר</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default NavBar