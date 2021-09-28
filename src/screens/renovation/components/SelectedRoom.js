import React from 'react';
import { FormControl, NativeSelect, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        color: green[800],
        padding: '15px',
    },

});

const SelectedRoom = (props) => {

    const classes = useStyles();

    const changeRoomHandler = (event) => {
        props.onSelectedRoom(event.target.value);
    }

    return (
        <FormControl className={classes.root}>
            <Typography variant="h4" component="h3">Choose the room for renovation:</Typography>
            <NativeSelect id="rooms" value={props.selected} onChange={changeRoomHandler}>
                <option value="" style={{ fontStyle: "italic" }}>Make choice</option>
                <option value="Living room">Living room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Balcony">Balcony</option>
            </NativeSelect>
        </FormControl>
    );
}

export default SelectedRoom;

