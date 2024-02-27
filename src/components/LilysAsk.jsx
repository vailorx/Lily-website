import React from 'react'
import confusedLi from "../imagesPng/confusedLi.jpg";

export const LilysAsk = ({classN}) => {  

  return (
    <div className={classN}   >
       <div className='panel' >

        <div className='infoLilyTitle'>
          <h3>Lily</h3>
        </div>
        <div className='lilyImgContent'>
        <img className='lilyImg' src={confusedLi}/>
       </div>
       <div className='infoLilyContent'>
        
<div className="accordion" >
  
</div>
        
        
       </div>
       </div>
    </div>
  )
}
export default LilysAsk;
