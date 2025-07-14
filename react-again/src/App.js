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
import Props from './component/Props';
import PropsObj from './component/PropsObj';



function App() {


  const propObj={
    Name : 'Anik',
    Age : 25,
    City: 'Dhaka'
  }
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

    <Props title ="Props" from="Parent" />
    <PropsObj item={propObj}/>
   
      <Foot />

    </div>
  );
}

export default App;
