import React, { useRef } from 'react'

function UseRef() {

    let useref=useRef();


    const Clicked=()=>{
          useref.current.innerHTML="<ul><li>A</li> <li>B</li></ul>";
    }
  
  return (
    <div>

        <button onClick={Clicked} ref={useref} className='login'>UseRef Button</button>
    </div>
  )
}

export default UseRef