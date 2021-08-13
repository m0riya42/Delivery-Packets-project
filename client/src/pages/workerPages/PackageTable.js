
import React, { useEffect, useState } from 'react';
import { useStyles } from '../../components/Modals/utils'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';


var packages_list = [];
var schedule = [];
var my_user = {};
let rows = [];

var date = new Date();
let string_date = date.toLocaleString();
let final_date = (string_date.split(',')[0]).replaceAll('.', '/')

let info = {
    date: final_date
}


const PackageTable = (user) => {

    const [packages, setPackages] = useState([]);
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    function createData(id, fullName, email, phone, address, packageArrived) {
        return { id, fullName, email, phone, address, packageArrived };
    }

    useEffect(() => {
        axios.post('http://localhost:9000/packages/getPackages')
            .then(res => {
                packages_list = res.data;
                axios.post('http://localhost:9000/workSchedule/getSchedule', info)
                    .then(res => {
                        schedule = res.data;
                        console.log(schedule)
                        schedule.forEach((user_p) => {
                            if (user_p.id === user.user) {
                                my_user = user_p;
                            }
                        });
                        console.log(my_user)
                        if (my_user) {
                            my_user.packages.forEach((packeage_id) => {
                                packages_list.forEach((item) => {
                                    if (item.id === packeage_id) {
                                        rows.push(createData(item.id, item.fullName, item.email, item.phone, item.address, item.packageArrived))
                                    }
                                });
                            });
                            setPackages(rows);
                            console.log(rows)

                        }
                    });
            });

    }, [])

    console.log('packages', packages)

    return (
        <div>
            <TableContainer component={Paper} style={{ margin: "auto", width: "80%", boxShadow: " 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" }}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow style={{ background: "#3bb6b1" }}>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">סטטוס</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">כתובת</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">טלפון</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">אימייל</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">שם מלא</TableCell>
                            <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">תעודת זהות</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packages.map((item) => (
                            <TableRow style={{ height: "50px" }}>
                                <TableCell>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />

                                </TableCell>
                                {/* <TableCell style={{ fontSize: "15px" }} align="right">{(item.packageArrived).toLocaleString()}</TableCell> */}
                                <TableCell style={{ fontSize: "15px" }} align="right">{item.address}</TableCell>
                                <TableCell style={{ fontSize: "15px" }} align="right">{item.phone}</TableCell>
                                <TableCell style={{ fontSize: "15px" }} align="right">{item.email}</TableCell>
                                <TableCell style={{ fontSize: "15px" }} align="right">{item.fullName}</TableCell>
                                <TableCell style={{ fontSize: "15px" }} align="right">{item.id}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PackageTable;