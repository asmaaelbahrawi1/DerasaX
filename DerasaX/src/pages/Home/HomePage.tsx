// import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import NavBar from '../../components/layout/Navbar/NavBar'
import FaqButton from "../../components/FAQ/FAQButton"


import HeroSection from './HomePageSections/HeroSection/HeroSection'
import Partnership from './HomePageSections/Partnership Section/Partnership'
import ThreeCards from './HomePageSections/ThreeCardsSection/threecards'




export default function HomePage() {
  return <div>
            <NavBar />
            <HeroSection />
            <Partnership />
            <FaqButton />
            <ThreeCards/>
            
      
            
             <Footer />

         </div>
    
}
