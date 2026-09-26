import React, { useEffect, useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0)
    console.log("Component is rendering count: ", count)

    useEffect(() => {
      console.log("Effect running count: ", count)
    }, [count])

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
      <button onClick={() => setCount1(prev => prev + 1)}>Count: {count1}</button>
    </div>
  )
}

export default App
