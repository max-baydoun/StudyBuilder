import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
