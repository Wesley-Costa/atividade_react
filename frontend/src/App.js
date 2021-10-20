import {useState} from 'react';



function App() {
  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);
  }
  
  return (
    <div className="App">
      <div>
        contador:{counter}
      </div>
      <button onClick = {increment}>Incremento</button>
      <br></br>
      <button onClick = {decrement}>Decremento</button>
    </div>
  );
}

export default App;
