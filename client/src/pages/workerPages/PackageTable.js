
import React, { useEffect, useState } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import PackagesTabel from '../../components/Modals/PackagesTabel/PackagesTabel';


var packages_list = [];
var schedule = [];
var my_user = {};


var date = new Date();
let string_date = date.toLocaleString();
let final_date = (string_date.split(',')[0]).replaceAll('.', '/')

let info = {
    date: final_date
}


const PackageTable = (user) => {

    const [packages, setPackages] = useState([]);

    function createData(id, fullName, email, phone, address, packageArrived) {
        return { id, fullName, email, phone, address, packageArrived };
    }

    useEffect(() => {
        let rows = [];
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
            <PackagesTabel packages={packages} />
        </div>
    )
}

export default PackageTable;