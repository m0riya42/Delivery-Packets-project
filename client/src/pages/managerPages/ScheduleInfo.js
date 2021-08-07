import React, { useState } from 'react';
import 'date-fns';
import TableSchedule from '../../components/Modals/TableSchedule';
import Schedule from '../../components/Accessories/Schedule';



const ScheduleInfo = () => {
    const [tableIsOpen, setopenTable] = useState(false);
    const [mapLocation, setMapLocation] = useState({});


    const handlers = {

        openTable: (location) => {
            //console.log('Table');
            setopenTable(true);

            handlers.updateLocationToOpen(location);
        },
        closeTable: () => {

            setopenTable(false)
        },
        updateLocationToOpen: (location) => {
            setMapLocation(location);
            // console.log(location)
        }

    }


    return (
        <>
            <TableSchedule location={mapLocation.title} display={tableIsOpen} handleClose={handlers.closeTable} ></TableSchedule>
            <Schedule handlers={handlers} ></Schedule>

        </>
    );

}
export default ScheduleInfo;