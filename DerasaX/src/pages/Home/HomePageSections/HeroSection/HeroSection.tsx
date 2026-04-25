import './HeroSection.css'
import { useEffect, useState, useRef } from "react";
import herosection from '../../../../assets/images/herosection.png';
import herosection2 from '../../../../assets/images/herosection-2.png';
import herosection3 from '../../../../assets/images/herosection-3.png';
import herosection4 from '../../../../assets/images/herosection-4.png';

const images = [herosection, herosection2, herosection3, herosection4];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // *** Scroll Animation ***
  const heroRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      
      <section
        ref={heroRef}
        className={`main-section scroll-show ${inView ? "active" : ""}`}
      >
        <div className="main-container">

          <div className="main-content fade-up-element">
              <h1 className="welcome-title">
              Welcome back to <span className="highlight">Drasa<span id="t" style={{color:"#68AAB6"}}>X</span></span>
              </h1>

              <h2 className="welcome-subtitle">Smart Learning,Bright Minds</h2>

              <p className="welcome-description">
              An AI-powered education platform that uses adaptive learning, 
              gamified content, and collaborative projects to
              create personalized and effective learning experiences.
              </p>
          </div>

          <div className="main-img fade-right-element">
              <div className="main-img-container">
                <div className="line"></div>
                <div className="block"></div>

                <img
                  src={images[currentImageIndex]}
                  alt="main-img"
                  className="hero-img"
                />
              </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeroSection;