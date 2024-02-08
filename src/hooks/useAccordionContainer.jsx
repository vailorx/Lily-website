import React from 'react'
import { useState, useEffect } from 'react';
export const useAccordionContainer = (containerHeight, accordionHeight, starterMainContainer, accordion, setContainerHeight, setAccordionHeight, setStarterHeight) => {
    
    function modifiesHeight () {
        const heightContainer = containerHeight.current.scrollHeight;
        const heightAccordion = accordionHeight.current.scrollHeight;
        
        if(accordion === false){
          setAccordionHeight(0);
          setContainerHeight(starterMainContainer);
        }else{
          setAccordionHeight(heightAccordion);
          setContainerHeight(heightContainer);
        }
    
    }
    useEffect(() => {
        const heightContainer = containerHeight.current.scrollHeight;
        setStarterHeight(heightContainer);
      }, []);
    
  
  return modifiesHeight;
  
}
