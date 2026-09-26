import React from 'react'
import { useEffect } from 'react';
import { use } from 'react';
import { useState } from 'react'

const FetchDynamicData = () => {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await res.json();
            console.log(data);
        }
        fetchData();
    },[userId])
  return (
    <div>
        <input type="text" placeholder='Enter userId' onChange={(e) => setUserId(e.target.value)}/>
        {user ? <h1>User Id : {user.id}, UserName : {user.name}</h1>: ""}
        <h2>User id: , UserName</h2>
    </div>
  )
}

export default FetchDynamicData
