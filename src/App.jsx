import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Tv from './Components/Tv';
import People from './Components/People';
import Notfound from './Components/Notfound';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Move from './Components/Move';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contacts from './Components/Contacts';



function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='tv' element={<Tv />} /> 
        <Route path='people' element={< People />} /> 
        <Route path='home'element={<Home />} /> 
        <Route path='login'element={<Login/>} /> 
        <Route path='move' element={<Move />} /> 
        <Route path='about' element={<Move />} /> 
        <Route path='contacts' element={<Move />} /> 
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
