import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  console.log(props)
  return (
    <div className='item_style'>
      <div className='img-style'>
            <Link to={`/product/${props.id}`}>
            <img src={props.image} alt="img" />
        </Link>
        </div>
        <div className='item-name'>
          <h3> {props.name} </h3>
        </div>
        <div className='Price_prod'>
            <div className='old_price'>৳ {props.old_price} + VAT </div>
            <div className='new_price'>৳ {props.new_price} + VAT </div>
        </div>
    </div>
  )
}

export default Items