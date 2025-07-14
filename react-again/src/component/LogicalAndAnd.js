import React from 'react'
 const status = true;

function LogicalAndAnd() {

   
  return (
    <div>
        
            <h1 style={{ marginLeft:"30%" }}> Login Status using Logical And And</h1>

            {status && <button className='login'>Login</button>}
            {!status && <button className='logout'>Logout</button>}
        

    </div>
  )
}

export default LogicalAndAnd