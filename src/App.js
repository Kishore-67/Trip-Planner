import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Card from  './components/Pages/Card.js';
import Navbar from './components/navbar/Navbars.js'
import {Contact} from './components/Pages/Contact.js'
import Home from './components/Pages/Homes.js'
import Body from './components/Pages/Body.js';
import Footer from './components/Pages/Footer.js';
import {LoginForm} from './components/Pages/Authentication/LoginForm.js'
import {useNavigate} from 'react-router-dom'
const App = () => {

  return (
    <div className='App'>
     <Navbar/>
     <Home/>
     <Body/>
     {/* <Card/> */}
     <Footer/>
    </div>
  )
}

export default App