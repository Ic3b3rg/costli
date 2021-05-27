import React, { useEffect, useState } from 'react';
import Button from './components/button/Buttons'
import './App.css';

function App() {
  const [counter, setCounter] = useState(2);
  let cars = ["Saab", "Volvo", "BMW"];

  const decrement = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    const element = document.getElementById(`${counter}`)
    if (counter % 2 === 0 && element) {
      element.style.backgroundColor = "red"
    }
    if (counter % 2 === 1 && element) {
      element.style.backgroundColor = "blue"
    }
  }, [counter])

  return (
    <>
      <Button click={() => setCounter(counter + 1)} title="Incrementa">Increment</Button>
      <Button click={() => decrement()} title="Decrementa">Increment</Button>
      <h1 className="counter" id={`${counter}`} key={counter}>{counter}</h1>
      {cars.map((el, i) => {
        return <p key={i}>{el}</p>
      })}
      {cars.map((el, i) => {
        return el.includes('S') && <p key={i}>{el}</p>;
      })}
    </>
  );
}

export default App;
