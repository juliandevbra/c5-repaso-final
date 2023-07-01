import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context'
import pokeball from '../assets/Poké_Ball_icon.svg'


const Detail = () => {
    const {charState, charDispatch} = useCharStates()
    const {id} = useParams()
    const urlChar = 'https://rickandmortyapi.com/api/character/' + id
    
    useEffect(() => {
        axios(urlChar)
        .then(res => {
            console.log(res)
            charDispatch({type: 'GET_CHAR', payload: res.data})
        })
    }, [])
    
 
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {charState.char.name}
        <img src={charState.char.image} width={150} alt="" />

    </div>
  )
}

export default Detail