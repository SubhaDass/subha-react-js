import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  const [count, setCount] = useState(0)
  let myObj = {
    userName: "subha das",
    age: 52
  }
  let newArr = [1, 4, 6, 33]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>
      Tailwind test </h1>
      <br />
      <Card name="john cena" btnText="Click me"/>
      <Card name="randy ortan" btnText="Visit me"/>
    </>
  )
}

export default App
