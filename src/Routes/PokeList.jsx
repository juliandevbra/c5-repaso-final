import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../Component/Card'
import { usePokeStates } from '../Context'

const PokeList = () => {

    const {pokeState} = usePokeStates()
    const params = useParams()
    console.log(params)
  return (
    <div>
        {pokeState.pokeList.map(poke => <Card poke={poke} key={poke.name}/>)}
    </div>
  )
}

export default PokeList