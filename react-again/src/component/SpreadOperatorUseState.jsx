import React ,{useState} from 'react'

function SpreadOperatorUseState() {
    const [MyObj, setMyObj] =useState({
        Name: 'Anik',
        Age: 25,
        City: 'Dhaka'
    });

    // const change =()=>{

    //     setMyObj({
    //         Name: 'Anik',
    //         Age: 26,
    //         City: 'Dhaka'
    //     })
        
    // }

    const change = () => {

        setMyObj(

            prevOBJ=>({
                ...prevOBJ,
                Age: 27,
            })
        )
    }


  return (
    <div>
        <h1>{MyObj.Age}</h1>
        <button onClick={change} className='login'>Change</button>
    </div>
  )
}

export default SpreadOperatorUseState