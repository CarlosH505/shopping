import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Login from './pages/Login'
import Products from './pages/products'




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/products' element={<Products/>} />
    </Routes>
     
    </>
  )
}

export default App
