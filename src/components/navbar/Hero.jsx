import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow_icon.png'
import p8 from '../../assets/p8.png'

const Hero = () => {
  return (
    <div className='Hero-Bg'>
      <div>
        <h2>Best Deals! Best Price!s</h2>
        <div className='Collect-Text'>
          <div className='new_hand'>
          <h2>New</h2>
            <img src={hand_icon} alt="img" height={'50px'} />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>

        <div className='Collect-Button'>
          <h3>Letest Collections</h3>
          <img src={arrow_icon} alt="imgs" height={'20px'} />
        </div>
      </div>
      <div>
        <img src={p8} alt="imgs" />
      </div>
    </div>
  )
}

export default Hero
