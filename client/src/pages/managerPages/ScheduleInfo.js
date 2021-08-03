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
import MapCard from '../../components/Accessories/MapCard';
import TableSchedule from '../../components/Modals/TableSchedule';
import Schedule from '../../components/Accessories/Schedule';



const ScheduleInfo = () => {
    const [tableIsOpen, setopenTable] = useState(false);


    const handlers = {
      
        openTable: () => {
            console.log('Table');

            setopenTable(true)
        },
        closeTable: () => {

            setopenTable(false)
        },

    }


    return (
        <>
            <TableSchedule  display={tableIsOpen} handleClose={handlers.closeTable} ></TableSchedule>
            <Schedule handlers={handlers} ></Schedule>

        </>
    );

}
export default ScheduleInfo;