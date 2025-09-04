import { useEffect } from 'react';
import '../styles/MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu">
        <button className="close-menu-btn" onClick={onClose}>×</button>
        <nav className="mobile-nav">
          <a href="#learn" onClick={onClose}>Learn</a>
          <a href="#about" onClick={onClose}>About</a>
          <a href="#download" onClick={onClose}>Download</a>
          <a href="#blog" onClick={onClose}>Blog</a>
          <a href="#docs" onClick={onClose}>Docs</a>
          <a href="#contribute" onClick={onClose}>Contribute</a>
          <a href="#certification" onClick={onClose}>Certification</a>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;