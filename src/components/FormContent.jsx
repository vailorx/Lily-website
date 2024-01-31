import React from 'react'
import confusedLi from "../imagesPng/confusedLi.jpg"
import { useState } from 'react'
export const FormContent = ({classN}) => {
   const [visible, setVisible] = useState(true);
  return (
    <div className={classN} >
       <div className='panel'>
        <div className='infoLilyTitle'>
          <h3>Lily</h3>
        </div>
        <div className='lilyImgContent'>
        <img className='lilyImg' src={confusedLi}/>
       </div>
       <div className='infoLilyContent'>
        {visible ? <><span onClick={() => { setVisible(false); } }>Mostrar descripción</span><p>Lily es como una mariposa pequeñita. A veces, las mariposas pueden tener dificultades para volar alto o para encontrar su camino.
            Lily se encuentra en esa situación en este momento. Puede sentirse un poco triste o confundida, como cuando una mariposa se enreda en una telaraña.<br></br><br></br>
            Pero aquí está la buena noticia: todos podemos ser como amigos jardineros que ayudan a las mariposas.<br></br><br></br> Podemos ser amables y cuidadosos para desenredarlas y ayudarlas a volar alto otra vez. Podemos escuchar a Lily e
            imaginar que somos como un equipo de superhéroes. Cada uno de nosotros tiene un superpoder especial: el poder de hacer sentir bien a los demás. Así que, ¡vamos a ser el equipo que ayuda a Sofia a brillar como una estrella en el cielo!</p></> : 
<span onClick={ () => {setVisible(true)}}>Mostrar descripción</span>}
        
        
       </div>
       </div>
    </div>
  )
}
export default FormContent;
