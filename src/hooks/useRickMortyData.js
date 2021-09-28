import React, { useCallback, useState } from "react";


const RickMortyContext = React.createContext();

export const RickMortyContextProvider = ({ children }) => {
    const data = useProvideRickMorty();
    return <RickMortyContext.Provider value={data}>{children}</RickMortyContext.Provider>
};

export const useRickMortyCharacters = () => {
    return useContext(RickMortyContext);
};

export const useProvideRickMorty = () => {
    const [currentCharacter, setCurrentCharacter] = useState({});

    const fetchEpisode = useCallback(async (number) => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character",
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await response.json();

            console.log(data);
            setCurrentCharacter({
                id: data[number].id,
                name: data[number].name,
                image: data[number].image
            })
        } catch (error) {
            console.error(error);
        };
    }, []);

    return {
        currentCharacter,
        fetchEpisode
    }
}