import React from 'react'
import { usePokeStates } from '../Context'

const Navbar = () => {
    const {pokeState} = usePokeStates()
  return (
    <div>
        {pokeState.favs.map(poke => <img src={poke.sprites?.front_default} alt=""/>)}
    </div>
  )
}

export default Navbar