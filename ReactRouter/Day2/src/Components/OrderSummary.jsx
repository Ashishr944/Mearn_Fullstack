import React from 'react'
import { useNavigate } from "react-router"

const OrderSummary = () => {
    const navigate = useNavigate();

  return (
    <div>
      <h1>Order Summary</h1>
      <button onClick={() => navigate( -1)}>Go back</button>
    </div>
  )
}

export default OrderSummary
