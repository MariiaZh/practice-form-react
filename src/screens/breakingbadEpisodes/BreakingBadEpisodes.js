import React, { useState, useEffect } from "react";
import UseStyles from '../../style/FormStyle';
import { Box, Typography, Button, Slider } from '@material-ui/core';
import EpisodeInfo from "./components/EpisodeInfo";
import { useProvideEpisode } from "../../hooks/useEpisodeData";
import { CharactersContextProvider, useProvideCharacters } from "../../hooks/usePhotoCharacters";

const BreakingBadEpisodes = () => {

    const classes = UseStyles();
    const [changeNumber, setChangeNumber] = useState('3');
    const { loadedEpisode, setCurrentEpisode } = useProvideEpisode();
    const { loadedCharacter, fetchCharacter } = useProvideCharacters();

    //const params = useParams();

    function showEpisode() {
        setCurrentEpisode(changeNumber);
        fetchCharacter();
        //params.epnum = loadedEpisode.episode;
        //console.log('params.epnum:', params.epnum)

    }

    function getEpisodeNumber() {
        setChangeNumber(`${document.querySelector("#sliderValue input[type='hidden']").value}`);
    }

    useEffect(() => {
        fetchCharacter();
        //params.epnum = loadedEpisode.episode;
    }, []);


    return (

        <Box className={classes.root}>

            <Typography variant="h4" component="h3">BREAKING BAD. All about episodes</Typography>
            <Box id="sliderWrapper">
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
    )
}

export default BreakingBadEpisodes;