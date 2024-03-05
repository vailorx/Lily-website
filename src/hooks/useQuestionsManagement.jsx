import React, { useState } from 'react';
import dogImg from '../imagesPng/dogImg.png';
import birdImg from '../imagesPng/birdImg.png';
import ConfettiExplosion from 'react-confetti-explosion';

export const useQuestionsManagement = ({sQuestions, formName, eQuestions, setInputValuesE, setInputValuesS, inputValuesE, inputValuesS, setConfettiActive}) => {
    const [isExploding, setIsExploding] = React.useState(false);
    const imagesArray = [dogImg, birdImg];
    const manejarCambioInputS = (evento, index) => {
        const newValue = evento.target.value;
        setInputValuesS((prevInputValue) => ({
            ...prevInputValue,
            [index]: newValue,
        }));
      };
     
      const manejarCambioInputE = (evento, index) => {
        const newValue = evento.target.value;
        setInputValuesE((prevInputValue) => ({
            ...prevInputValue,
            [index]: newValue,
        }));
      };
     
     
      
      function checkSpanishValues(){
        if(formName == "Español"){
           
            //check every input with his json answer
            
            const matchInputJsonS = sQuestions.every(
                (question) => inputValuesS[question.id] == question.respuesta
                
            );
            console.log(matchInputJsonS);

            if (matchInputJsonS) {
                console.log('Todos los valores son iguales a los labels');
                setConfettiActive(true);
                 setTimeout(() => {
                setConfettiActive(false);
                }, 3000); 
  
                  
               
            } else {
                console.log('No todos los valores son iguales a los labels');
            }
        } else {
            
            const matchInputJsonE = eQuestions.every(
                (question) => inputValuesE[question.id] == question.respuesta
                
            );
            console.log(matchInputJsonE);

            if (matchInputJsonE) {
                console.log('Todos los valores son iguales a los labels');
               
            } else {
                console.log('No todos los valores son iguales a los labels');
            }
        };
       
      };
    function changeQuestions(formName){
        const questions = formName === 'Español' ? sQuestions : eQuestions;
        const inputValues = formName === 'Español' ? inputValuesS : inputValuesE;
        return questions.map((question) => (
            <div key={question.id}>
              <div className='formImgContent'>
                <img
                  className='formImg'
                  src={imagesArray.find((img) => img.endsWith(question.imagen))}
                  alt={`Imagen de la pregunta ${question.id}`}
                />
              </div>
              <div>
                <input
                  type='text'
                  value={inputValues[question.id] || ''}
                  onChange={(e) => (formName === 'Español' ? manejarCambioInputS(e, question.id) : manejarCambioInputE(e, question.id))}
                />
                {inputValues[question.id] === question.respuesta ? 'good' : 'x'}
              </div>
            </div>
          ));


    };
  return { changeQuestions, checkSpanishValues};
}
