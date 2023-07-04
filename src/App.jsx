import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import CharacterList from './Routes/CharacterList'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<CharacterList/>}/>
        <Route path='/char/:id' element={<Detail/>}/>
        <Route path='favs' element={<Favs/>}/>
      </Routes>
    </>
  )
}

export default App
