import React from 'react'
import { Link } from 'react-router-dom'

const CartComponent = () => {
  return (
    <div className='container shadow-lg p-2 rounded bg-light'>
        <div>
            <p className='text-center fw-bolder'>Empty Bag </p>
            <hr />
            <button className='btn btn-success btn-lg' to='/CheckOut'>Continue Shopping</button>
        </div>

    </div>
  )
}

export default CartComponent