import React, { useState, useCallback, useEffect, useRef } from "react";
import UseStyles from './style/FormStyle';
import { Box, Typography, Button, Slider, TextField, Checkbox, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import EpisodeInfo from "./components/EpisodeInfo";

const BreakingBadEpisodes = () => {

    const classes = UseStyles();

    const [currentEpisode, setCurrentEpisode] = useState('https://www.breakingbadapi.com/api/episodes/10');
    const [changeNumber, setChangeNumber] = useState('10');
    const [loadedEpisode, setLoadedEpisode] = useState({});

    const fetchEpisode = useCallback(async () => {
        try {
            const response = await fetch(currentEpisode,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await response.json();

            setLoadedEpisode({
                id: data[0].episode_id,
                title: data[0].title,
                season: data[0].season,
                episode: data[0].episode,
                air_date: data[0].air_date,
                characters: data[0].characters,
            })

            console.log("loaded eps", loadedEpisode)
        } catch (error) {
            console.error(error);
        }
    }, [currentEpisode]);

    useEffect(() => {
        fetchEpisode();
    }, [currentEpisode]);

    function showEpisode() {
        let currentUrl = `https://www.breakingbadapi.com/api/episodes/${changeNumber}`;
        setCurrentEpisode(currentUrl);
    }

    function getEpisodeNumber() {
        setChangeNumber(`${document.querySelector("#sliderValue input[type='hidden']").value}`);
    }


    return <Box className={classes.root}>
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

        <EpisodeInfo
            title={loadedEpisode.title}
            episode={loadedEpisode.episode}
            season={loadedEpisode.season}
            air_date={loadedEpisode.air_date}
        />
    </Box>
}

export default BreakingBadEpisodes;