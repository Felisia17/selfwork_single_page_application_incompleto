import { useState } from "react";
import Form from "./Form.jsx"


function Counter() {
  
const [counter, setCounter] = useState(0);

const increment = ()=>{
setCounter((prev)=> prev + 1);
}

const decrement = ()=>{
  setCounter((prev)=> prev - 1);
}
  return (
    <>
      <h1> Il mio COUNTER </h1>
      <p> Counter value: {counter}</p>
      <button id="increment" onClick={increment}>+</button>
      <button id="decrement" onClick={decrement}>-</button>

      
    </>
  )
}

export default Counter
