import React from 'react'
import { useState } from 'react';
// const CounterB = () => {
//   const [count, setCount] = useState(0);
//     console.log("Render phase : complete render with count value: ", count)

//     const handleClick = () => {
//         console.log("Before setCount count value: ", count);

//         setCount(count + 1);
//         console.log("After setCount(count +1): " , count);

//         setCount(count + 5);
//         console.log("After setCount(count +5): " , count);

//         setCount(count + 10);
//         console.log("After setCount(count +10): " , count);
//     }
//   return (
//     <div>
//         <h1>CounterB: {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }

// export default CounterB


// After setCount(count+ 1): 0;
// After setCount(count+ 5): 0;
// After setCount(count+ 10): 0;
// Render phase: Complete render with count value: 10

// As we can see react doues not allow us to directly update the state multiple times in the same handler
// this is done so that the amount of component renders could be limited for better optimization



// const CounterB = () => {
//   const [count, setCount] = useState(0);
//     console.log("Render phase : complete render with count value: ", count)

//     const handleClick = () => {
//         console.log("Before setCount count value: ", count);

//         // setCount(count + 1);
//         setCount((prev) => prev + 1)
//         console.log("After setCount((prev) => prev + 1): " , count);

//         setCount((prev) => prev + 5);
//         console.log("After setCount((prev) => prev + 5): " , count);

//         setCount((prev) => prev + 10);
//         console.log("After setCount((prev) => prev + 10): " , count);
//     }
//   return (
//     <div>
//         <h1>CounterB: {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }

// export default CounterB


// Note:
// If the next value of state depends on the previous value always go with prev arga in setState
// this will help you avoid unnecessary renders and keep state in code and UI in sync


//Ouput: 

// Before setCount count value:  0
// CounterB.jsx:49 After setCount((prev) => prev + 1):  0
// CounterB.jsx:52 After setCount((prev) => prev + 5):  0
// CounterB.jsx:55 After setCount((prev) => prev + 10):  0
// CounterB.jsx:42 Render phase : complete render with count value:  16


// Before setCount count value:  16
// CounterB.jsx:49 After setCount((prev) => prev + 1):  16
// CounterB.jsx:52 After setCount((prev) => prev + 5):  16
// CounterB.jsx:55 After setCount((prev) => prev + 10):  16
// CounterB.jsx:42 Render phase : complete render with count value:  32







const CounterB = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);
    const [isActive, setIsActive] = useState(0);

    console.log("Render phase : complete render with count value: ", count)

    const handleClick = () => {
        console.log("Before setCount count value: ", count);

        // setCount(count + 1);
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 5);
        setCount((prev) => prev + 10);
        setName("update value");
        setIsActive(true);
    }
  return (
    <div>
        <h1>CounterB: {count}</h1>
        <h2>Name:{name}</h2>
        <h2>Active: {isActive ? "Yes" : "No"}</h2>
        <button onClick={handleClick}>Update All values</button>
    </div>
  )
}

export default CounterB


// in the above code we cn see that even tho the state is updated 5 times but component only renders 1 time
// this is known ans Batching, in batching react ->
// 1. waits untill your event handlers finishes
// 2. gathers all your state updates
// 3. Applies them in one render
