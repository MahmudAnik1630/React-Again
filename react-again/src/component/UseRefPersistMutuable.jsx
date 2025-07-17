import React, { useRef } from 'react';

function UseRefPersistMutuable() {
  const ApiData = useRef();
  const mypTag = useRef();

  const callApi = async () => {
    const response = await fetch('https://dummyjson.com/products');
    ApiData.current = await response.json();
    alert('Data Fetched!');
  };

  const showdata = () => {
    mypTag.current.innerText = JSON.stringify(ApiData.current);
  };

  return (
    <div>
      <p ref={mypTag}></p>
      <button onClick={callApi} className="login mt-10">Call API</button>
      <button onClick={showdata} className="login -ml-20">Show Data</button>
    </div>
  );
}

export default UseRefPersistMutuable;
