import { useState } from 'react'
import './App.css'


function App() {
  
// let counter = 15;
const[counter, Setcounter] = useState("25");
let Addvalue = ()=> {
  Setcounter(counter+1);
  console.log(counter+1);
}
let Removevalue = ()=>{
  // counter = ;
  Setcounter(counter -1);
  console.log(counter-1);
}

  return (
    <>
      <h2>Project Making should be fun, right?</h2>
      <h2>Making a counter : {counter}</h2>
      <button onClick={Addvalue}>Add value</button>{" "}
      <button onClick={Removevalue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
