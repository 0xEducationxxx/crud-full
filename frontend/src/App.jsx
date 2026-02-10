import React from 'react'
import './App.css'  
import User from './getUser/getUser'
import AddUser from './AddUser/AddUser'
import UpdateUser from './UpdateUser/UpdateUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/update/:id' element={<UpdateUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
