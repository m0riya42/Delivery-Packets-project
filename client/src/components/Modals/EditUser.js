import React, { useState, useEffect } from 'react';
import './EditUser.css'
// import Input from '../../shared/components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { create } from 'jss';
// import rtl from 'jss-rtl';


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


const EditUser = ({ user, handleClose, display, handleSave }) => {
    const classes = useStyles();
    console.log(user)
    const [userInformation, setValues] = useState({});
    useEffect(() => {
        setValues(user);
    }, [user]);
    console.log(userInformation)

    const updateUser = () => {
        console.log('update user')
        return userInformation
    }

    const handleChange = (prop) => (event) => {
        console.log('on change')
        setValues({ ...userInformation, [prop]: event.target.value });
    };






    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "80px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        {/* closeIcon */}
                        <div className="col-lg-4">
                            <div className="card" style={{ height: "470px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="assets/images/avatar7.png" alt="Admin" class="rounded-circle p-1" width="110" style={{ backgroundColor: "#3bb6b1" }} />
                                        <div className="mt-3">
                                            <h4>{userInformation.fullName}</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <br />
                                            <button class="btn btn-primary" style={{ background: "#3bb6b1" }}>מנהל\עובד</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-8" dir="rtl">
                            <div className="card">
                                <div className="card-body row mb-3" dir="rtl">
                                    <TextField fullWidth
                                        label="תעודת זהות"
                                        id="userId"
                                        className={clsx(classes.margin)}
                                        style={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0% !important' }}
                                        // style={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right' }}
                                        value={userInformation.id}
                                        onChange={handleChange('id')}
                                    />
                                    <br></br>
                                    <TextField fullWidth
                                        label="שם מלא"
                                        id="userFullName"
                                        className={clsx(classes.margin)}
                                        // classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.fullName}
                                        onChange={handleChange('fullName')}

                                    />
                                    <TextField fullWidth
                                        label="טלפון"
                                        id="userPhone"
                                        className={clsx(classes.margin)}
                                        value={userInformation.phone}
                                        onChange={handleChange('phone')}

                                    />
                                    <TextField fullWidth
                                        label="מייל"
                                        id="userMail"
                                        className={clsx(classes.margin)}
                                        value={userInformation.email}
                                        onChange={handleChange('email')}

                                    />
                                    <TextField fullWidth
                                        label="כתובת"
                                        id="userAddress"
                                        className={clsx(classes.margin)}
                                        value={userInformation.address}
                                        onChange={handleChange('address')}

                                    />
                                    <div style={{ display: 'flex', width: '100%', 'justify-content': 'center', 'align-items': 'center' }} >
                                        <Input type="button" onClick={() => { console.log('save'); handleSave(updateUser()) }} className="btn btn-primary px-4" value="שמור שינויים" style={{ background: "#3bb6b1", fontWeight: 'bold' }} />
                                    </div>


                                    {/* </FormControl> 
                                    <FormControl fullWidth className={classes.margin}>
                                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={values.amount}
                                            onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl> */}
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