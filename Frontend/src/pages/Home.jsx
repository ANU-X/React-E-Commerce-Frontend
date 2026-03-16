import React from 'react'
import Hero from '../components/navbar/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/newcollection/NewCollection'
import NewLatter from '../components/newlatter/NewLatter'


const Home = () => {
  return (
    <div>
        <div> <Hero/> </div>
        <div> <Popular/> </div>
        <div> <Offer/> </div>
        <div> <NewCollection/> </div>
        <div> <NewLatter/> </div>
    </div>
  )
}

export default Home
