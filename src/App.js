import { useState } from 'react';
import './App.css';

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(initialValue);
  }

  return {count, increment, decrement, reset};
}

function App() {
  const {count, increment, decrement, reset} = useCounter(0);
  return (
    <div className="App">
      <h1> {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
