import React, { useEffect, useState } from 'react'
import { useShowPanels } from '../hooks/useShowPanels';

export const FormBut = ({formName, panelName, panel}) => {
  const [numClicks, setNumClicks] = useState(0);
  const {changeFormName} = useShowPanels(panelName, formName, setNumClicks, numClicks);
  
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
