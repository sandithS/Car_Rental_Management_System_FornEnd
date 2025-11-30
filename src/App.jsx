import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Vehiclespage from './pages/Vehiclespage'
import VehicleDetails from './components/VehicleDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/vehicles' element={<Vehiclespage></Vehiclespage>}></Route>
        <Route path='/vehicledetails' element={<VehicleDetails></VehicleDetails>}></Route>
      </Routes>
    </>
  )
}

export default App
