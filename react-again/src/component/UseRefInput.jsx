import React,{useRef} from 'react'

function UseRefInput() {

    let Fname,Lname= useRef();
    const clicked=()=>{
        let firstName = Fname.value;
        let lastName = Lname.value;

        if (firstName && lastName) {
            alert(`First Name: ${firstName}, Last Name: ${lastName}`);
        } else {
            alert("Please fill in both fields.");
        }
        
       
    }

    
  return (
    <div>
        <input ref={(a)=>Fname=a} type="text" placeholder='First Name' className='formm' />
        <input ref={(a)=>Lname=a}type="text" placeholder='Last Name' className='formm' />
        <button onClick={clicked} className='login'>Submit</button>


    </div>
  )
}

export default UseRefInput