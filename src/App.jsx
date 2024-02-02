import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import New from './pages/New'
import Register from './pages/Register'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/registration' element={<Register/>} />
      </Routes>
      
    </>
  )
}

export default App
