import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  console.log(props)
  return (
    <div className='item_style'>
            <Link to={`/product/${props.id}`}>
            <img src={props.image} alt="img" />
        </Link>
        <p> {props.name} </p>
        <div className='Price_prod'>
            <div className='old_price'>${props.old_price}</div>
            <div className='new_price'> ${props.new_price} </div>
        </div>
    </div>
  )
}

export default Items