import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  // const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789";
    
    if(charAllowed) str += "!@#$%^&*-()_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    if (buttonText === "Copied!") {
      const timer = setTimeout(() => {
        setButtonText("Copy");
      }, 0);

      return () => clearTimeout(timer); 
    }
  }, [password]);

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length. numAllowed, charAllowed, passwordGenerator])

  const copyToClipboard = useCallback (()=>{
    setButtonText("Copied!");
    window.navigator.clipboard.writeText(password)
  }, [password])
   

  return (
    <>
    <div className='flex justify-center items-center bg-gray-500 w-full h-screen shadow-xl'>
        <div className='w-full max-w-md  mx auto shadow-lg rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-700' style={{boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)"}}>
          <h1 className='text-4xl text-center my-4'>Password Generator</h1>

          <div className='shadow rounded-lg overflow-hidden mb-4 flex flex-col justify-center items-center'>
            <div className='flex'>
            <input type="text" 
            readOnly
            value={password}
            className='outline-none bg-white w-full rounded-l-lg py-1 px-4 my-5'
            placeholder="password"
            // ref={passwordRef}
            />
            <button onClick={copyToClipboard}
            className='outline-none bg-red-400 text-white px-4 py-1 my-5 shrink-0 flex justify-center items-center rounded-r-lg border-2 border-transparent hover:border-red-800 hover:shadow-2xl'>{buttonText}
            </button>
            </div>
            <button onClick={passwordGenerator}
            className='outline-none bg-blue-700 rounded-lg text-white px-4 py-1 my-5 shrink-0 flex justify-center items-center border-2 border-transparent hover:border-blue-400 hover:shadow-2xl'>Generate
            </button> 
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>

              <input 
              type="range"
              min={6}
              max={100}
              value={length} 
              className='cursor-pointer my-5'
              onChange={(e)=>{setLength(e.target.value)}} 
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>

              <input 
              type="checkbox"
              defaultChecked = {numAllowed}
              id='numberInput'
              onChange={()=>{
                setNumAllowed((prev)=> !prev)
              }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>

              <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id='characterInput'
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
              />
              <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
