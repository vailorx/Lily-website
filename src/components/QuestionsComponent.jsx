import React, { useEffect } from 'react';
import dogImg from '../imagesPng/dogImg.png';
import birdImg from '../imagesPng/birdImg.png'
export const QuestionsComponent = ({sQuestions, formName, eQuestions}) => {
    const imagesArray = [dogImg, birdImg];
    const changeQuestions = (formName) => {
        console.log(imagesArray[1] + birdImg)
        if(formName == "Español"){
            return(
            sQuestions.map((question, index) => (
            <div  key={index}>
            <div className='formImgContent'>
            <img className='formImg' src={question.imagen = imagesArray.values ? imagesArray.find(imagesArray => imagesArray.endsWith(question.imagen)) : question.imagen}/>
            </div>
            <div>
                <input/>
            </div>
            </div>
            
        )
        
        )
        )
    } else {
        return(
        eQuestions.map((question, index) => (
            <div  key={index}>
             <div className='formImgContent'>
            <img className='formImg' src={question.imagen = imagesArray.values ? imagesArray.find(imagesArray => imagesArray.endsWith(question.imagen)) : question.imagen}/>
            </div>
             <div>
                  <input/>
            </div>
             </div>
             
        )))
    } 


    }
   
return(
    <div className='formPanelSpace'>
        {changeQuestions(formName)}
        <button>Verificar</button>
    </div>
)

}