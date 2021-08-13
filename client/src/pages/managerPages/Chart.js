import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultPieChart from '../../components/Accessories/Charts/DefaultPieChart';
import PagesTitles from "../../components/Accessories/Charts/PagesTitles";
import ViewDayIcon from '@material-ui/icons/ViewDay';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TabPanel from "../../components/Accessories/Charts/TabPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
}));

export default function Chart() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const listOfTabs = [
        { label: "חתך יומי", icon: <ViewDayIcon /> },
        { label: "חתך שבועי", icon: <ViewWeekIcon /> },
        { label: "חתך חודשי", icon: <DateRangeIcon /> },
    ]

    return (
        <div className={classes.root} style={{ direction: "rtl" }} >
            <PagesTitles value={value} setValue={setValue} listOfTabs={listOfTabs} />

            {/* Pages Itself */}
            <TabPanel value={value} index={0}>
                <DefaultPieChart data={[
                    { title: 'One', value: 55, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                Page Two
            </TabPanel>

            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>
        </div>
    );

}













