import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    
  }

  const removeValue = () => {
    if(counter !== 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button 
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App