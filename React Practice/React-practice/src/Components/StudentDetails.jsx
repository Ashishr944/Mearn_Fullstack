import React from 'react'
import { useState } from 'react'



const StudentDetails = () => {
    const [student, setStudent] = useState({name:"Ashish", age: 20});
    const handleCLick = () =>{
        setStudent((prev) => ({...prev, age: 25}))
    }
    const nameChange = (e) => {
        console.log(e.target.value);
        setStudent((prev) => ({...prev, name: e.target.value}))
    }
  return (
    <div>
        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <button onClick={handleCLick}>Update age to 25</button>
        <input type="text" placeholder='enter name' onChange={nameChange} />
    </div>
  )
}

export default StudentDetails
