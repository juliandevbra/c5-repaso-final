import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import CharacterList from './Routes/CharacterList'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import ErrorBoundary from './Clase 24/ErrorBoundary'
import UseMemo from './Clase 24/UseMemo'

function App() {


  return (
    <>
    {/* <UseMemo/> */}
    <Navbar/>
      <Routes>
        <Route path='/' element={<ErrorBoundary><CharacterList/></ErrorBoundary>}/>
        <Route path='/char/:id' element={<ErrorBoundary><Detail/></ErrorBoundary>}/>
        <Route path='favs' element={<Favs/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
