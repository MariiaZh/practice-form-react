import React, { useContext, useState, useCallback, useEffect } from "react";
import FetchRequest from "../helpers/validation/api/FetchRequest";

export const EpisodeContext = React.createContext();

export const EpisodeProvider = ({ children }) => {
    const data = useProvideEpisode();
    return <EpisodeContext.Provider value={data}>{children}</EpisodeContext.Provider>;
};

export const useEpisodeData = () => {
    return useContext(EpisodeContext);
};

export const useProvideEpisode = () => {

    const [currentEpisode, setCurrentEpisode] = useState(1);
    const [loadedEpisode, setLoadedEpisode] = useState({});

    const fetchEpisode = useCallback(async () => {
        try {
            const response = await FetchRequest('https://www.breakingbadapi.com/api/episodes/', currentEpisode);
            const data = await response.json();

            setLoadedEpisode({
                id: data[0].episode_id,
                title: data[0].title,
                season: data[0].season,
                episode: data[0].episode,
                air_date: data[0].air_date,
                characters: data[0].characters,
            })

            console.log("loaded", loadedEpisode)
        } catch (error) {
            console.error(error);
        }
    }, [currentEpisode]);

    useEffect(() => {
        fetchEpisode(currentEpisode);
    }, [currentEpisode]);


    return {
        loadedEpisode,
        setCurrentEpisode
    };
};
