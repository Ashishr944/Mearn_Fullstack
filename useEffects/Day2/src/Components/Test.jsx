import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Test = ({name= "Ashish"}) => {
    const [count, setCount] = useState(0);

    // useEffect(() =>{
    //     console.log("hello")
    // },[name])


    // Note never update the same state inside useEffect which is specified in the dependency array
    // the bewlo code will keep runing
    useEffect(() =>{
        // setCount(prev => prev + 1)
    },[count]);

  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>count: {count}</h2>
        <button onClick={() => setCount(prev => + 1) }></button>
    </div>
  )
}

export default Test
