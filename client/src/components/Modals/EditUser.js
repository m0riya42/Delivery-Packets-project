import React, { useState } from 'react';
import './EditUser.css'
import Input from '../../shared/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const EditUser = ({user, handleClose, display }) => {
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{marginTop: "80px"}}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex"}}>
                        <div className="col-lg-4">
                            <div className="card" style={{height: "470px"}}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="assets/images/avatar7.png" alt="Admin" class="rounded-circle p-1" width="110" style ={{backgroundColor: "#3bb6b1"}} />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <br/>
                                            <button class="btn btn-primary"  style={{background: "#3bb6b1"}}>מנהל\עובד</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input type="text" className="form-control" style={{borderColor: "#3bb6b1"}}  />
                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px"}}>תעודת זהות</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input type="text" className="form-control" style={{borderColor: "#3bb6b1"}} />
                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px"}}>שם מלא</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input type="text" className="form-control" style={{borderColor: "#3bb6b1"}} />
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px"}}>טלפון</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input type="text" className="form-control" style={{borderColor: "#3bb6b1"}}  />
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px"}}>מייל</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input type="text" className="form-control" style={{borderColor: "#3bb6b1"}}  />
                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px"}}>כתובת</h6>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-6 text-secondary">
                                            <Input type="button" className="btn btn-primary px-4" value="שמור שינויים" style={{borderColor: "#3bb6b1"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>

    )
}

export default EditUser;