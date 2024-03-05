import React, { useEffect, useState } from 'react'
import { usePanelsDisplay } from '../hooks/usePanelsDisplay';

export const FormBut = ({formName, panelName, panel, setFormName, setInputValuesS, setInputValuesE}) => {
  const [numClicks, setNumClicks] = useState(0);
  const {changeFormName} = usePanelsDisplay(panelName, formName, setNumClicks, numClicks, setFormName, setInputValuesS, setInputValuesE);
  
  return (
    <div className='formBut' style={{
      display: panel == formName || panel == "def" ? "" : "none",
      width: panel == formName ? "100%" : "50%"
    
    }}>
    {(panel != formName || panel == "def") && (
       <div style={{display:"none"}}>
       </div>
        
    )}
    {(panel == formName || panel == "def") && 
    (
    <div onClick={changeFormName} >
    <p>{formName}</p>
    </div>
    
)}
</div>
  )
}
export default FormBut;
