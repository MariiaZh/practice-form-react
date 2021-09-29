import React from 'react';

import { Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { deepPurple, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import Renovation from './screens/renovation/Renovation';

import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./screens/mainPage";
import BreakingBadEpisodes from './screens/breakingbadEpisodes';
import RickMorty from './screens/rickMorty';
import { EpisodeProvider } from "./hooks/useEpisodeData";
import Content from "./components/Content.js";

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

    return (
        <Content>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <MainPage />
                </Route>

                <Route path="/renovation">
                    <Renovation />
                </Route>

                <Route path="/bbepisodes">
                    <EpisodeProvider>
                        <BreakingBadEpisodes />
                    </EpisodeProvider>
                </Route>

                <Route path="/rickmorty">
                    <RickMorty />
                </Route>
            </Switch>
        </Content>
    );
}

export default App;
