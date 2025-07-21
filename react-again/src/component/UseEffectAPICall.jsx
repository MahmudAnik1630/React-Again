import React, { useEffect } from 'react';

function UseEffectAPICall() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        console.log(data[3].title); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Check console for API data (Promise style)</h1>
    </div>
  );
}

export default UseEffectAPICall;
