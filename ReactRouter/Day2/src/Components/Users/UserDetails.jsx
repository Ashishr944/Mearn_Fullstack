import React from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
  // const params = useParams()
  // console.log(params.id)

  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <h2>This is details of user with id{id}</h2>
    </div>
  )
}

export default UserDetails
