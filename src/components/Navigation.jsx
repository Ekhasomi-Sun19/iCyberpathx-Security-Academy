import { Link } from 'react-router-dom'

function Navigation({ mobileMenuOpen, toggleMobileMenu }) {
  return (
    <nav>
      <ul id="nav-menu" className={mobileMenuOpen ? 'mobile-open' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#video-tutorials">Video Tutorials</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><Link to="/portfolio">Download</Link></li>
        <li><a href="#blog">Blog</a></li>
        <div id="mobile-header-buttons"></div>
      </ul>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navigation



