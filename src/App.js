import { useState, useEffect } from 'react';
import './App.css';
import Parent from './parent';
import Container from './Container';
import Hello from './Hello';

//Use counter example
// const useCounter = (initialValue) => {
//   const [count, setCount] = useState(initialValue);
//   const increment = () => {
//     setCount(count + 1);
//   }
//   const decrement = () => {
//     setCount(count - 1);
//   }
//   const reset = () => {
//     setCount(initialValue);
//   }

//   return {count, increment, decrement, reset};
// }

function App() {
  // const {count, increment, decrement, reset} = useCounter(0);
  // Pure example
  //const [salary, setSalary] = useState(1000);
  // const [id, setId] = useState(0);
  // const [age, setAge] = useState(30);

  // useEffect (() => {
  //   setInterval(() => {
  //     console.log("Inside set interval");
  //     setId(id + 1);
  //   },1000)
  // })

  //HOC

  const SampleComponent = Container(Hello);

  return (
    <div className="App">
      {/*  useCounter example
      <h1> {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button> */}
      
      {/* Pure Component Example */}
      {/* <Parent salary={salary} id={id} age={age}/> */}

      {/*HOC example */}
      <SampleComponent />

    </div>
  );
}

export default App;
