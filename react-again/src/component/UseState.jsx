import React ,{useState} from 'react'

function UseState() {

    const [number , setNumber] = useState(1);

    const increment = () => {
        setNumber(number + 1);
    }
  return (
    <div>
        <h1 className='btn ml-80 mt-10 mb-10'>Number: {number} </h1>
        <button onClick={increment} className='login'>Increment</button>
    </div>
  )
}

export default UseState