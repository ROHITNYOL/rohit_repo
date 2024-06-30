import React, { useEffect, useState } from "react";

import styles from "./App.module.css";

import { Routes, Route } from "react-router-dom";


import Pricing from "./components/menuPages/Pricing/Pricing";
import Enterprise from "./components/menuPages/Enterprise/Enterprise";
import Features from "./components/menuPages/Features/Features";
import Blog from "./components/menuPages/Blog/Blog";
import Platform from "./components/menuPages/Platform/Platform";
import Docs from "./components/menuPages/Docs/Docs";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import "react-toastify/dist/ReactToastify.css";





function App() {







  return (
    <>
     <div className={styles.App}>

 
      <Routes>
      
      <Route path='/' element={<Login/> } />
        <Route path='/Signup' element={ <Signup/> } />
        <Route path='/Home' element={<Home /> } />
       

       
        <Route path='/user' element={<Welcome /> } />
        <Route path='/Pricing' element={<Pricing/>} />
        <Route path='/Platform' element={<Platform/>} />
        <Route path='/Enterprise' element={<Enterprise/>} />
        <Route path='/Features' element={<Features/>} />
        <Route path='/Docs' element={<Docs/>} />
        <Route path='/Blog' element={<Blog/>} /> 
   

        
      </Routes>


     </div>
    </>
  )
}

export default App
