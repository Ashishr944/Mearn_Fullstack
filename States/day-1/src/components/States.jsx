import { useState } from "react"
const States = () => {
    console.log("state compent is rendering ")


    // let count = 0;

    // here count is the state and setCount is the function that sets the value of state
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)

        // count++;
        // console.log(count);

    }    
    const handleDecrease = () => {
        setCount(count - 1)
        // count--;
        // console.log(count);
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrease}>decrease</button>
    </div>
  )
}
export default States