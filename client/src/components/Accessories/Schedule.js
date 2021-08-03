import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import deLocale from "date-fns/locale/he";
import axios from 'axios';
import { Container } from '@material-ui/core';
import MapCard from './MapCard';


// var users = []
// axios.post('http://localhost:9000/usersInfo/getUsers')
//     .then(res => {
//         //console.log(res.data);
//         users = res.data;
//         //console.log(users);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});


const Schedule = ({handlers}) => {
     //const classes = useStyles();



    // function createData(id, fullName, address) {
    //     return { id, fullName, address };
    // }

    // const rows = [];

    // users.map((user) => {
    //     rows.push(createData(user.id, user.fullName, user.address))
    // })

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    let location = [
        { title: "צפון", image: "/assets/images/map.jpg" },
        { title: "דרום", image: "/assets/images/map.jpg" },
        { title: "מרכז", image: "/assets/images/map.jpg" },
        { title: "ירושלים", image: "/assets/images/map.jpg" },
    ];
    return (

        //     <div>
        //         <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
        //             <Grid container justifyContent="space-around" >
        //                 <KeyboardDatePicker 
        //                     disableToolbar
        //                     variant="inline"
        //                     format="dd/MM/yyyy"
        //                     margin="normal"
        //                     id="date-picker-inline"
        //                     //label="Date picker inline"
        //                     value={selectedDate}
        //                     onChange={handleDateChange}
        //                     KeyboardButtonProps={{ 'aria-label': 'change date' }}
        //                 />
        //             </Grid>
        //         </MuiPickersUtilsProvider>

        //         <br></br><br></br>
        //         <TableContainer component={Paper} style={{ margin: "auto", width: "80%" }}>
        //             <Table className={classes.table} size="small" aria-label="a dense table">
        //                 <TableHead>
        //                     <TableRow style={{ background: "#3bb6b1" }}>
        //                         <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right"></TableCell>
        //                         <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">כתובת</TableCell>
        //                         <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">שם מלא</TableCell>
        //                         <TableCell style={{ fontWeight: "bold", color: "white", fontSize: "15px" }} align="right">תעודת זהות</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {rows.map((row) => (
        //                         <TableRow key={row.name} style={{ height: "50px" }}>
        //                             <TableCell align="right" padding="checkbox">
        //                                 <Checkbox />
        //                             </TableCell>
        //                             <TableCell style={{ fontSize: "15px" }} align="right">{row.address}</TableCell>
        //                             <TableCell style={{ fontSize: "15px" }} align="right">{row.fullName}</TableCell>
        //                             <TableCell style={{ fontSize: "15px" }} align="right">{row.id}</TableCell>
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table>
        //         </TableContainer>
        //         <div style={{ background: "transparent" }}>
        //             <input type="button" className="btn btn-primary px-4" value="שמור לוז עבודה" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "196px", marginTop: "27px" }} />
        //         </div>
        //     </div >

        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
                <Grid container justifyContent="space-around" >
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        //label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{ 'aria-label': 'change date' }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <br/><br/>
            <Container>
                <Grid container spacing={4} direction="row-reverse">
                    {
                        location.map((item) => {
                            return <MapCard location={item} handleOpenTable={handlers.openTable} />
                        })
                    }
                </Grid>
            </Container>

            {/* <div style={{ background: "transparent" }}>
                <input type="button" className="btn btn-primary px-4" value="שמור לוז עבודה" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "800px", marginTop: "27px" }} />
            </div> */}

        </div>

    );

}
export default Schedule;