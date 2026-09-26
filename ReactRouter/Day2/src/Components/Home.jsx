import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate('order-summaary')}>Order Summary Page</button>
    </div>
  )
}

export default Home
