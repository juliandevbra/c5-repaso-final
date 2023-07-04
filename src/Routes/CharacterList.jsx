import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Link, useParams } from 'react-router-dom'
import Card from '../Component/Card'
import { useCharStates } from '../Context'

const CharacterList = () => {

    const {charState} = useCharStates()
    const params = useParams()
  return (
    <Carousel>
        {charState.charList.map(char => <Card char={char} key={char.name}/>)}
    </Carousel>
  )
}

export default CharacterList