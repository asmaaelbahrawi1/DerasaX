// import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import NavBar from '../../components/layout/Navbar/NavBar'
import FaqButton from "../../components/FAQ/FAQButton"

import HeroSection from './HomePageSections/HeroSection/HeroSection'




export default function HomePage() {
  return <div>
            <NavBar />
            <HeroSection />
            <FaqButton />
            
             <Footer />

         </div>
    
}
