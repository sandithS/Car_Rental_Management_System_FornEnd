import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Vehiclespage from './pages/Vehiclespage'
import VehicleDetails from './components/VehicleDetails'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/vehicles' element={<Vehiclespage></Vehiclespage>}></Route>
        <Route path='/vehicledetails' element={<VehicleDetails></VehicleDetails>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
    </>
  )
}

export default App
