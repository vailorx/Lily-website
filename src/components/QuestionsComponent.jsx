import {React, useState} from 'react';
import {useQuestionsManagement} from '../hooks/useQuestionsManagement';
import ConfettiExplosion from 'react-confetti-explosion';
export const QuestionsComponent = ({sQuestions, formName, eQuestions, setInputValuesE, setInputValuesS, inputValuesE, inputValuesS}) => {
    const [confettiActive, setConfettiActive] = useState(false);
   const {changeQuestions, checkSpanishValues} = useQuestionsManagement(
    {sQuestions, 
    formName, 
    eQuestions, 
    setInputValuesE, 
    setInputValuesS, 
    inputValuesE, 
    inputValuesS,
    setConfettiActive});

return(
    <div className='formPanelSpace'>
        {changeQuestions(formName)}
        <button onClick={checkSpanishValues}>Verificar</button>
        {confettiActive && <ConfettiExplosion 
          particleCount={1000} 
          height={4000}  
          width={4000}
          duration={5000}
          />}
    </div>
)

};