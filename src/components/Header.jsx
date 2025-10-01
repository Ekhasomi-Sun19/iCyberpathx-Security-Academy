import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Header.css";

function Header({ toggleMobileMenu }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="nodejs-header">
      <div className="header-container">
        {/* Logo with higher priority positioning */}
        <div className="logo">
          <img
            src="/iCyberpathX/images/FirstLogo.png"
            alt="iCyberpathX Logo"
            className="logo-image"
          />
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#download">Article</a>
          <a href="#blog">Blog</a>
          <a href="#contribute" className="contribute-link">
            Contributors
            <span className="external-icon">↗</span>
          </a>
        </nav>

        {/* Login Button */}
        <div className="header-actions">
          <Link to="/get-started" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
