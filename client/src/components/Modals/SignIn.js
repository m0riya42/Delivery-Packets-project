import React, { useState } from 'react';
import './SignIn.css'

import Input from '../../shared/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const SignIn = ({ handleClose, display }) => {
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (
        <modal className="popup-box" style={{ display: inDisplay }}>

            <div className="container container-width box">
                <div className="card login-card">
                    <div className="row no-gutters" style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div className="col-md-5">
                            <img src="login.jpg" alt="login" className="login-card-img" />
                        </div>
                        <span className="close-icon" onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                        <div className="col-md-7" style={{ display: "flex" }}>
                            <div className="card-body" dir="rtl" style={{ display: " flex", flexDirection: "column" }}>
                                <div className="brand-wrapper">
                                    <img src="logo.svg" alt="logo" className="logo" />
                                </div>
                                <p className="login-card-description" dir="rtl" style={{ textAlign: "center" }}>כניסה למערכת</p>
                                <form action="#!">
                                    <div className="form-group">
                                        <label for="email" className="sr-only">Email</label>
                                        <Input type="text" name="userName" id="userName" placeholder="שם משתמש" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="password" className="sr-only">Password</label>
                                        <Input type="password" name="password" id="password" placeholder="סיסמה" />
                                    </div>
                                    <Input type="button" name="login" id="login" value="התחבר" />

                                    {/* <input name="login" id="login" className="btn btn-block login-btn mb-4" style={{ background: 'rgb(59, 182, 177)', borderRadius: "17px" }} type="button" value="התחבר" /> */}
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