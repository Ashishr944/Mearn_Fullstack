import React from 'react'
import { use } from 'react';
import { useState } from 'react'



// task is to make static code dynamic
const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);

    const handleClick = () => {
        let obj = {name: name, age: age};
        setUsers([...users, obj]);
    }


  return (
    <div>
      <input type="text" placeholder='Enter Name'  onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='Enter age' onChange={(e) => setAge(e.target.value)}/>
      <button onClick={handleClick}>Add Users</button>

      {
        users.map((item, index) => <li key={index}>Name: {item.name}, age :{item.age}</li>)
      }
    </div>
  )
}

export default Users
