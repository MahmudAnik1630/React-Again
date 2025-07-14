import React from "react";

function Loop() {
  const city = ["Delhi", "Mumbai", "Bangalore", "Chennai"];
  return (
    <div >
     
         <ol className='loop'>
        {
        
        city.map((item, index) => (
          <li key={index.toString()} className='city'>
            {item}
          </li>
        ))
        
        }

         </ol>
    </div>
  );
}

export default Loop;
