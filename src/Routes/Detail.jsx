import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context'
import pokeball from '../assets/Poké_Ball_icon.svg'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'


const Detail = () => {
    const {charState, charDispatch} = useCharStates()
    const {id} = useParams()
    const urlChar = 'https://rickandmortyapi.com/api/character/' + id
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          let response = await axios(urlChar)
          if(response.status === 200){
            charDispatch({type: 'GET_CHAR', payload: response.data})
            toast('Se obtuvo el personaje', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          }
        } catch (err) {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al traer el personaje',
            footer: err,
          })
        }
      }
      fetchData()
    }, [])
    
 
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {charState.char.name}
        <img src={charState.char.image} width={150} alt="" />
    </div>
  )
}

export default Detail