import {React, useEffect, useState} from 'react'
import LilysAsk from './LilysAsk'
import dogImg from '../imagesPng/dogImg.png'
import spanishQuestion from '../data/spanishQuestion.json'
import englishQuestion from '../data/englishQuestion.json'
import { QuestionsComponent } from './QuestionsComponent';
export const FormPanel = ({panel, formName, setInputValuesE, setInputValuesS, inputValuesE, inputValuesS}) => {
  setInputValuesS
  return (
    <div className='formPanel' style={{display: panel == "def" ? "none" : ""}}>
      <div className="lilySay">
      ¡Hora de la aventura! <br></br><br></br>
¡Respira profundo y a explorar! ¡Diviértete descubriendo nombres mágicos para nuestros amigos animales!
<br></br><br></br>
Ayuda a Lily a nombrar estos animales

      </div>
        <QuestionsComponent sQuestions={spanishQuestion} formName={formName} eQuestions={englishQuestion} inputValuesE={inputValuesE} inputValuesS={inputValuesS} setInputValuesS={setInputValuesS} setInputValuesE={setInputValuesE}/>
        

        
    </div>
  )
}
