import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/iCyberpathX/images/FirstLogo.png"
          alt="iCyberpathX Logo"
          className="logo-image"
        />
      </div>
      <div className="header-container">
        <div className="header-menu">
          <a href="#about">About</a>
          <a href="#article">Article</a>
          <a href="#blog">Blog</a>
          <a href="#contributor">Contributor</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
