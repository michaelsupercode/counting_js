import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function refresh() {
    window.location.reload();
  }
  return (
    <div className="App">
      <h6>counter {count}</h6>
      <p onClick={decrement}>-</p>
      <p onClick={increment}>+</p>
      <h6 onClick={refresh}>reset</h6>

    </div>
    

  );
}

export default App;
