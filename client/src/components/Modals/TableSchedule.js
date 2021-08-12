import React, { useState, useEffect } from 'react';
import './EditUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './utils'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import axios from 'axios';
import setDate from 'date-fns/esm/fp/setDate/index.js';
import { without } from 'lodash'
import $ from 'jquery'

var users = []
axios.post('http://localhost:9000/usersInfo/getUsers')
    .then(res => {
        //console.log(res.data);
        users = res.data;
        //console.log(users);
    })
    .catch(err => {
        console.log(err);
    })



var cityDict = {
    'צפון': ['עפולה'],
    'דרום': ['אשדוד'],
    'מרכז': ['תל-אביב'],
    'ירושלים': ['ירושלים']
}





const TableSchedule = ({ location, date, handleClose, display, handleSave }) => {
    // const [isChecked, setIsChecked] = useState(false)
    const [deliversList, setDeleverList] = useState()
    // useEffect(() => {
    //     setDeleverList([])
    // }, [location])

    console.log(deliversList)
    const manageDeliversSelection = (isChecked, deliverId) => {
        // setIsChecked(isChecked)
        // console.log(without(deliversList, 2))
        isChecked ? deliversList.push(deliverId) : deliversList.includes(deliverId) && setDeleverList(without(deliversList, deliverId))
        // isChecked ? !deliversList.includes(deliverId) && deliversList.push(deliverId) : deliversList.includes(deliverId) && setDeleverList(without(deliversList, deliverId))
        // console.log(deliversList)
    }



    const classes = useStyles();

    const closeModal = () => {
        const inputs = document.getElementsByTagName('input')

        // for (let i = 0; i < inputs.length; i++) {
        //     if (inputs[i].type === 'checkbox') {
        //         inputs[i].checked = false
        //         inputs[i].removeAttribute('checked')
        //     }
        // }

        console.log($(":checkbox"))
        // $(":checkbox").attr('checked', false)
        // $(":checkbox").removeAttr('checked')
        // $(":checkbox").removeProp('checked')

        // handleClose()
    }

    const [mapLocation, setMapLocation] = useState({});
    useEffect(() => {
        setMapLocation(location);

        setDeleverList([])

        //start Input checkbox value as false- and later as checked before

        // $(":checkbox").removeAttr('checked')

        // $(":checkbox").removeAttr('checked')
        // $(":checkbox").removeProp('checked')
        // const inputs = document.getElementsByTagName('input')
        // const inputs = $(":checkbox").prop('checked', false)
        // console.log(inputs)

        // inputs.map(checkBoxInput => checkBoxInput.type === 'checkbox' && checkBoxInput.removeAttribute('checked'))
        // for (let i = 0; i < inputs.length; i++) {
        //     if (inputs[i].type === 'checkbox') {
        //         inputs[i].removeAttribute('checked')
        //         inputs[i].checked = false
        //     }
        // }


        //console.log(location)
    }, [location]);

    const [mapDate, setMapDate] = useState({});
    useEffect(() => {
        setMapDate(date);
        //console.log(date)
    }, [date]);


    function createData(id, fullName, address) {
        return { id, fullName, address };
    }

    const rows = [];
    let cityList = cityDict[location];
    if (cityList) {
        users.map((user) => {
            let usercity = user.address.split(' ')[0];
            if (user.type == 'עובד') {
                cityList.map((city) => {
                    if (usercity == city) {
                        rows.push(createData(user.id, user.fullName, user.address))
                    }
                })
            }
        })
    }

    const addSchedule = () => {

        //Can Save only if DeliverLIst is not Empty otherwise- drop an error
        console.log(deliversList)
        if (!deliversList.length) {
            //drop an Error
            alert('לא נבחר מחלק')


        }
        else {


            var string_date = date.toLocaleString();
            var today = (string_date.split(',')[0]).replaceAll('.', '/')
            console.log(today);
            let workerid = ''


            const info = {
                date: today,
                id: workerid
            }
            console.log(info)
            axios.post('http://localhost:9000/workSchedule/addSchedule', info)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })

            //use deliverList





            // $(":checkbox").prop('checked', false)

            //close pop up
            handleClose()
            // closeModal()



        }




    }

    /**************************************************************** */
    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';

    return (
        <modal className="popup-box" style={{ display: inDisplay }}>
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="main-body">
                    <div className="row" style={{ display: "flex" }}>
                        <div className="col-lg-12">
                            <div className="card" style={{ height: "350px" }}>
                                <div className="card-body">
                                    <span className="close-icon" onClick={handleClose}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <br /><br />
                                    <TableContainer component={Paper} style={{ margin: "auto", width: "80%", boxShadow: " 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" }}>
                                        <Table className={classes.table} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow style={{ background: "#3bb6b1" }}>
                                                    <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right"></TableCell>
                                                    <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">כתובת</TableCell>
                                                    <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">שם מלא</TableCell>
                                                    <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">תעודת זהות</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    rows.map((row) => {
                                                        // let isChecked = false;
                                                        // const setToTrue = (target) => target.checked = true
                                                        return (
                                                            <TableRow key={row.name} style={{ height: "50px" }}>
                                                                <TableCell align="right" padding="checkbox">
                                                                    {/* checked={isChecked} */}
                                                                    <Checkbox style={{ color: "#3bb6b1" }} onClick={(e) => {
                                                                        // isChecked = !isChecked
                                                                        // console.log(isChecked)
                                                                        // isChecked ? e.target.setAttribute('checked', true) && setToTrue(e.target) : e.target.removeAttribute('checked')
                                                                        manageDeliversSelection(e.target.checked, row.id)
                                                                    }} />
                                                                </TableCell>
                                                                <TableCell style={{ fontSize: "15px" }} align="right">{row.address}</TableCell>
                                                                <TableCell style={{ fontSize: "15px" }} align="right">{row.fullName}</TableCell>
                                                                <TableCell style={{ fontSize: "15px" }} align="right">{row.id}</TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <br />
                                    <div style={{ background: "transparent" }}>
                                        <input type="button" onClick={() => addSchedule()} className="btn btn-primary px-4" value="שמור לוז עבודה" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "50px", marginTop: "27px" }} />
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





export default TableSchedule;