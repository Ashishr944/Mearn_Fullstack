import { useState } from 'react';


const Counter2 = () => {
 
  // Lazy Initialization 
  const [count, setCount] = useState(() =>{
    console.log("runs in initial render");
    return 0
  });
  
  console.log("Counter 2 is rendering")
  

  return (
    <div>
      <h2>Counter 2:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Counter2
