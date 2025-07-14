import './App.css';
import React from 'react';
import Head from './component/Head';
import Foot from './component/Foot';
import Body from './component/Body';
import IfElse from './IfElse';
import ImmidietFunction from './component/ImmidietFunction';



function App() {
  return (
    <div className="App">
      <Head /> 
    <Body />
    <IfElse />
    <ImmidietFunction />
      <Foot />
    </div>
  );
}

export default App;
