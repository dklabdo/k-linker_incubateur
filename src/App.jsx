import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import New from './pages/New'
import Register from './pages/Register'
import AppProvider from './AppProvider'

function App() {
  

  return (
    <>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/new' element={<New/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </AppProvider>
      
    </>
  )
}

export default App
