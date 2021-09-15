import React, { useContext, useState, useCallback } from "react";


const CharactersContext = React.createContext();

export const CharactersContextProvider = ({ children }) => {
    const data = useProvideCharacters();
    return <CharactersContext.Provider value={data}>{children}</CharactersContext.Provider>
};

export const useCharactersPhoto = () => {
    return useContext(CharactersContext);
};

export const useProvideCharacters = () => {

    const [loadedCharacter, setLoadedCharacter] = useState('../assets/BB_S1_poster.jpg');

    const fetchCharacter = useCallback(async () => {
        try {
            const response = await fetch('https://www.breakingbadapi.com/api/character/random',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await response.json();

            setLoadedCharacter({
                img: data[0].img,
            })

        } catch (error) {
            console.error(error);
        }
    }, []);


    return {
        loadedCharacter,
        fetchCharacter
    }

}