import React from 'react'
import './Newlatter.css'


const NewLatter = () => {
  return (
    <div className='Subscribe'>
        <h1> Get Exclusive Offers on Your Email </h1>
        <p> Subscribe to our newsletter and stay updated </p>
        <div className='Sub_search'>
          <input type="email" placeholder='Your Email id' required />
          <button> Subscribe </button>
        </div>
    </div>
  )
}


export default NewLatter
