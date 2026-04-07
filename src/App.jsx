

import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";
import Counter from "./components/Counter.jsx";
import React from "react";
import LoadingData from "./components/LoadingData.jsx";


function App() {

const project = 'React';

const names = ['Zena', 'Athena', 'Alaska', 'Africa'];

  return (
    <>

    
    
    <Navbar></Navbar>
    
    <h1 className="titleClass">Io sono il titolo del mio nuovo progetto {project}</h1>
    <input className="inputClass" type="text" id="input1"/>
    <label className="labelClass" htmlFor="input1">Io sono l'input</label>
    <Header></Header>
    <List names={names}/>

    <Form></Form>
    <Counter></Counter>
    <LoadingData></LoadingData>

    </>
      
      
    
  )
}

export default App




//NECESSITO DI PIù CHIARIMENTI IN MERITO AI COMPOUND COMPONENTS