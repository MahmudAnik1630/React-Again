import React from 'react'

function OnClickEvent() {

    function demo()
    {
        alert("Button Clicked!");
    }
  return (
    <div>

        <button className='login' onClick={demo}  style={{ marginTop:"30px" }}>Click Me</button>
        <button className='login' onClick={()=>{alert('4')}}>2+2=?</button>

    </div>
  )
}

export default OnClickEvent