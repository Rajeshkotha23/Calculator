// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';



function App() {
const[input,setInput] = useState("")
const handler = e =>{
  setInput(e.target.value)
}
const [result,setResult] =useState(0)
  return (
    <div className="App">
      <input type="text" value={input}  name="input" onChange={handler} /> <br></br><br></br>
      <button className='submit' onClick={() =>setResult(eval(input))}>Result</button><br></br>
     <h1> {result}</h1>
     
     <button className='btn' onClick={()=> setInput(input+"1")}>1</button>
     <button className='btn' onClick={()=> setInput(input+"2")}>2</button>
     <button className='btn' onClick={()=> setInput(input+"3")}>3</button>
     <button className='btn' onClick={()=> setInput(input+"4")}>4</button>
     <button className='btn' onClick={()=> setInput(input+"5")}>5</button><br></br>
     <button className='btn' onClick={()=> setInput(input+"6")}>6</button>
     <button className='btn' onClick={()=> setInput(input+"7")}>7</button>
     <button className='btn' onClick={()=> setInput(input+"8")}>8</button>
     <button className='btn' onClick={()=> setInput(input+"9")}>9</button>
     <button className='btn' onClick={()=> setInput(input+"0")}>0</button><br></br>
     <button className='btn' onClick={()=> setInput(input+"+")}>+</button>
     <button className='btn' onClick={()=> setInput(input+"-")}>-</button>
     <button className='btn' onClick={()=> setInput(input+"*")}>*</button>
     <button className='btn' onClick={()=> setInput(input+"/")}>/</button>
     <button className='btn' onClick={()=> setInput("")}>clr</button>
      
    </div>
  );
}

export default App;
