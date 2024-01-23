import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
export function Play({color, width, height}) {
  
  return (
   
      
    <svg xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 24 24"
   
    >
       <NavLink to="/Play" className='ButtonMenu'>
      <path fill={color} className='butHover'
      d="M7 1c-1.1 0-2 .9-2 2v18a2 2 0 0 0 2 2h7c2.76 0 5-2.24 5-5V3a2 2 0 0 0-2-2zm1 3h8v7H8zm1 10h1v2h2v1h-2v2H9v-2H7v-1h2zm7 1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-2 2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1">
        </path>
        </NavLink>
        </svg>
        
  )
}
export default Play