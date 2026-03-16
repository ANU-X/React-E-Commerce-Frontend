import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { FaFacebook, FaDiscord, FaSquareInstagram, FaBluesky   } from "react-icons/fa6";
import './Footer.css'
import playstore from '../../assets/play-store.svg'
import applestore from '../../assets/apple-store.svg'



const Footer = () => {
  return (
    <footer className='Footers'>
        <div className='Sect_one_div'>
            <img src={logo} alt="img" height={50} />
            <h3> Shopping </h3>
        </div>

        <div className='footer_bar'>
            <ul>
                <h1> CUSTOMER SERVICE </h1>
                <li> Order and Cancellation </li>
                <li> Shipping & Delivery </li>
                <li> Contact Us </li>
                <li> FAQs </li>
                <li> Return & Exchanges </li>
                <li> Privilege Member </li>
            </ul>

            <ul>
                <h1> WHO WE ARE </h1>
                <li> About Us </li>
                <li> Blogs </li>
            </ul>

            <ul>
                <h1> MORE </h1>
                <li> Privacy Policy </li>
                <li> Find a Store </li>
                <li> Terms & Conditions </li>
                <li> Site Map </li>
            </ul>
            <div className='app_store_icon'>
                <h1> DOWNLOAD OUR MOBILE APP </h1>
                <div>
                    <img src={playstore} alt="img" loading='lazy' height={50}/>
                    <img src={applestore} alt="img" loading='lazy' height={50}/>
                </div>

            <ul className='Footer_Socail'>
                <li> <Link> <FaFacebook/> </Link> </li>
                <li> <Link> <FaDiscord/> </Link> </li>
                <li> <Link> <FaSquareInstagram/> </Link> </li>
                <li> <Link> <FaBluesky/> </Link> </li>
            </ul>

            </div>
        </div>

        <div className='sect_four_div'>
            <hr />
            <p> <span className='copyright'>Coppyright &copy;</span> 2025-All Right Revserved  modaretor-<span className='copyright'>anu</span> </p>
        </div>        
    </footer>
  )
}


export default Footer
