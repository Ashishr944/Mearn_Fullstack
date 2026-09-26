import React from 'react'
import { useState } from 'react'
const User = () => {
    const [students, setStudent] = useState({name: "Ashishs", age: 20, city: "Pune", marks: 50});

    const updateCity = () => {
        setStudent((prev) => ({...prev, city: "Mumbai"}))
    }
   
  return (
    <div>
      <h2>Name: {students.name}</h2>
      <h2>Age: {students.age}</h2>
      <h2>City: {students.city}</h2>
      <h2>Marks: {students.marks}</h2>


      <button onClick={updateCity}>Update city to Mumbai</button>
      <button >Increase marks by 20</button>
    </div>
  )
}

export default User
