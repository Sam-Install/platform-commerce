import React from 'react'
import Hero from '../component/Hero'
import Why from '../component/Why'
import HotItems from '../component/HotItems'
import Promo from '../component/Promo'
import Testimonials from '../component/Testimonials'
import Categories from '../component/Categories'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Why/>
        <HotItems/>
        <Categories/>
        <Promo/>
        <Testimonials/>
        
        
    
    </div>
  )
}

export default Home