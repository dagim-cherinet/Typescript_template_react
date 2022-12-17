
import { useContext } from 'react';
import './App.css';
import { AppContext } from './context/appContext';
//import type { InitialState } from './context/appContext';

function App() {
  //const counter = useContext(AppContext)?.counter;
  //console.log(useContext(AppContext));

  const { counter, increment, decrement, reset } = useContext(AppContext);

  const btnStyle = {
    "padding": "10px",
    "margin": "5px",
    "borderRadius": "8px",
    "fontSize": '1.5rem',
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter = {counter}</h1>
        <div style={{ "display": "flex", "gap": "20px"}}>
          <button style={{...btnStyle}} onClick={increment && (()=>increment())}>Increment</button>
          <button style={{ ...btnStyle }} onClick={decrement && (() => decrement())}>Decrement</button>
           <button style={{...btnStyle}} onClick={reset && (()=>reset())}>Reset</button>
        </div> 
        
        
   
      
      </header>
    </div>
  );
}

export default App;
