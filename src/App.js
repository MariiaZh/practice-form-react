import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Renovation from './screens/renovation/Renovation';
import MainPage from "./screens/mainPage";
import BreakingBadEpisodes from './screens/breakingbadEpisodes';
import RickMorty from './screens/rickMorty';
import MemsPage from './screens/memspage';
import Todoapp from "./screens/todoapp"

import { EpisodeProvider } from "./hooks/useEpisodeData";
import Content from "./components/Content.js";

import './App.css';

function App() {

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

                <Route path="/mems">
                    <MemsPage />
                </Route>

                <Route path="/todo">
                    <Todoapp />
                </Route>


            </Switch>


        </Content>
    );
}

export default App;
