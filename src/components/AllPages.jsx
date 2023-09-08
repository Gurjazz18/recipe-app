import React from 'react'
import {

    Routes,
    Route,
  } from "react-router-dom";
import Recipe from '../Pages/Recipe';
import Diet from '../Pages/Diet';
import Home from '../Pages/Home';
import Calorie from '../Pages/Calorie';


const AllPages = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe" element={<Recipe/>} />
          <Route path="/diet" element={<Diet/>} />
          <Route path="/calorie" element={<Calorie/>} />
          
          
         
      
         
         
      
    </Routes>
  )
}

export default AllPages