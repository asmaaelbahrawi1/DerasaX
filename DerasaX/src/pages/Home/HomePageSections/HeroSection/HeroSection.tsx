import './HeroSection.css'
import { useEffect, useState } from "react";

import herosection from '../../../../assets/images/herosection.png';
import herosection2 from '../../../../assets/images/herosection-2.png';
import herosection3 from '../../../../assets/images/herosection-3.png';
import herosection4 from '../../../../assets/images/herosection-4.png';

const images = [herosection, herosection2, herosection3, herosection4];
import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode; // هنا بنعرف الـ children ممكن يكون أي React element أو نص
}
const  HeroSection: React.FC<HeroSectionProps> = ({ children }) =>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);  // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
        <section className="main-section">
            <div className="main-container">
              <div className="main-content">
                  <h1 className="welcome-title">
                  Welcome back to <span className="highlight">Edu<span id="t">T</span>era</span>
                  </h1>
                  <h2 className="welcome-subtitle">Smart Learning,Bright Minds</h2>
                  <p className="welcome-description">
                  An AI-powered education platform that uses adaptive learning, 
                  gamified content, and collaborative projects to
                  create personalized and effective learning experiences.
                  </p>
                  {children && <div>{children}</div>}

              </div>

              <div className="main-img">
                  <div className="main-img-container">
                    <div className="line">
                  </div>
                  <div className="block">
                  </div>
                  <img src={images[currentImageIndex]} alt="main-img" className='hero-img'/>
                  </div>
              </div>
            </div>
        </section>
    </div>
  );
};
export default HeroSection;