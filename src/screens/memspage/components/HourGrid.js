import React from "react";
import HourStyles from "../style/HourStyle";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useDispatch, useSelector } from "react-redux";
import { memsWorkerActions } from "../../../store/memsWorker";

const hoursArray = [];

function getHoursArray() {
    let hour = 0;
    while (hour <= 23) {
        hoursArray.push(hour);
        hour++;
    }
}
getHoursArray();

const HourGrid = (props) => {

    const classes = HourStyles();
    const currentHour = new Date().getHours();

    const dispatch = useDispatch();
    const number = useSelector(state => state.memsWorker.selectedHourNumber);

    const handleChange = (event, newAlignment) => {
        dispatch(memsWorkerActions.changeNumber(newAlignment))
    };


    const itemsList = hoursArray.map((hour) => {
        if (hour === currentHour) {
            return (
                <ToggleButton
                    key={hour}
                    value={hour}
                    className="current">{hour}
                </ToggleButton>
            )
        }
        return (
            <ToggleButton
                key={hour}
                value={hour}
            >{hour}</ToggleButton>
        )
    })

    return (
        <ToggleButtonGroup
            className={classes.root}
            color="secondary"
            value={number}
            exclusive
            onChange={handleChange} >
            {itemsList}
        </ToggleButtonGroup>)
}


export default HourGrid;
