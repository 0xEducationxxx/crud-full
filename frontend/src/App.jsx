import React from 'react'
import './App.css'  
import User from './getUser/getUser'
import AddUser from './AddUser/AddUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/add' element={<AddUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
