import React from 'react'
import Header from '../components/Header';
import frontPageImg from '../imagesPng/frontPageImg.png'
export const Play = () => {
  return (
    <div className='playContainer'>
      <Header/>
      <div className='imageContainer'>
      <img className='frontPageImg' src={frontPageImg}></img>
      </div>
    </div>
  )
}
export default Play;