import { Link } from 'react-router-dom'
import '../styles/CoreValues.css'

function CoreValues() {
  const values = [
    {
      id: 'core-values',
      title: 'Our Core Values',
      emoji: '🛡️',
      description: 'Integrity, innovation, and excellence in cybersecurity education built on ethical practices and cutting-edge knowledge.',
      linkText: 'Learn About Us',
      linkTo: '/about'
    },
    {
      id: 'what-we-offer',
      title: 'What We Offer',
      emoji: '🔍',
      description: 'Comprehensive courses, hands-on labs, certification prep, and a supportive community of security professionals.',
      linkText: 'Explore Courses',
      linkTo: '/courses'
    },
    {
      id: 'our-mission',
      title: 'Our Mission',
      emoji: '🚀',
      description: 'Empowering individuals with skills to protect digital assets and build a more secure world through quality education.',
      linkText: 'Join Our Mission',
      linkTo: '/get-started'
    },
    {
      id: 'learning-approach',
      title: 'Learning Approach',
      emoji: '🧠',
      description: 'Combining theory with practical exercises, real-world scenarios, and interactive challenges for applicable skills.',
      linkText: 'See Our Method',
      linkTo: '/methodology'
    }
  ]

  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <h2 className="section-title">Why Choose iCyberpathX</h2>
        
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="card-emoji" data-emoji={value.emoji}>{value.emoji}</div>
              <h3 className="card-title">{value.title}</h3>
              <p className="card-description">{value.description}</p>
              <Link to={value.linkTo} className="card-link">
                {value.linkText} <span className="arrow-icon">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues



