import React from 'react'
const HomeSection = () => {
    return (
        <section id="home" className="home bg-white fix" >
            <div className="overlay" style={{ background: "url(/assets/images/a006.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="main_home text-center">
                        <div className="col-md-12">
                            <div className="hello">
                                <div className="slid_item">
                                    <div className="home_text ">
                                        <h1 className="text-yellow">ברוכים הבאים</h1>
                                        <h3 className="text-white text-uppercase"> </h3>
                                    </div>
                                </div>
                                {/* <!-- End off slid item --> */}

                            </div>
                        </div>

                    </div>


                    {/* <a className="mouse-scroll" href="#about">
                        <span className="mouse">
                            <span className="mouse-movement"></span>
                        </span>
                        <span className="mouse-message fadeIn">גלול מטה</span> <br />
                        {/* <!--<i className="fa fa-angle-down m-top-10 fadeIn mouse-message"></i>-->  
                    </a> */}

                </div>
                {/* <!--End off row--> */}
            </div>
            {/* <!--End off container --> */}
        </section>
        //  <!--End off Home Sections-->

    )
}

export default HomeSection