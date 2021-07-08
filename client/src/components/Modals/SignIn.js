import React from 'react';
import './SignIn.css'


const SignIn = () => {
    return (
        <modal>

            <div className="container container-width">
                <div className="card login-card">
                    <div className="row no-gutters" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div className="col-md-5">
                            <img src="login.jpg" alt="login" className="login-card-img" />
                        </div>
                        <div className="col-md-7" style={{ display: "flex" }}>
                            <div className="card-body" dir="rtl" style={{ display: " flex", flexDirection: "column" }}>
                                <div className="brand-wrapper">
                                    <img src="logo.svg" alt="logo" className="logo" />
                                </div>
                                <p className="login-card-description" dir="rtl" style={{ textAlign: "center" }}>כניסה למערכת</p>
                                <form action="#!">
                                    <div className="form-group">
                                        <label for="email" className="sr-only">Email</label>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="שם משתמש" style={{ borderBlockColor: "rgb(59, 182, 177)", borderRadius: "17px" }} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="password" className="sr-only">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" placeholder="סיסמה" style={{ borderBlockColor: "rgb(59, 182, 177)", borderRadius: "17px" }} />
                                    </div>
                                    <input name="login" id="login" className="btn btn-block login-btn mb-4" style={{ background: 'rgb(59, 182, 177)' , borderRadius: "17px"}} type="button" value="התחבר" />
                                </form>
                                <a href="#!" className="forgot-password-link" style={{ textAlign: "center" }}>שכחתי סיסמה</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </modal>

    )
}


export default SignIn;