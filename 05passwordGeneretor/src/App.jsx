import { useState, useCallback, useEffect, useRef} from "react";

function App(){
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false);

  // Use useRef hook
  const passwordRef = useRef(null) 

  const passwordGenerete = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed == true) str += "0123456789";
    if(charAllowed == true) str += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
    for (let i = 1; i <= length; i++) {
        let _char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(_char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    if(!password) return;
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      
    }, 1500);
  },[password])

  useEffect(() => {
    passwordGenerete()
  }, [length, numAllowed, charAllowed, setPassword])

return(
<>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg 
   px-4 py-3 my-8 bg-gray-300 text-blue-900">
      <h1 className='text-black text-center my-3'>PASSWORD GENERATOR</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
       <button 
        onClick={copyPasswordToClipboard}
        className={`outline-none text-white px-3 py-0.5 shrink-0 rounded-md font-semibold 
        transition-all duration-300 transform 
      ${copied 
      ? "bg-green-600 scale-105 animate-pulse" 
      : "bg-blue-700 hover:bg-blue-800 hover:scale-105 active:scale-95"}`}
>
  {copied ? "Copied" : "Copy"}
</button>

      </div>
      <div className="flex text-sm gap-x-2">
        <input type="range"
        min={8}
        max={30}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        <div className="flex items-center gap-x-1"></div>
        <input type="checkbox"
        defaultChecked = {numAllowed}
        id="numberInput"
        onChange={() => {
            setNumAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="">Numbers</label>
         <div className="flex items-center gap-x-1"></div>
        <input type="checkbox"
        defaultChecked = {charAllowed}
        id="charInput"
        onChange={() => {
            setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="">Charecters</label>
      </div>
    </div>
</>

  )
}
export default App