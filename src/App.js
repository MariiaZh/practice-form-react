import React, { useState } from 'react';

import { Container, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { deepPurple, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

//import SelectedRoom from './components/SelectedRoom';
import KitchenForm from './screens/kitchenForm';
import LivingRoomForm from "./screens/livingRoomForm";
import BathroomForm from "./screens/bathroomForm";
import BalconyForm from './screens/balconyForm';
import BreakingBadEpisodes from './screens/breakingbadEpisodes';
import { EpisodeProvider } from "./hooks/useEpisodeData";

import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[600],
        },
        secondary: {
            main: green[500],
        },
    },
});

const useStyles = makeStyles({
    root: {
        width: 760,
        minHeight: 300,
        backgroundColor: "white",
        boxShadow: '0 3px 5px 2px rgba(183, 105, 255, 0.3)',
        borderRadius: 15,
        padding: 20,
        margin: "20px"
    },
});


function App() {

    const classes = useStyles();

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
        <React.Fragment>
            {/*<Container theme={theme} className={classes.root}>
            <SelectedRoom onSelectedRoom={chooseRoom} />
            {getForm}
        </Container>*/}
            <EpisodeProvider>
                <Container theme={theme} className={classes.root}>
                    <BreakingBadEpisodes />
                </Container>
            </EpisodeProvider>


        </React.Fragment>


    );
}

export default App;
