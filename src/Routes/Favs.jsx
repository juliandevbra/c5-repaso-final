import React from 'react'
import { useCharStates } from '../Context'
import Card from '../Component/Card'

const Favs = () => {
    const {charState} = useCharStates()
    console.log(charState.favs)
  return (
    <div>
        {charState.favs.map(char => <Card char={char} key={char.id}/>)}
    </div>
  )
}

export default Favs