import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
      <>
        <p>The counter is now on {count}</p>
        <button onClick={() => setCount(count + 1)}>Add one</button>
      </>
  );
}

export default App;
