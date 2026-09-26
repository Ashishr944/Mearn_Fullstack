import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // Note: Do not forget to specify the dependency array in useEffect, bc that is what determines
    // how the sideEffects are performed

    // useEffect(() =>{
    //     console.log("hello")
    //     console.log(count)
    // },[count, count1])
    

    // componentDidMount
    // useEffect(() =>{
    //     console.log("perform this sideEffect when component is mounted on the screen")
    // },[])


    // ComponentDidUpdate
    // useEffect(() =>{
    //     console.log("perform this sideEffect when component is mounted on the screen")
    // },[count])

    // ComponentWillUnmount
    
    useEffect(() => {
        return () => {
            console.log("performing this sideEffect when component is removed from the screen")
        }
    },[])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <h1>Count 2: {count1}</h1>
      <button onClick={() => setCount1(prev => prev + 1)}>Increase</button>

    </div>
  )
}

export default Counter
