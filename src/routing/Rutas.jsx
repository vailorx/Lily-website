import React from 'react'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Menu } from '../pages/Menu';
import Play from '../pages/Play';
export const Rutas = () => {
  return (
    <>
   
    <BrowserRouter>
    
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/play' element={<Play/>}></Route>
      </Routes>


    </div>
    
    
    </BrowserRouter>
    </>
  )
}
