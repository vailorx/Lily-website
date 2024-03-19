import React from 'react'
import logo from "../imagesPng/Logo.png"
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className='header'>
        <Link to="/"><img className='logo' src={logo}></img></Link>
    </div>
  )
}
export default Header;
