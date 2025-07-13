import './App.css';
import React from 'react';
import Head from './component/Head';
import Foot from './component/Foot';
import Body from './component/Body';
import IfElse from './IfElse';



function App() {
  return (
    <div className="App">
      <Head /> 
    <Body />
    <IfElse />
      <Foot />
    </div>
  );
}

export default App;
