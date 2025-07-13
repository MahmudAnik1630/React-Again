import React from 'react'

function IfElse() {

    const marks = 50;
  return (
    <div >
        {

    marks>40? <h1 className='if'>Pass</h1> : <h1 className='else'>Fail</h1>
    }

    </div>
  )
}

export default IfElse