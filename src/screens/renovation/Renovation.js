import React, { useState } from "react";
import { Typography, Container } from "@material-ui/core";
import SelectedRoom from "./components/SelectedRoom";
import KitchenForm from './rooms/kitchenForm';
import LivingRoomForm from "./rooms/livingRoomForm";
import BathroomForm from "./rooms/bathroomForm";
import BalconyForm from './rooms/balconyForm';
import UseStyles from "../../style/FormStyle";
import { createTheme } from '@material-ui/core/styles';
import { deepPurple, yellow } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[600],
        },
        secondary: {
            main: yellow[500],
        },
    },
});


const Renovation = (props) => {

    const classes = UseStyles();
    const [selectedRoom, setSelectedRoom] = useState('Make choice');

    const chooseRoom = (room) => {
        setSelectedRoom(room);
    }

    let getForm = null;

    switch (selectedRoom) {
        case "Kitchen": getForm = <KitchenForm />;
            break;
        case "Living room": getForm = <LivingRoomForm />
            break;
        case "Bathroom": getForm = <BathroomForm />
            break;
        case "Balcony": getForm = <BalconyForm />
            break;
        default: getForm = <Typography variant="h6">Please, choose room for renovation!</Typography>
    }

    return (
        <Container theme={theme} className={classes.root}>
            <SelectedRoom onSelectedRoom={chooseRoom} />
            {getForm}
        </Container>
    )
}

export default Renovation;