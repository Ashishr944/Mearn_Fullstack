import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("Render phase : complete render with count value: ", count)

    const handleClick = () => {
        console.log("Before setCount count value: ", count);

        setCount(count + 1);
        console.log("After setCount count value: " , count);
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter


// Output: 
// click 1 -> 
    // "Before setcount count value: " -> 0
    // "After setcount count value: " -> 0 
    // "Render phase: complete render with count value: " -> 1;

// click 2 -> 
    // "Before setcount count value: " -> 1
    // "After setcount count value: " -> 1
    // "Render phase: complete render with count value: " -> 2;
