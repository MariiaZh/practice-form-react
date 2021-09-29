import React, { useContext, useState, useCallback } from "react";
import FetchRequest from "../helpers/validation/api/FetchRequest";


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
            const response = await FetchRequest('https://www.breakingbadapi.com/api/character/random');
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