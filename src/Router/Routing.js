import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../Components/Login'
import { Navbar } from 'react-bootstrap'
import Home from '../Pages/Home'
import SignUp from '../Components/SignUp'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing
