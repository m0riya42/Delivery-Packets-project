import React from 'react'
const AboutSection = () => {
    return (
        <section id="about" className="about bg-yellow roomy-80" style={{background: "#3bb6b1"}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main_about text-center">
                            <h2 className="text-black" style={{font_weight: "600"}}>יד לחבר</h2>
                            <h1 className="text-white">- <i className="fa fa-heart" style={{color:"red"}}></i> -</h1>
                            <h3 className="text-black text-uppercase">גוף התנדבותי התומך באוכלוסיות קשישים ובעלי מוגבלות המספק חבילות מזון ותרופות</h3>

                            <a href="" className="btn btn-primary m-top-100">התחברות</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;