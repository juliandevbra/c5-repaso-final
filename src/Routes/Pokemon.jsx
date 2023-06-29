import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context'
import pokeball from '../assets/Poké_Ball_icon.svg'


const Pokemon = () => {
    const {pokeState, pokeDispatch} = usePokeStates()
    const {name} = useParams()
    console.log(name)
    const urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + name
    
    useEffect(() => {
        axios(urlPoke)
        .then(res => {
            console.log(res)
            pokeDispatch({type: 'GET_POKE', payload: res.data})
        })
    }, [])
    
    const addFav = () => {
      pokeDispatch({type: 'ADD_FAV', payload: pokeState.pokemon})
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {pokeState.pokemon.name}
        <img src={pokeState.pokemon.sprites?.front_default} width={150} alt="" />
        {pokeState.pokemon.abilities?.map(ability => <li>{ability.ability.name}</li>)}
        <button onClick={addFav}><img width={30} src={pokeball} alt="" /></button>
    </div>
  )
}

export default Pokemon