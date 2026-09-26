import React from 'react'
import { useParams, useSearchParams } from 'react-router'


const Users = () => {
    // const params = useParams();
    // console.log(params);

    // const {id} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('marks'));


    // to get all parameter in the url
    // for(const [key, value] of searchParams.entries()){
    //     console.log(key, value);
    // }




    // when you have multiple atribute
    console.log(searchParams.getAll('sort'))

    const activeUsers = searchParams.get("filter") == 'Active' ? true : false

  return (
    <div>
        <button onClick={() => setSearchParams({filter: 'Active'})}>Active Users</button> 
        <button onClick={() => setSearchParams({})}>Reset Filter</button>  

        {activeUsers ? <h1>Showing Active users</h1> : <h1>Showing inactive users</h1>} 

    </div>
  )
}

export default Users
