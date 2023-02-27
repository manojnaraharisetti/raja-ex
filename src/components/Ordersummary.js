import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Ordersummary() {
  const Navigate = useNavigate();
  return (
    <div>
        <h1>Order is Confirmed!!!</h1>
        <button onClick={() => Navigate('/')}>Go Back</button>
    </div>
  )
}
