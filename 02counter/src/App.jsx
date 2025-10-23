import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0) // 0 is a default value 
  // counter is a variable and setCounter is a function

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      console.log("Clicked", counter);
    }
  }

  const removeValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)
      console.log("Clicked", counter);
    }
  }

  return (
    <>
     <h1> winter is here </h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>
        Add value {counter}</button>
     <br />
     <button onClick={removeValue}> 
      Remove value {counter} </button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
