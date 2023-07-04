import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCharStates } from '../Context'

const Card = ({char}) => {
  const {charState, charDispatch} = useCharStates()
  const findFav = charState.favs.find(pj => pj.id === char.id)
  const addFav = () => {
    if(!findFav){
      charDispatch({type: 'ADD_FAV', payload: char})
    } else {
      const filteredFavs = charState.favs.filter(pj => pj.id !== char.id)
      charDispatch({type: 'DELETE_FAV', payload: filteredFavs})
    }
  }
  return (
    <div>
        <img src={char.image} alt="" />
        <Link to={'/char/' + char.id} >
                <h3>{char.name}</h3>
        </Link>
        <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button> 
    </div>
  )
}

export default Card