import React from 'react'

export const ChangeButton = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    viewBox="0 0 24 24">
        <path 
        fill="blue" 
        d="M12.825 15.783q-.975.005-1.907-.209q-.931-.214-1.605-.887q-.538-.539-.83-1.231q-.29-.693-.29-1.45q0-.327.044-.622q.044-.296.157-.597q.062-.185-.012-.36t-.234-.242q-.165-.068-.337.01t-.234.26q-.125.376-.197.76q-.072.385-.072.785q0 .942.358 1.797q.359.855 1.02 1.516q.772.797 1.848 1.075q1.076.28 2.185.285l-.963.964q-.13.128-.139.303q-.01.175.139.323q.148.149.313.149q.166 0 .314-.149l1.523-1.523q.242-.242.242-.565q0-.323-.242-.565l-1.523-1.523q-.13-.13-.304-.139q-.175-.01-.323.139q-.148.148-.148.313t.148.313zm-1.637-7.571q.975 0 1.91.214q.935.214 1.608.887q.538.539.83 1.231q.29.693.29 1.45q0 .327-.043.622q-.045.296-.158.597q-.062.185.013.363q.074.178.233.245q.166.067.338 0q.172-.067.233-.252q.125-.375.197-.772q.073-.397.073-.797q0-.942-.353-1.797t-1.02-1.522q-.777-.796-1.853-1.072T11.3 7.333l.97-.97q.122-.128.132-.303q.01-.175-.139-.323q-.148-.149-.313-.149t-.313.149L10.113 7.26q-.242.242-.242.565q0 .323.242.565l1.524 1.523q.128.13.303.139q.175.01.323-.139q.149-.148.149-.313t-.149-.313zM12 21q-1.863 0-3.506-.71t-2.857-1.927Q4.42 17.148 3.71 15.506Q3 13.863 3 12t.71-3.506q.711-1.642 1.927-2.857Q6.852 4.42 8.494 3.71Q10.137 3 12 3t3.506.71q1.642.711 2.857 1.927q1.216 1.215 1.926 2.857Q21 10.137 21 12t-.71 3.506q-.711 1.642-1.927 2.857q-1.215 1.216-2.857 1.926Q13.863 21 12 21"/></svg>
  )
}
