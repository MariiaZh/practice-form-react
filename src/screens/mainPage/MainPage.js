import React from 'react';
import { Container, Box } from '@material-ui/core';
import ListStyles from "./style/MainPageStyle";
import { Link } from 'react-router-dom';


export const ScreenCheck = (event) => {
    return event.target.id
}

export default function MainPage(props) {

    const classes = ListStyles();

    return (
        <Container className={classes.root}>
            <Box
                className='blocks'
                id="apartment"
                onClick={ScreenCheck}
                component={Link} to="/renovation">Apartment Renovation</Box>

            <Box className='blocks'
                id="bbepisodes"
                onClick={ScreenCheck}
                component={Link} to="/bbepisodes">Breaking Bad Episodes</Box>

            <Box className='blocks'
                id="rickmorty"
                onClick={ScreenCheck}
                component={Link} to="/rickmorty" >Rick and Morty</Box>

            <Box className='blocks light'
                id="home"
                onClick={ScreenCheck}
                component={Link} to='/home'></Box>
            <Box className='blocks light' component={Link} to='/home'></Box>
            <Box className='blocks light' component={Link} to='/home'></Box>
        </Container>
    );
}
