import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import ReactMapGL from "react-map-gl"
//import Geocode from "react-geocode";
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import axios from 'axios';


const  getCoordinates =  async (location) =>  {
    let url = 'https://us1.locationiq.com/v1/search.php?key=pk.1b51763a32aec03e04936d4c92da7191&q=' + location + '&format=json'
    //console.log(url);
     axios.post(url)
        .then(res => {
            let lat = res.data[0]['lat'];
            let lon = res.data[0]['lon'];
            return lat, lon;
        })
        .catch(err => {
            console.log(err);
        })
}

var packages = [];
var address = {};
var israel = " ישראל";



const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'


const Maps = () => {


     useEffect(()=>{
         console.log("hkjdhk")
        axios.post('http://localhost:9000/packages/getPackages')
        .then(res => {
            packages = res.data;
            //console.log(packages);
            packages.map((item) => {
                let full_address = israel + " " + item.address;
                //console.log(full_address)
                getCoordinates(full_address.replaceAll(' ','%20')).then((lat, lon)=>{

                    address[item.id] = { 'lat': lat, 'lon': lon };
                })
            })
            console.log(address)
        })
        .catch(err => {
        })
   },[])

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

            {/* <div style={{ marginLeft: "100px" }}>
                <ReactMapGL {...viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoic2hpcm1vcml5YSIsImEiOiJja3JnYmJnZG0xNjBnMnBvZXkwNXd0cTI3In0.vOf4FC-jyEslysGuFIhsSA'}
                    onViewportChange={(viewport) => { setViewport(viewport) }}
                    //mapStyle="mapbox://styles/shirmoriya/ckrksccrh23t417qro4j7tkyi"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                  
                </ReactMapGL>  

            </div>*/}
        </div>
    );

}
export default Maps;




