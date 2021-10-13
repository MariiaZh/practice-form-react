import React, { useState, useEffect } from "react";
import ListStyles from './style/EpisodeStyle';
import { Container, Box, Button, Slider } from '@material-ui/core';
import EpisodeInfo from "./components/EpisodeInfo";
import { useProvideEpisode } from "../../hooks/useEpisodeData";
import { CharactersContextProvider, useProvideCharacters } from "../../hooks/usePhotoCharacters";

const BreakingBadEpisodes = () => {

    const classes = ListStyles();
    const [changeNumber, setChangeNumber] = useState('3');
    const { loadedEpisode, setCurrentEpisode } = useProvideEpisode();
    const { loadedCharacter, fetchCharacter } = useProvideCharacters();

    function showEpisode() {
        setCurrentEpisode(changeNumber);
        fetchCharacter();
    }

    function getEpisodeNumber() {
        setChangeNumber(`${document.querySelector("#sliderValue input[type='hidden']").value}`);
    }

    useEffect(() => {
        fetchCharacter();
    }, []);


    return (

        <Container className={classes.root}>
            <Container className="leftPart">
                <Box className="buttonWrapper">
                    <Button onClick={showEpisode}>Choose Episode</Button>
                </Box>
                <Box className='sliderWrapper'>
                    <Slider
                        id="sliderValue"
                        defaultValue={1}
                        step={1}
                        marks
                        min={1}
                        max={102}
                        valueLabelDisplay="on"
                        onMouseUp={getEpisodeNumber}
                    />

                </Box>
            </Container>

            <Container className="rightPart">
                <CharactersContextProvider>
                    <EpisodeInfo
                        image={loadedCharacter.img}
                        title={loadedEpisode.title}
                        episode={loadedEpisode.episode}
                        season={loadedEpisode.season}
                        air_date={loadedEpisode.air_date}
                    />
                </CharactersContextProvider>
            </Container>
        </Container>

    )
}

export default BreakingBadEpisodes;