import '../../styles/global.css'
import '../../styles/theme.css'
import NavBar from '../../components/layout/Navbar/NavBar';
import Footer from '../../components/layout/Footer/Footer' ;
import '../Home/HomePageSections/HeroSection/HeroSection.css' ;
import './AboutPage.css';

import HeroSection from '../Home/HomePageSections/HeroSection/HeroSection' ;
import studentStudying from '../../assets/images/studentStudying.png' ;


export default function AboutPage() {
    return (
    <>
    <NavBar />
        <HeroSection>
    <button className="btn-primary"> Request a demo</button>
</HeroSection>

    <section className="solutions-section">
        <h2 className="solutions-title">
        EduTera Produces modern solutions,<br />
        <span className="solutions-subtitle">Solving modern problems</span>
        </h2>

        <div className="solutions-grid">
        <div className="solution-card">
            <h3 className="solution-title">LearnSphere: The Future of 12-k education</h3>
            <p className="solution-description">
            Integrates teaching resources, student activities, parental
            involvement, administrative functions, and school oversight
            into one seamless platform accessible on any device.
            </p>
        </div>

        <div className="solution-card">
            <h3 className="solution-title">Igniting Minds Through Smart Education</h3>
            <p className="solution-description">
            An AI-powered education platform that uses adaptive
            learning, gamified content, and collaborative projects to
            create personalized and effective learning experiences.
            </p>
        </div>

        <div className="solution-card">
            <h3 className="solution-title">Connecting Students, Parents, and Teachers for Smarter Learning</h3>
            <p className="solution-description">
            Transforming traditional education into a connected,
            seamless experience. By bridging students, parents, and
            teachers in one intelligent system.
            </p>
        </div>
        </div>

        <div className="student-image-section">
        <img src={studentStudying} alt="Student studying" className="student-image" />


        </div>
        </section>


        <Footer />
    </>
    )
    
    ;
}
