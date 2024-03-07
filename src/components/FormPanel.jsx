import {React, useEffect, useState} from 'react'
import LilysAsk from './LilysAsk'
import dogImg from '../imagesPng/dogImg.png'
import spanishQuestion from '../data/spanishQuestion.json'
import englishQuestion from '../data/englishQuestion.json'
import { QuestionsComponent } from './QuestionsComponent';

export const FormPanel = ({panel, formName, setInputValuesE, setInputValuesS, inputValuesE, inputValuesS}) => {
  const [randomSpanishQuestions, setRandomSpanishQuestions] = useState([]);
  const [randomEnglishQuestions, setRandomEnglishQuestions] = useState([]);
  const [clicks, setClicks] = useState(0);

  const shuffleEnglishJSON = (englishQuestion) =>{
    const shuffledData = englishQuestion.sort(() => Math.random() - 0.5);
    const selectedElements = shuffledData.slice(0, 5);
    setRandomEnglishQuestions(selectedElements);
    
  }
  const shuffleSpanishJSON = (spanishQuestion) =>{
    const shuffledData = spanishQuestion.sort(() => Math.random() - 0.5);
    const selectedElements = shuffledData.slice(0, 5);
    setRandomSpanishQuestions(selectedElements);
    
  }
  const shuffleAllQuestions = () => {
    shuffleEnglishJSON(englishQuestion);
    shuffleSpanishJSON(spanishQuestion);
    setClicks((prevClick) => prevClick+1);
  }
  useEffect(() => {
    shuffleEnglishJSON(englishQuestion);
    shuffleSpanishJSON(spanishQuestion);
    setInputValuesE({});
    setInputValuesS({});
  },[clicks]);
  return (
    <div className='formPanel' style={{display: panel == "def" ? "none" : ""}}>
      <div className="lilySay">
      <button onClick={shuffleAllQuestions}>Shuffle!</button>
      ¡Hora de la aventura! <br></br><br></br>
¡Respira profundo y a explorar! ¡Diviértete descubriendo nombres mágicos para nuestros amigos animales!
<br></br><br></br>
Ayuda a Lily a nombrar estos animales

      </div>
        <QuestionsComponent sQuestions={randomSpanishQuestions} formName={formName} eQuestions={randomEnglishQuestions} inputValuesE={inputValuesE} inputValuesS={inputValuesS} setInputValuesS={setInputValuesS} setInputValuesE={setInputValuesE}/>
        

        
    </div>
  )
}
