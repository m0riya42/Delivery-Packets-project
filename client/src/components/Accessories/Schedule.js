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

    const setDistribution = () => {
        console.log('i am here');

        let package_list = {};
        axios.post('http://localhost:9000/packages/getPackages')
            .then(res => {
                package_list = res.data;
                var string_date = selectedDate.toLocaleString();
                var today = (string_date.split(',')[0]).replaceAll('.', '/')
                let info = {
                    package_list: package_list,
                    date: today
            }
                axios.post('http://localhost:9000/workSchedule/setDistribution', info)
                .then(res => {
                    console.log(res)

                })
                .catch(err => {
                    console.log(err)
                })
            })
            .catch(err => {
                console.log(err)
            })


    }

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
                <Grid container spacing={3} direction="row-reverse">
                    {
                        location.map((item) => {
                            return <MapCard location={item} date={selectedDate} handleOpenTable={() => handlers.openTable(item, selectedDate)} />
                        })
                    }
                </Grid>
            </Container>
            <br />
            <div style={{ background: "transparent" }}>
                <input type="button" onClick={() => { setDistribution() }} className="btn btn-primary px-4" value="בצע חלוקת חבילות" style={{ background: "#3bb6b1", fontWeight: 'bold', marginLeft: "870px", marginTop: "27px", borderColor: "transparent" }} />
            </div>

        </div>

    );

}
export default Schedule;