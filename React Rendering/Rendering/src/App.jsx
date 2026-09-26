import React, { useState } from 'react'

const App = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "kiwi", "watermelon"])
  return (
    <div>
      <ul>
        {fruits.map((item, index) => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
