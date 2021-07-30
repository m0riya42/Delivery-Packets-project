import React, { useState, useEffect } from 'react';
import './EditUser.css'
// import Input from '../../shared/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './utils'

// import { create } from 'jss';
// import rtl from 'jss-rtl';




const PickDevider = ({ location, handleClose, display, handleSave }) => {
    const classes = useStyles();
   

    const handleChange = (prop) => (event) => {
        console.log('on change')
        setValues({ ...userInformation, [prop]: event.target.value });
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
                        <div className="col-lg-4">
                            <div className="card" style={{ height: "445px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="" alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
                                        <div className="mt-3">
                                            <button class="btn btn-primary" style={{ background: "#3bb6b1" }}></button>
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





export default PickDevider;