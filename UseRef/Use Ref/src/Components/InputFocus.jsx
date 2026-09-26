import React, { useEffect, useRef, useState } from 'react'
import { use } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);
    const cityRef = useRef(null);
    const [city, setCity] = useState("Mumbai")
    
    console.log("Component renders");
    useEffect(() => {
        inputRef.current.focus();
    },[]);

    const changeCity = () =>{
        console.log(cityRef);
        cityRef.current.texContent = "Pune";
    }

    



    return (
    <div>
      <input type="text" ref={inputRef} placeholder='Focus this'/>
      <h2>City: {city}</h2>
      <h2 ref= {cityRef}>Mumbai</h2>
      <button onClick={() => setCity("Pune")}>Change City</button>
      <button onClick={changeCity}>Change cityRef</button>
    </div>
  )
}

export default InputFocus
