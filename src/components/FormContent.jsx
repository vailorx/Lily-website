import React from 'react'
import confusedLi from "../imagesPng/confusedLi.jpg";
import { useRef, useState, useEffect  } from 'react';
export const FormContent = ({classN}) => {  
 
  const [containerHeight, setContainerHeight] = useState('100%');
  const [starterHeight, setStarterHeight] = useState('0px');
  const [accordionHeight, setAccordionHeight] = useState('0');
  const [accordion, setAccordion] = useState(false);
  const containerRef = useRef(null);
  const accordionText = useRef(null);

 

  useEffect(() => {
    const heightContainer = containerRef.current.scrollHeight;
    setStarterHeight(heightContainer);
  }, []);

  useEffect(() => {
    // Update the container height when the component mounts or when new elements are added
   
    updateContainerHeight();
  }, [accordion]);

  const updateContainerHeight = () => {
    const heightContainer = containerRef.current.scrollHeight;
    const heightAccordion = accordionText.current.scrollHeight;
    
    if(accordion === false){
      setAccordionHeight(0);
      setContainerHeight(starterHeight);
    }else{
      setAccordionHeight(heightAccordion);
      setContainerHeight(heightContainer);
    }
    
  };

  return (
    <div className={classN}   style={{height: (!accordion ? (containerHeight - 100) : containerHeight + 100) + 'px',maxHeight: (containerHeight +accordionHeight  ) + 'px', transition: 'height 0.6s ease',}}>
       <div className='panel'  ref={containerRef} style={{height: (containerHeight +accordionHeight ) + 'px', maxHeight: (containerHeight +accordionHeight ) + 'px', transition: 'height 0.3s ease'}}>

        <div className='infoLilyTitle'>
          <h3>Lily</h3>
        </div>
        <div className='lilyImgContent'>
        <img className='lilyImg' src={confusedLi}/>
       </div>
       <div className='infoLilyContent'>
<div className="accordion" >
  <ul>
    <li>
      <input type="checkbox" id="section1" onClick={() => setAccordion(!accordion)} />
      <label htmlFor="section1">Mostrar descripción</label>
      <div className="content" ref={accordionText}>
      Lily es como una mariposa pequeñita. A veces, las mariposas pueden tener dificultades para volar alto o para encontrar su camino.
            Lily se encuentra en esa situación en este momento. Puede sentirse un poco triste o confundida, como cuando una mariposa se enreda en una telaraña.<br></br><br></br>
            Pero aquí está la buena noticia: todos podemos ser como amigos jardineros que ayudan a las mariposas.<br></br><br></br> Podemos ser amables y cuidadosos para desenredarlas y ayudarlas a volar alto otra vez. Podemos escuchar a Lily e
            imaginar que somos como un equipo de superhéroes. Cada uno de nosotros tiene un superpoder especial: el poder de hacer sentir bien a los demás. Así que... <br></br><br></br>¡vamos a ser el equipo que ayuda a Lily a brillar como una estrella en el cielo!
      </div>
    </li>
   
  </ul>
</div>
        
        
       </div>
       </div>
    </div>
  )
}
export default FormContent;
