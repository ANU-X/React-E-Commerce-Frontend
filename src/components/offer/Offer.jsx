import React from 'react'
import './Offer.css'
import exclu from '../../assets/exclu.webp'

const Offer = () => {
  return (
    <div className='Exclucive'>
        <div className='Exclucive_text'>
            <div>
                <h2> Exclucive </h2>
            <h2> Offers For You</h2>
            <p> ONLY ON BEST SELLERS <br /> PRODUCTS </p>
            </div>
            <button> Check Now </button>
        </div>
        <div className='exclu_img'>
            <img src={exclu} alt="img" />
        </div>
    </div>
  )
}

export default Offer

