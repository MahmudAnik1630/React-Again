import React from 'react'

function TernaryIfElse() {

    const LinOut= (status)=>{
        return status? <button className='login'>Login</button> : <button className='logout'>Logout</button>

    }

  return (
    <div>

        <h1 style={{ marginLeft:"30%" }}>Login Status</h1>
        {LinOut(false)}
        

    </div>
  )
}

export default TernaryIfElse