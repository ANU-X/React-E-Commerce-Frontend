import React from 'react'
import Hero from '../components/navbar/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/newcollection/NewCollection'
import NewLatter from '../components/newlatter/NewLatter'


const Home = () => {
  return (
    <div>
        <p> <Hero/> </p>
        <p> <Popular/> </p>
        <p> <Offer/> </p>
        <p> <NewCollection/> </p>
        <p> <NewLatter/> </p>
    </div>
  )
}

export default Home
