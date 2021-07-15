import React, { useState } from 'react';
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
    // const [userInformation, setIsOpen] = useState(user);
    const userInformation = { ...user };
    // const userInformation = { name: 'moriya' };
    const updateUser = () => {

        return userInformation
    }

    /**************************************************************** */


    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <br />
                                            <button class="btn btn-primary" style={{ background: "#3bb6b1" }}>מנהל\עובד</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* userInformation */}
                        {/* ********************************************************* */}
                        {/* <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input value={userInformation.id} type="text" className="form-control" style={{ borderColor: "#3bb6b1", borderRadius: 5 }} />
                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px" }}>תעודת זהות</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input value={userInformation.fullName} type="text" className="form-control" style={{ borderColor: "#3bb6b1" }} />
                                            <TextField id="userFullName" label="Required" defaultValue="Hello World" />

                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px" }}>שם מלא</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input value={userInformation.phone} type="text" className="form-control" style={{ borderColor: "#3bb6b1" }} />
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px" }}>טלפון</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input value={userInformation.email} type="text" className="form-control" style={{ borderColor: "#3bb6b1" }} />
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0" style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px" }}>מייל</h6>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-9 text-secondary" dir="rtl">
                                            <input value={userInformation.address} type="text" className="form-control" style={{ borderColor: "#3bb6b1" }} />
                                        </div>
                                        <div className="col-sm-3" >
                                            <h6 className="mb-0" style={{ textAlign: "right", fontSize: "15px", fontWeight: "bold", marginTop: "15px" }}>כתובת</h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-6 text-secondary">
                                            <Input type="button" handle={() => handleSave(updateUser())} className="btn btn-primary px-4" value="שמור שינויים" style={{ borderColor: "#3bb6b1" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* new */}



                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body row mb-3" dir="rtl">
                                    <TextField fullWidth
                                        label="תעודת זהות"
                                        id="userId"
                                        className={clsx(classes.margin)}
                                        style={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0% !important' }}
                                        // style={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right' }}
                                        value={userInformation.id}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    // }}
                                    />
                                    <br></br>
                                    <TextField fullWidth
                                        label="שם מלא"
                                        id="userFullName"
                                        className={clsx(classes.margin)}
                                        classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.fullName}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    // }}
                                    />
                                    <TextField fullWidth
                                        label="טלפון"
                                        id="userPhone"
                                        className={clsx(classes.margin)}
                                        classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.phone}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    // }}
                                    />
                                    <TextField fullWidth
                                        label="מייל"
                                        id="userMail"
                                        className={clsx(classes.margin)}
                                        classes={{ borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', right: ' 0 % !important' }}
                                        value={userInformation.email}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    // }}
                                    />
                                    <TextField fullWidth
                                        label="כתובת"
                                        id="userAddress"
                                        className={clsx(classes.margin)}
                                        style={{ right: ' 0% !important', borderColor: "#3bb6b1", borderRadius: 5, textAlign: 'right', }}
                                        value={userInformation.address}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    // }}
                                    />
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-6 text-secondary" >
                                            <Input type="button" handle={() => handleSave(updateUser())} className="btn btn-primary px-4" value="שמור שינויים" style={{ borderColor: "#3bb6b1", 'margin-right': '148px' }} />
                                        </div>
                                    </div>

                                    {/* <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl> */}
                                    {/* <FormControl fullWidth className={classes.margin}>
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




                        {/* new */}

                    </div>
                </div>
            </div>
        </modal>

    )
}





export default EditUser;