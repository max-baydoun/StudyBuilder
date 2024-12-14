import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage'
import { Box, GlobalStyles } from '@mui/material'

function App() {

  return (
    <Box>
      <GlobalStyles styles={{body: {margin: '0px', backgroundColor: '#D8DDEF'}}} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
