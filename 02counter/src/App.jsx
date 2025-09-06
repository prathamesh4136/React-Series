import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  //let counter = 15;

  const addValue = ()=>{
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br></br><br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
