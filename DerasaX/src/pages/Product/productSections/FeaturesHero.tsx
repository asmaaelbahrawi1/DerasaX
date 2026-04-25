import { Link } from 'react-router-dom'
import featuresBook from '../../../assets/images/features-book.png'
import '../Product.css'
import useScrollReveal from "../useScrollReveal";

const FeaturesHero = () => {

  useScrollReveal();

  return (
    <div className="our-feature reveal">
        <div className="feature-container reveal">
            <h1>Our Features</h1>
            <h6>The Future Learns With You.</h6>
            <p>
              Discover the key features that make EduTera a smarter,
              faster, and more engaging digital learning experience,
              delivering seamless tools, intuitive design, and real-time
              insights that empower every step of the learning journey.
            </p>

            <Link to="/RequestDemoPage">
                <button className="btn-demo" style={{marginTop:"10px"}}>Request a demo</button>
            </Link>
        </div>

        <div className="image-container reveal">
            <img src={featuresBook} />
        </div>
    </div>
  )
}

export default FeaturesHero
