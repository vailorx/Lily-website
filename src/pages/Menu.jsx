import React from 'react'
import PlayBut from "../imagesSvg/PlayBut";
import GalleryBut from '../imagesSvg/GalleryBut';
import AddPhotoBut from '../imagesSvg/AddPhotoBut';

export const Menu = () => {
  return (
    <div className='menuContainer'>
    <div className='mainMenu-top'>
         
        
         <div className='iconContent'>
         
         <PlayBut color={'#0099FF'} width={"100%"} height={"100%"}/>
        
         </div>
         <div className='iconContent'>

         <GalleryBut color={"#0099FF"} width={"100%"} height={"100%"}/>

         </div>
         </div>
         
         <div className='mainMenu-bot'>
         <div className='iconContent'>

         <AddPhotoBut color={"#0099FF"} width={"100%"} height={"100%"} />

         </div>
         </div>
         </div>
  )
}
