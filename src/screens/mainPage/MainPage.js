import React from 'react';
import { Container, Paper } from '@material-ui/core';
import ListStyles from "./style/MainPageStyle";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { cardSelectionActions } from "../../store/cardSelection";

export default function MainPage(props) {
    const classes = ListStyles();

    const dispatch = useDispatch();

    const ScreenCheck = (event) => {

        let newValue = null;

        switch (event.target.id) {
            case "home": newValue = 0;
                break;
            case "apartment": newValue = 1;
                break;
            case "bbepisodes": newValue = 2;
                break;
            case "rickmorty": newValue = 3;
                break;
            case "memspage": newValue = 4;
                break;
            case "todo": newValue = 5;
                break;
            default: newValue = 0;
                break;
        }
        dispatch(cardSelectionActions.changeName(newValue));
    }


    return (
        <Container className={classes.root}>
            <Paper elevation={12}
                className='blocks'
                id="apartment"
                onClick={ScreenCheck}
                component={Link} to="/renovation">Apartment Renovation</Paper>

            <Paper elevation={12} className='blocks'
                id="bbepisodes"
                onClick={ScreenCheck}
                component={Link} to="/bbepisodes">Breaking Bad Episodes</Paper>
            <Paper elevation={12} className='blocks'
                id="rickmorty"
                onClick={ScreenCheck}
                component={Link} to="/rickmorty" >Rick and Morty</Paper>
            <Paper elevation={12} className='blocks'
                id="memspage"
                onClick={ScreenCheck}
                component={Link} to='/mems'>Mems Page</Paper>
            <Paper elevation={12} className='blocks'
                component={Link} to='/todo'
                id="todo"
                onClick={ScreenCheck}
            >To Do App</Paper>
            <Paper elevation={12} className='blocks light' component={Link} to='/home'></Paper>
        </Container>
    );
}
