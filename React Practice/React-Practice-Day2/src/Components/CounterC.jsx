import React, { useState } from 'react'

const CounterC = () => {
  const [count, setCount] = useState(0);
  
    return (
      <div>
          <h1>Counter C: {count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      </div>
    )
}

export default CounterC
