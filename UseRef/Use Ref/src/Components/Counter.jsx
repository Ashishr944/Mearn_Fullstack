import  { useRef, useState } from 'react'

const Counter = () => {
  const ref = useRef("Hello");
   
    const [count, setCount] = useState(0);
    console.log("Component render");
  
    const increaseRef = () => {
      ref.current = ref.current + 1;
      console.log(ref);
    }
    return (
      <div>
        <h1>Count: {count}</h1>
        <h1>Ref value: {ref.current}</h1>
        <button onClick={increaseRef}>Increase Ref value</button>
        <button onClick={() => setCount(prev => prev + 1)}>Increase count</button>
      </div>
    )
}

export default Counter
