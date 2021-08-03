import React from 'react';
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

var users = []
axios.post('http://localhost:9000/usersInfo/getUsers')
    .then(res => {
        //console.log(res.data);
        users = res.data;
        console.log(users);
    })
    .catch(err => {
        console.log(err);
    })



    var cityDict = {
        'צפון':['קריית-שמונה'],
        'דרום':['אשדוד'],
        'מרכז':['תל-אביב'],
        'ירושלים':['ירושלים']
    }


const TableSchedule = ({ location, handleClose, display, handleSave }) => {
    const classes = useStyles();


    function createData(id, fullName, address) {
        return { id, fullName, address };
    }

    const rows = [];

    let location2 = "ירושלים";
    let cityList = cityDict[location2]
    users.map((user) => {
        let usercity = user.address.split(' ')[0];
        if (user.type == 'עובד') {
            cityList.map((city) => {
                console.log(city)
                console.log(usercity)
                if (usercity == city){
                    rows.push(createData(user.id, user.fullName, user.address))
                }
            })
        }
    })

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
                                    <br /><br/>
                                    <TableContainer component={Paper} style={{ margin: "auto", width: "80%", boxShadow:" 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" }}>
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
                                                {rows.map((row) => (
                                                    <TableRow key={row.name} style={{ height: "50px" }}>
                                                        <TableCell align="right" padding="checkbox">
                                                            <Checkbox />
                                                        </TableCell>
                                                        <TableCell style={{ fontSize: "15px" }} align="right">{row.address}</TableCell>
                                                        <TableCell style={{ fontSize: "15px" }} align="right">{row.fullName}</TableCell>
                                                        <TableCell style={{ fontSize: "15px" }} align="right">{row.id}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <br/>
                                    <div style={{ background: "transparent" }}>
                                        <input type="button" className="btn btn-primary px-4" value="שמור לוז עבודה" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "50px", marginTop: "27px" }} />
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