import React from 'react'
import Counter from './Components/Counter'
import { useState } from 'react'
import Test from './Components/Test'
import Timer from './Components/Timer'
import Logs from './Components/Logs'

const App = () => {
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState("")
  return (
    <div>
      {toggle && <Counter/>}
      <Test/>
      <Timer/>
      <Logs/>
      
      <button onClick={() => setToggle(prev => !prev)}>Toggle Component</button>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default App
