import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Box, Tabs, Tab, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { cardSelectionActions } from "../store/cardSelection";
import { userAuthActions } from "../store/userAuth";
import { pink } from '@mui/material/colors';

import HeaderStyles from "./HeaderStyles";

export default function Header(props) {

    const classes = HeaderStyles();

    const userLogin = useSelector(state => state.userAuth.login);

    const dispatch = useDispatch();
    const value = useSelector(state => state.cardSelection.selectedName);
    const avatar = useSelector(state => state.userAuth.avatar);

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        dispatch(cardSelectionActions.changeName(newValue))
    };

    const logoutHandler = (event) => {
        dispatch(userAuthActions.logoutUser());
        dispatch(cardSelectionActions.changeName(0))
    }

    return (
        <Box className={classes.root} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {userLogin ? <Avatar className="avatarLog" >{avatar}</Avatar> :
                <Avatar className="avatar" />}
            {userLogin && (
                <Tabs className="tabs" value={value} onChange={handleChange} centered>
                    <Tab label="Home" component={Link} to='/home' />
                    <Tab label="Apartment Renovation" component={Link} to="/renovation" />
                    <Tab label="Breaking Bad Episodes" component={Link} to="/bbepisodes" />
                    <Tab label="Rick and Morty" component={Link} to="/rickmorty" />
                    <Tab label="Mems Page" component={Link} to="/mems" />
                    <Tab label="To Do App" component={Link} to="/todo" />
                    <Tab className="login" label="logout" component={Link} to="/login" onClick={logoutHandler} />
                </Tabs>
            )}

            {!userLogin && (
                <Fragment>
                    <Tab className="login" label="login" component={Link} to="/login" onClick={logoutHandler} />
                </Fragment>
            )}
        </Box >
    );
}