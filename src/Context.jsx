import axios from "axios"
import { createContext, useContext, useState, useReducer, useEffect } from "react"

const CharStates = createContext()

const initialCharState = {
    charList: [],
    char: {},
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const charReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, charList: action.payload }
        case 'GET_CHAR': 
            return {...state, char: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            return {...state, favs: action.payload}
        default:
            throw new Error()
    }
}

const Context = ({children}) => {
    const [charState, charDispatch] = useReducer(charReducer, initialCharState)

    // const urlList = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    const urlList = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        axios(urlList)
        .then(res => charDispatch({type: 'GET_LIST', payload: res.data.results}))
    }, [urlList])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(charState.favs))
    }, [charState.favs])

    return(
        <CharStates.Provider value={{
            charState, charDispatch
        }}>
            {children}
        </CharStates.Provider>
    )
}
export default Context

export const useCharStates = () => useContext(CharStates)