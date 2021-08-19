import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultPieChart from "../../../components/Accessories/Charts/DefaultPieChart";
import { serverGetPackages, serverSetScheduleDistribution } from '../../../axios_requests'
import DefaultBarChart from '../../../components/Accessories/Charts/DefaultBarChart';

let city_list = [
    ["ירושלים",0,0,"Jerusalem"],
    ["עפולה",0,0,"Afula"],
    ["אשדוד",0,0,"Ashdod"],
    ["אשקלון",0,0,"Ashkelon"],
    ["תל-אביב",0,0,"Tel Aviv"],
    ["רמת-גן",0,0,"Ramat Gan"]
]

serverGetPackages()
    .then(package_list => {
        package_list.map((item) => {
            city_list.map((city) => {
                if (item.address.split(' ')[0] == city[0]) {
                    if (item.packageArrived == true) {
                        city[1] += 1
                    }
                    else {
                        city[2] += 1
                    }
                }
            })
        })
        console.log(city_list)
    })
    .catch(err => console.log(err))


const DayBarChart = ({ }) => {
    let data = []
    //1 - true, 2 - false
    city_list.map((city) => {
        data.push({ name: city[3], package_arrived_true: city[1], package_arrived_false: city[2] })

    })


    return (
        // <DefaultPieChart data={data} />
        <div>
            <br></br>
            <br></br>
            <DefaultBarChart dataset={data} />
        </div>

    )
}

export default DayBarChart