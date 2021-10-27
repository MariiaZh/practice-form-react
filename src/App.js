import React, { Fragment } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Renovation from './screens/renovation/Renovation';
import MainPage from "./screens/mainPage";
import BreakingBadEpisodes from './screens/breakingbadEpisodes';
import RickMorty from './screens/rickMorty';
import MemsPage from './screens/memspage';
import Todoapp from "./screens/todoapp";
import Authentication from "./screens/authentication";

import { useSelector } from 'react-redux';

import { EpisodeProvider } from "./hooks/useEpisodeData";
import Content from "./components/Content.js";

import './App.css';

function App() {

    const userLogin = useSelector(state => state.userAuth.login);
    console.log(userLogin)
    return (
        <Content>
            <Switch>
                {userLogin && (
                    <Fragment>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/login" exact>
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
                        <Route path="/mems">
                            <MemsPage />
                        </Route>
                        <Route path="/todo">
                            <Todoapp />
                        </Route>
                    </Fragment>
                )}

                {!userLogin && (
                    <Fragment>
                        <Route path="/login">
                            <Authentication />
                        </Route>
                    </Fragment>
                )}
            </Switch>
        </Content>
    );
}

export default App;
