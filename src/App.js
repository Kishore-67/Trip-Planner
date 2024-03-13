import React from 'react'
import './App.css'

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from './components/navbar/Navbars.js'
import {About } from './components/Pages/About.js'
import {Contact} from './components/Pages/Contact.js'
import Home from './components/Pages/Homes.js'
import {LoginForm} from './components/Pages/Authentication/LoginForm.js'
import {useNavigate} from 'react-router-dom'
const App = () => {
  const navigate = useNavigate()
  // function onbuttonclick(){
  //   navigate('/login')
  // }
  return (
    <div className='App'>
     <Navbar/>
     <Home/>
    </div>
  )
}

export default App
