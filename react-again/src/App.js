import './App.css';
import React from 'react';
import Head from './component/Head';
import Foot from './component/Foot';
import Body from './component/Body';


function App() {
  return (
    <div className="App">
      <Head /> 
    <Body />
      <Foot />
    </div>
  );
}

export default App;
