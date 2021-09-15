import React, { useState, useEffect } from "react";
import UseStyles from '../../style/FormStyle';
import { Box, Typography, Button, Slider } from '@material-ui/core';
import EpisodeInfo from "./components/EpisodeInfo";
import { useProvideEpisode } from "../../hooks/useEpisodeData";
import { CharactersContextProvider, useProvideCharacters } from "../../hooks/usePhotoCharacters"


const BreakingBadEpisodes = () => {

    const classes = UseStyles();
    const [changeNumber, setChangeNumber] = useState('10');
    const { loadedEpisode, setCurrentEpisode } = useProvideEpisode();
    const { loadedCharacter, fetchCharacter } = useProvideCharacters();



    function showEpisode() {
        { console.log("number showep", changeNumber) }
        setCurrentEpisode(changeNumber);
        fetchCharacter();
    }

    function getEpisodeNumber() {
        setChangeNumber(`${document.querySelector("#sliderValue input[type='hidden']").value}`);
    }

    useEffect(() => {
        fetchCharacter();
    }, []);


    return <Box className={classes.root}>

        {console.log("number", changeNumber)}
        <Typography variant="h4" component="h3">BREAKING BAD. All about episodes</Typography>
        <Box id="sliderWrapper">
            <Slider
                id="sliderValue"
                defaultValue={3}
                step={1}
                marks
                min={1}
                max={102}
                valueLabelDisplay="on"
                onMouseUp={getEpisodeNumber}
            />
            <Button onClick={showEpisode}>Choose episode</Button>
        </Box>
        <CharactersContextProvider>
            <EpisodeInfo
                image={loadedCharacter.img}
                title={loadedEpisode.title}
                episode={loadedEpisode.episode}
                season={loadedEpisode.season}
                air_date={loadedEpisode.air_date}
            />
        </CharactersContextProvider>
    </Box>
}

export default BreakingBadEpisodes;