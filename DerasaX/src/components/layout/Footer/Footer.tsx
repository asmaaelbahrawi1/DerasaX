import './Footer.css'
import '../../../styles/theme.css'
import logo from '../../../assets/images/Drasa-Logo-nf.png'
import instgram from '../../../assets/icons/instgram.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'

import email from '../../../assets/icons/email.svg'
import mobile from '../../../assets/icons/mobile.svg'
import location from '../../../assets/icons/location.svg'
import vector from '../../../assets/icons/vector.svg'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="" className='logo-img' />
            {/* <h2 className='logo-name'>EduTera</h2> */}
          </div>
          <p className="email">DrasaX@gmail.com</p>
          <p className="phone">+20 123 4567 890</p>

          <div className="socials">
            <img src={instgram} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />

            
          </div>
        </div>

        {/* Pages */}
        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Product</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>About us</li>
            <li>FAQ</li>
            <li>Our Team</li>
            <li>Terms of service</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><img src={email} alt="" />EduTera@gmail.com</li>
            <li><img src={mobile} alt="" />Mansoura - Dakahliya - Egypt</li>
            <li><img src={location} alt="" />+20 123 4567 890</li>
            <li><img src={vector} alt="" />19123</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
