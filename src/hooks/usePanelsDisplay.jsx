import React from 'react'

export const usePanelsDisplay = (panelName, formName, setNumClicks, numClicks, setFormName, setInputValuesE, setInputValuesS, setAnswerAllQuestion, setConfettiActive, setComprobarActive) => {
  function changeFormName(){
    panelName(formName);
    setFormName(formName);
    setNumClicks(numClicks + 1);
    changeFormNameDefault();
    setInputValuesE({});
    setInputValuesS({}); 
    setAnswerAllQuestion(false);
    setConfettiActive(false);
    setComprobarActive(false);
    
  }
  function changeFormNameDefault(){
    if (numClicks % 2) {
      panelName("def");
    }
  }
 
    
  
  
    return { changeFormName, changeFormNameDefault};
  
};
