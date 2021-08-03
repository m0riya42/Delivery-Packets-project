import React, { useState } from 'react';
import 'date-fns';
import TableSchedule from '../../components/Modals/TableSchedule';
import Schedule from '../../components/Accessories/Schedule';



const ScheduleInfo = () => {
    const [tableIsOpen, setopenTable] = useState(false);
    const [mapLocation, setmapLocation] = useState();


    const handlers = {
      
        openTable: () => {
            //console.log('Table');
            setopenTable(true)
        },
        closeTable: () => {

            setopenTable(false)
        },

    }


    return (
        <>
             <TableSchedule location={mapLocation} display={tableIsOpen} handleClose={handlers.closeTable} ></TableSchedule> 
            <Schedule handlers={handlers} ></Schedule>

        </>
    );

}
export default ScheduleInfo;