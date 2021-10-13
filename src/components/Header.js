import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Tabs, Tab } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { cardSelectionActions } from "../store/cardSelection"


export default function Header(props) {

    const dispatch = useDispatch();
    const value = useSelector(state => state.cardSelection.selectedName)

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        dispatch(cardSelectionActions.changeName(newValue))

    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Home" component={Link} to='/home' />
                <Tab label="Apartment Renovation" component={Link} to="/renovation" />
                <Tab label="Breaking Bad Episodes" component={Link} to="/bbepisodes" />
                <Tab label="Rick and Morty" component={Link} to="/rickmorty" />
                <Tab label="Mems Page" component={Link} to="/mems" />
                <Tab label="To Do App" component={Link} to="/todo" />
            </Tabs>
        </Box >

    );
}