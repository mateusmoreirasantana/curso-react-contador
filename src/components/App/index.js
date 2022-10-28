
import './App.css';
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function remove() {
    setCounter(counter - 1);
  }

  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={add}>+</button>
    <button onClick={remove}>-</button>
  </div>
  );
}

export default App;
