import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Navigate to signup page with email pre-filled
      navigate("/get-started", { state: { email } });
    }
  };

  return (
    <section className="hero-section w-screen min-h-screen flex items-center justify-center">
      <div className="hero-container w-full">
        <div className="hero-content">
          <Link to="/get-started" className="jsconf-badge">
            <span className="jsconf-text">PathX</span>
            <span className="jsconf-arrow">→</span>
            <span className="jsconf-link">Subscribe</span>
          </Link>

          <h1 className="hero-title">
            Where future cybersecurity <br />
            leaders are made
          </h1>

          <p className="hero-description">
            Node.js® is a free, open-source, cross-platform JavaScript runtime
            environment that lets developers create servers, web apps, command
            line tools and scripts.
          </p>

          {/* Email Subscription Section */}
          <div className="email-subscription">
            <form onSubmit={handleEmailSubmit} className="subscription-form">
              <div className="subscription-input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="subscription-input"
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Remove the hero-buttons section */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
