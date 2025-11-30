// import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import NavBar from '../../components/layout/Navbar/NavBar'
import FaqButton from "../../components/FAQ/FAQButton"


import HeroSection from './HomePageSections/HeroSection/HeroSection'

import Features from './HomePageSections/FeaturesSection/Features'

import Partnership from './HomePageSections/Partnership Section/Partnership'

import ThreeCards from './HomePageSections/threeCardsSection/threecards' 





export default function HomePage() {
  return <div>
            <NavBar />
            <HeroSection />
            <Features />
            <ThreeCards/>
            <Partnership />
            <FaqButton />
            
            
            
      
            <Footer />

        </div>
    
}
