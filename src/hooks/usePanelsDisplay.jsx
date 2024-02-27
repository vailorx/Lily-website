import React from 'react'

export const usePanelsDisplay = (panelName, formName, setNumClicks, numClicks, setFormName) => {
  function changeFormName(){
    panelName(formName);
    setFormName(formName);
    setNumClicks(numClicks + 1);
    changeFormNameDefault();
  }
  function changeFormNameDefault(){
    if (numClicks % 2) {
      panelName("def");
    }
  }
  
  
    return { changeFormName, changeFormNameDefault };
  
};
