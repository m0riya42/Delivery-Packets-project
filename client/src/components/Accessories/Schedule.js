import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import deLocale from "date-fns/locale/he";
import axios from 'axios';
import { Container } from '@material-ui/core';
import MapCard from './MapCard';



const Schedule = ({ handlers }) => {


    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [locationToOpen, setLocation] = useState({});


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
            <br /><br />
            <Container>
                <Grid container spacing={4} direction="row-reverse">
                    {
                        location.map((item) => {
                            return <MapCard location={item} handleOpenTable={() => handlers.openTable(item)} />
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