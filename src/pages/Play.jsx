import React, { useState } from 'react'
import Header from '../components/Header';
import frontPageImg from '../imagesPng/frontPageImg.png'
import addBut from '../imagesGif/addBut.gif'
import galeryBut from '../imagesGif/galeryBut.gif'
import waves from '../imagesPng/waves.png'
import flippedWaves from '../imagesPng/flippedWaves.png'
import LilysInfo from '../components/LilysInfo.jsx';
import FormBut from '../components/FormBut.jsx';

export const Play = () => {
  const [panel, setPanel] = useState("def");
  const changePanel = (butName) => {
    setPanel(butName);
    console.log(panel)
    
  }
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
      <LilysInfo classN={"formAnimal"}/>
      
      <div className='waves'>
      <img className='wavesImg' src={flippedWaves}/>
      </div>
      
          
      <div className='divFormBut'>
      <FormBut formName={"Español"} panelName={changePanel} panel={panel}/>
      <FormBut formName={"Ingles"} panelName={changePanel} panel={panel}/>
      
      </div>
      

      
      
    </div>
  )
}
export default Play;