import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ReactMapGL, { Marker } from "react-map-gl";
// import Geocode from "react-geocode";
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// import MapGL from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'
import './map.css'
import axios from 'axios';

var packages = [];
var lat_lon = [];

// const getCoordinates = async (location, id) => {
//     let url = 'https://us1.locationiq.com/v1/search.php?key=pk.1b51763a32aec03e04936d4c92da7191&q=' + location + '&format=json'
//     //console.log(url);
//     axios.post(url)
//         .then(res => {
//             let lat = res.data[0]['lat'];
//             let lon = res.data[0]['lon'];
//             //console.log(lat) 
//             address[id] = { 'lat': lat, 'lon': lon };
//             //console.log(address)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }





const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'


const Maps = () => {


    useEffect(() => {
        axios.post('http://localhost:9000/packages/getPackages')
            .then(res => {
                packages = res.data;
                packages.map((item) => {
                    let temp = { 'id': item.id, 'lat': parseFloat(item.lat), 'lon': parseFloat(item.lon) }
                    lat_lon.push(temp)
                })
                console.log(lat_lon)
            })
            .catch(err => {
            })
    }, [])

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

            <div style={{ marginLeft: "100px" }}>
                <ReactMapGL {...viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'}
                    onViewportChange={(viewport) => { setViewport(viewport) }}
                    //mapStyle="mapbox://styles/shirmoriya/ckrksccrh23t417qro4j7tkyi"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                    {lat_lon.map(item => (

                        <Marker key={item.id} latitude={item.lat} longitude={item.lon}>
                             <button className= 'marker-btn'>
                                 <img src='/assets/images/check-mark-button-emoji.png' /> 
                            </button> 
                        </Marker>
                    ))}
                </ReactMapGL>

            </div>
        </div>
    );

}
export default Maps;




