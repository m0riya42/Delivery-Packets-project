import React from 'react'

const ChooseSection = () => {
    return (
        // <!--Choose section-->
        <section id="choose" className="choose bg-grey roomy-80">
            <div className="container">
                <div className="row">
                    <div className="main_choose">
                        <div className="col-md-6">
                            <div className="choose_mac">
                                <div className="choose_slide">
                                    <div className="choose_item">
                                        <img src="assets/images/rsz_hands-2847508_1920.jpg" alt="" />
                                    </div>
                                    <div className="choose_item">
                                        <img src="assets/images/rsz_team-spirit-2447163_1920.jpg" alt="" />
                                    </div>
                                    <div className="choose_item">
                                        <img src="assets/images/rsz_hands-2906458_1920.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End off col-md-6 --> */}

                        <div className="col-md-5 col-md-offset-1">
                            <div className="choose_content sm-m-top-40">
                                <div className="head_title">
                                    <h2 className="text-uppercase">הפעילות <strong>שלנו</strong></h2>
                                </div>
                                <div className="choose_item_text fix">
                                    <h6><i className="fa fa-check-square-o"></i> סיוע לחיים</h6>
                                    <p>סיוע ורשת תמיכה בנזקקים ובעלי מוגבלויות </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o"></i> ביטחון תזונתי</h6>
                                    <p>צמצום בעיית אי הביטחן התזונתי </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o"></i> ביטחון תרופתי</h6>
                                    <p>דאגה והספקה של תרופות  </p>
                                </div>
                                <div className="choose_item_text fix m-top-20">
                                    <h6><i className="fa fa-check-square-o"></i> העלאת מודעות</h6>
                                    <p>העלאת המודעות לבעיית העוני והובלת שינוי </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End off col-md-6 --> */}
                    </div>
                </div>
                {/* <!-- End off row --> */}
            </div>
            {/* <!-- End off container --> */}
        </section>
        // <!-- End off choose section -->
    )
}

export default ChooseSection