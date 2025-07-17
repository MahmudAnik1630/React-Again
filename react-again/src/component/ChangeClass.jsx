import React, { useRef } from 'react'

function ChangeClass() {
    let myclass=useRef();

    const change=()=>{
        myclass.current.classList.remove('text-3xl', 'font-bold', 'ml-80', 'mt-10', 'mb-10');
        myclass.current.classList.add('text-5xl', 'font-extrabold', 'text-blue-500', 'ml-40', 'mt-20', 'mb-20');

    }
    
  return (
    <div>
        <h1 ref={myclass} className='text-3xl font-bold ml-80 mt-10 mb-10'>Change Class Example</h1>
        <button onClick={change} className='login'> Click here to change text color</button>
    </div>
  )
}

export default ChangeClass