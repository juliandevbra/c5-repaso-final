import axios from "axios"
import { createContext, useContext, useState, useReducer, useEffect } from "react"

const PokeStates = createContext()

const initialPokeState = {
    pokeList: [],
    pokemon: {},
    favs: JSON.parse(localStorage.getItem('favs')) || []
}

const pokeReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, pokeList: action.payload }
        case 'GET_POKE': 
            return {...state, pokemon: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        default:
            throw new Error()
    }
}

const Context = ({children}) => {
    const [pokeState, pokeDispatch] = useReducer(pokeReducer, initialPokeState)

    const urlList = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

    useEffect(() => {
        axios(urlList)
        .then(res => pokeDispatch({type: 'GET_LIST', payload: res.data.results}))
    }, [urlList])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(pokeState.favs))
    }, [pokeState.favs])

    return(
        <PokeStates.Provider value={{
            pokeState, pokeDispatch
        }}>
            {children}
        </PokeStates.Provider>
    )
}
export default Context

export const usePokeStates = () => useContext(PokeStates)