import React, { useState, useEffect } from 'react';
import './SaveUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));


const SaveUser = ({ handleClose, display, handleSave }) => {
    const classes = useStyles();

    const handleChange = (prop) => (event) => {
        console.log('on change')
        //setValues({ ...userInformation, [prop]: event.target.value });
    };


    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        {/* closeIcon */}
                        <div className="col-lg-3">
                            <div className="card" style={{ height: "570px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="/assets/images/avatar0.jpg" alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
                                        <div className="mt-3">
                                            <h4>משתמש חדש במערכת</h4>
                                            <br/>
                                             <h5 className="text-secondary mb-1">סמן טיפוס עובד</h5>
                                            {/*<p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                                        
                                            <br />
                                            {/* <button class="btn btn-primary" style={{ background: "#3bb6b1" }}>tttttt</button> */}
                                            <Select id ="userType" style={{width: "170px", height: "50px", background: "#3bb6b1"}} >
                                                <option style={{fontSize: "20px", fontWeight: "bold", textAlign: "center"}} value="מנהל">מנהל</option>
                                                <option style={{fontSize: "20px", fontWeight: "bold", textAlign: "center"}} value="עובד">עובד</option>
                                            </Select>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-9" dir="rtl">
                            <div className="card">
                                <div className="card-body row mb-3" dir="rtl">
                                    <TextField fullWidth
                                        label="תעודת זהות"
                                        id="userId"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('id')}
                                    />
                                    <TextField fullWidth
                                        label="שם מלא"
                                        id="userFullName"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('fullName')}

                                    />
                                    <TextField fullWidth
                                        label="שם משתמש"
                                        id="userName"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('userName')}

                                    />
                                    <TextField fullWidth
                                        label="סיסמה"
                                        id="userPassword"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('password')}

                                    />
                                    <TextField fullWidth
                                        label="טלפון"
                                        id="userPhone"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('phone')}

                                    />
                                    <TextField fullWidth
                                        label="מייל"
                                        id="userMail"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('email')}

                                    />
                                    <TextField fullWidth
                                        label="כתובת"
                                        id="userAddress"
                                        className={clsx(classes.margin)}
                                        onChange={handleChange('address')}

                                    />
                                    <div style={{ display: 'flex', width: '100%', 'justify-content': 'center', 'align-items': 'center' }} >
                                        <Input type="button" className="btn btn-primary px-4" value="הוסף משתמש" style={{ background: "#3bb6b1", fontWeight: 'bold' }} />
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





export default SaveUser;