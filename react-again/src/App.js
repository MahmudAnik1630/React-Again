import './App.css';
import React from 'react';
import Head from './component/Head';
import Foot from './component/Foot';
import Body from './component/Body';
import IfElse from './IfElse';
import ImmidietFunction from './component/ImmidietFunction';
import Loop from './component/Loop';
import LoginStatus from './component/LoginStatus';
import TernaryIfElse from './component/TernaryIfElse';
import LogicalAndAnd from './component/LogicalAndAnd';



function App() {
  return (
    <div className="App">
      <Head /> 
    <Body />
    <IfElse />
    <ImmidietFunction />
    <Loop />
    <LoginStatus />
     <TernaryIfElse />
    <LogicalAndAnd />
   
      <Foot />

    </div>
  );
}

export default App;
