import {React, useEffect, useState} from 'react'
import LilysAsk from './LilysAsk'
import dogImg from '../imagesPng/dogImg.png'
import spanishQuestion from '../data/spanishQuestion.json'
import englishQuestion from '../data/englishQuestion.json'
import { QuestionsComponent } from './QuestionsComponent';
export const FormPanel = ({panel, formName}) => {
  return (
    <div className='formPanel' style={{display: panel == "def" ? "none" : ""}}>
        <QuestionsComponent sQuestions={spanishQuestion} formName={formName} eQuestions={englishQuestion}/>
        

        
    </div>
  )
}
