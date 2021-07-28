import React, {useState} from 'react';
// import { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import 'date-fns';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ReactMapGL from "react-map-gl" 




const Maps = () => {

    // const [selectedDate, setSelectedDate] = React.useState(new Date());
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const [viewport, setViewport] = useState({
        latitude: 31.770809,
        longitude: 35.197460,
        zoom: 9,
        width: "80vw", 
        height: "80vh",
        
    });

    return (

        <div>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        //format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        //label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{ 'aria-label': 'change date' }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>  */}

            <div style={{marginLeft: "100px"}}>
                <ReactMapGL {...viewport} 
                mapboxApiAccessToken={'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'}
                onViewportChange={(viewport) => {setViewport(viewport)}}
                //mapStyle="mapbox://styles/shirmoriya/ckrksccrh23t417qro4j7tkyi"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                >

                </ReactMapGL>
            </div>
        </div>
    );

}
export default Maps;




