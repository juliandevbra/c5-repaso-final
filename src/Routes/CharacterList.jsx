import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../Component/Card'
import { useCharStates } from '../Context'

const CharacterList = () => {

    const {charState} = useCharStates()
    const params = useParams()
    console.log(params)
  return (
    <div>
        {charState.charList.map(char => <Card char={char} key={char.name}/>)}
    </div>
  )
}

export default CharacterList