import React, { useState } from 'react'
import Header from '../components/Header';
import frontPageImg from '../imagesPng/frontPageImg.png'
import addBut from '../imagesGif/addBut.gif'
import galeryBut from '../imagesGif/galeryBut.gif'
import waves from '../imagesPng/waves.png'
import flippedWaves from '../imagesPng/flippedWaves.png'
import LilysInfo from '../components/LilysInfo.jsx';
import FormBut from '../components/FormBut.jsx';
import { FormPanel } from '../components/FormPanel.jsx';

export const Play = () => {
  const [panel, setPanel] = useState("def");
  const [formName, setFormName] = useState("def");
  const [inputValuesE, setInputValuesE] = useState({});
  const [inputValuesS, setInputValuesS] = useState({});
  const [answerAllQuestion, setAnswerAllQuestion] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [comprobarActive, setComprobarActive] = useState(false);
  const setAnswerQuestions = (value) => {
    setAnswerAllQuestion(value);
  }
  const changePanel = (butName) => {
    setPanel(butName);
    
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
      <FormBut 
      formName={"Español"} 
      panelName={changePanel} 
      panel={panel} 
      setFormName={setFormName} 
      setInputValuesS={setInputValuesS} 
      setInputValuesE={setInputValuesE} 
      setAnswerAllQuestion={setAnswerAllQuestion} 
      setConfettiActive={setConfettiActive}
      setComprobarActive={setComprobarActive}/>
      <FormBut 
      formName={"Ingles"} 
      panelName={changePanel} 
      panel={panel} 
      setFormName={setFormName} 
      setInputValuesS={setInputValuesS} 
      setInputValuesE={setInputValuesE} 
      setAnswerAllQuestion={setAnswerAllQuestion} 
      setConfettiActive={setConfettiActive}
      setComprobarActive={setComprobarActive}/>
      
      </div>
      <FormPanel 
      panel={panel} 
      formName={formName} 
      inputValuesE={inputValuesE} 
      inputValuesS={inputValuesS} 
      setInputValuesS={setInputValuesS} 
      setInputValuesE={setInputValuesE} 
      setAnswerAllQuestion={setAnswerAllQuestion} 
      answerAllQuestion={answerAllQuestion} 
      setConfettiActive={setConfettiActive} 
      confettiActive={confettiActive}
      comprobarActive={comprobarActive}
      setComprobarActive={setComprobarActive}/>
      

      
      
    </div>
  )
}
export default Play;