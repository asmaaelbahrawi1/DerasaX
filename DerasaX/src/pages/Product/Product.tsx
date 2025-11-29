// import React from 'react'
import NavBar from '../../components/layout/Navbar/NavBar'
import FeaturesHero from './productSections/FeaturesHero'
import ProductFeatures from './productSections/ProductFeatures'
import OtherFeatures from './productSections/OtherFeatures'

import './Product.css'
import Footer from '../../components/layout/Footer/Footer'

const Product = () => {
  return (
    <>
    <NavBar className='navbar-product'/>
    <FeaturesHero />
    <ProductFeatures />
    <OtherFeatures />
    <Footer/>

    </>
  )
}

export default Product
