import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Card = ({poke}) => {
  return (
    <div>
        <Link to={'/poke/' + poke.name} >
                <li>{poke.name}</li>
        </Link>
    </div>
  )
}

export default Card