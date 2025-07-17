import React, { useRef } from 'react'

function MutableValueChangeUseRef() {


    let number =useRef(0);
    const change=()=>{
        number.current++;
        console.log(number.current);
    }
  return (
    <div>

        <button onClick={change} className='login mt-10'>Click Here</button>
    </div>
  )
}

export default MutableValueChangeUseRef