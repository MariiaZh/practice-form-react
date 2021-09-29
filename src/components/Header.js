import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Tabs, Tab } from '@material-ui/core';



export default function Header(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Home" component={Link} to='/home' />
                <Tab label="Apartment Renovation" component={Link} to="/renovation" />
                <Tab label="Breaking Bad Episodes" component={Link} to="/bbepisodes" />
                <Tab label="Rick and Morty" component={Link} to="/rickmorty" />
            </Tabs>
        </Box >

    );
}