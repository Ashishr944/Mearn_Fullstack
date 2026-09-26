import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Logs = () => {
    const [count, setCount] = useState(0)
    console.log("Rendering, count: ", count);

    useEffect(() =>{
        console.log("Effect rendring count rendering, count: ", count);
        return () => {
            console.log("Cleanup rendering count rendering, count: ", count)
        }
    }, [count])

    console.log("Rendering complete count: ", count)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(prev => prev +1)}>Increase</button>

    </div>
  )
}

export default Logs

// Output

// Rendering, count:  0
// Logs.jsx:16 Rendering complete count:  0
// Logs.jsx:10 Effect rendring count rendering, count:  0
// Logs.jsx:7 Rendering, count:  1
// Logs.jsx:16 Rendering complete count:  1
// Logs.jsx:12 Cleanup rendering count rendering, count:  0
// Logs.jsx:10 Effect rendring count rendering, count:  1
// Logs.jsx:7 Rendering, count:  2
// Logs.jsx:16 Rendering complete count:  2
// Logs.jsx:12 Cleanup rendering count rendering, count:  1
// Logs.jsx:10 Effect rendring count rendering, count:  2