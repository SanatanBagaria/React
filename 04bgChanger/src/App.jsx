import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, Setcolor] = useState('olive')

  return (
    <div className='w-full h-screen bg-slate-600' style={{backgroundColor: color}}>
      <div className='fixed justify-center flex flex-wrap inset-x-0 px-2 bottom-12'>
        <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-white px-2 py-3 rounded-3xl'>
          <button className='outline-4 px-4 py-1 text-black rounded-full shadow-lg bg-teal-600' onClick={()=>Setcolor('teal')}>TEAL</button>
          <button className='outline-4 px-4 py-1 text-black rounded-full shadow-lg bg-purple-500' onClick={()=>Setcolor('purple')}>PURPLE</button>
          <button className='outline-4 px-4 py-1 text-black rounded-full shadow-lg bg-pink-300' onClick={()=>Setcolor('lightpink')}>PINK</button>
        </div>
        </div>
    </div>
  )
}

export default App
