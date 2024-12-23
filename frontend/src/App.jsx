import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage'
import { Box, GlobalStyles } from '@mui/material'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <Box>
      <GlobalStyles styles={{body: {margin: '0px', backgroundColor: '#D8DDEF'}}} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
