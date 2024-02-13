import React from 'react'

export const usePanelsDisplay = (panelName, formName, setNumClicks, numClicks) => {
  function changeFormName(){
    panelName(formName);
    setNumClicks(numClicks + 1);
    changeFormNameDefault();
    console.log(panelName, formName, setNumClicks, numClicks);
  }
  function changeFormNameDefault(){
    if (numClicks % 2) {
      panelName("def");
    }
  }
  
  
    return { changeFormName, changeFormNameDefault };
  
};
