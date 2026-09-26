// Create stopwatch with start and top buttons
// the timer should increase by 1 sec when you click on start

 import React, { useReducer, useRef, useState } from 'react'
 
 const Stopwatch = () => {
    const [seconds, steSeconds] = useState(0);
    // let timerId = null
    let timerId = useRef(null);

    const startTimer = () => {
        if(timerId.current !== null) return

        timerId.current = setInterval(() => {
            steSeconds(prev => prev + 1);
        }, 1000)
    }

    const stopTimer = () => {
       clearInterval(timerId.current);
       timerId.current = null;
    }

   return (
     <div>
       <h1>Time: {seconds}</h1>
       <button onClick={startTimer}>Start</button>
       <button onClick={stopTimer}>Stop</button>
     </div>
   )
 }
 
 export default Stopwatch
 