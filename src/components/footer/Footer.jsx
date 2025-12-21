import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { FaFacebook, FaDiscord, FaSquareInstagram, FaBluesky   } from "react-icons/fa6";
import './Footer.css'



const Footer = () => {
  return (
    <div className='Footers'>
        <div className='Sect_one_div'>
            <img src={logo} alt="img" height={50} />
            <h3> Shopping </h3>
        </div>
        <div className='sect_tow_div'>
            <ul className='Footer_Text'>
                <li> <Link className='sty'> About </Link> </li>
                <li> <Link className='sty'> Products </Link> </li>
                <li> <Link className='sty'> Offices </Link> </li>
                <li> <Link className='sty'> Company </Link> </li>
                <li> <Link className='sty'> Contact </Link> </li>
            </ul>
        </div>
        <div className='sect_three_div'>
            <ul className='Footer_Socail'>
                <li> <Link> <FaFacebook/> </Link> </li>
                <li> <Link> <FaDiscord/> </Link> </li>
                <li> <Link> <FaSquareInstagram/> </Link> </li>
                <li> <Link> <FaBluesky/> </Link> </li>
            </ul>
        </div>
        <div className='sect_four_div'>
            <hr />
            <p> <span className='copyright'>Coppyright &copy;</span> 2025-All Right Revserved  modaretor-<span className='copyright'>anu</span> </p>
        </div>
    </div>
  )
}


export default Footer
