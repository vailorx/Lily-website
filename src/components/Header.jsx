import React from 'react'
import logo from "../imagesPng/Logo.png"
export const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo}></img>
    </div>
  )
}
export default Header;
