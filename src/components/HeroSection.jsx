import '../styles/HeroSection.css'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <Link to="/get-started" className="jsconf-badge">
            <span className="jsconf-text">PathX</span>
            <span className="jsconf-arrow">→</span>
            <span className="jsconf-link">Get Started</span>
          </Link>
          
          <h1 className="hero-title">
            Become a Cybersecurity <br />
            Expert!
          </h1>
          
          <p className="hero-description">
            Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets
            developers create servers, web apps, command line tools and scripts.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Install Node.js</button>
            <button className="btn-secondary">About the Author →</button>
            <span className="version-note">Sunday Ekhasomi</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection




