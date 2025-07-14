import React from 'react'

const LoginStat=(status)=>{
    if(status===true){
        return <button className='login'>Login</button>
    }
    else{
        return <button className='logout'>Logout</button>
    }
}

function LoginStatus() {
  return (
    <div>
        <h1 style={{ marginLeft:"30%" }}>Login Status</h1>
        {LoginStat(false)}

    </div>
  )
}

export default LoginStatus