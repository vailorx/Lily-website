import React from 'react'
import Header from '../components/Header';
import frontPageImg from '../imagesPng/frontPageImg.png'
import addBut from '../imagesGif/addBut.gif'
import galeryBut from '../imagesGif/galeryBut.gif'
import waves from '../imagesPng/waves.png'
import flippedWaves from '../imagesPng/flippedWaves.png'
import FormContent from '../components/FormContent.jsx';

export const Play = () => {
  return (
    <div className='playContainer'>
      <Header/>
      <div className='imageContainer'>
      <img className='frontPageImg' src={frontPageImg}></img>
      </div>
      <div className='menuFixedButtons'>
      <div id="fixedButton">
        <img className='fillFixedButton' src={addBut}></img>
      </div>
      <div id="fixedButton">
        <img className='fillFixedButton' src={galeryBut}></img>
      </div>
      </div>
      <div className='waves'>
      <img className='wavesImg' src={waves}/>
      </div>
      <FormContent classN={"formAnimal"}/>
      <div className='waves'>
      <img className='wavesImg' src={flippedWaves}/>
      </div>

      
      
    </div>
  )
}
export default Play;