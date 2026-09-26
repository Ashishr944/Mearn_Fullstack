import React, { useState } from 'react'
const ininialStudents = [
    {id: 1, name: "Alice", present: false},
    {id: 2, name: "Bob", present: false},
    {id: 3, name: "Charlie", present: false}
]

const StudentAttendance = () => {

    const [students, setStudent] = useState(ininialStudents);
    // toggle presetn for that student
    const togglePresent = (id) => {
        // setStudent((prev) => prev.map(item => {
        //     if(item.id == id){
        //          return {...item, present: !item.present}
        //     }
        //     else{
        //         return item;
        //     }
        // }))


        setStudent((prev) => prev.map(item =>
            item.id == id ? ({...item, present: !item.present}) : true 
        ))

    }

    // mark all as present
    const markAllPresent = () => {
        setStudent((prev) => prev.map(item => ({...item, present: true})))
    }
  return (
    <div>
      <h2>Student Attendance</h2>
      <button onClick={markAllPresent}>Mark All present</button>
      <ul>
        {students.map((students) => (
            <li key={students.id}>
                <label> 
                    <input 
                    type= 'checkbox'
                    checked={students.present}
                    onChange={() => togglePresent(students.id)}
                    />
                    {students.name} ({students.present ? "Present" : "Absent"})
                </label>
            </li>
        ))}
      </ul>

      
    </div>
  )
}

export default StudentAttendance
