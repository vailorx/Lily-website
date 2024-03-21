import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
export function Gallery({color, width , height}) {
  const [show, setShow] = useState("relative");
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    viewBox="0 0 24 24"
    
    display={show}

    >
       <NavLink to="/Gallery" className='ButtonMenu'>
      <path fill={color}  className='butHover'
      d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
      <path fill={color}  className='butHover'
      fillRule="evenodd" 
      d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386l-.001 1.28l-.222-.03c-2.844-.394-5.446 1.084-6.772 3.313c-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032c.011-1.405.049-2.519.171-3.431c.172-1.279.5-2.05 1.069-2.62" clipRule="evenodd"></path>
      </NavLink>
      </svg>
  
  )
}
export default Gallery