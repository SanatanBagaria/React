import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './container/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-500 p-3 rounded underline">
      Hello world!
      </h1>
      
      <Card url = "https://i.pinimg.com/236x/d2/22/ab/d222ab9820dd0c9f2f3535abe553340a.jpg" />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
