import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill email if coming from hero section
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    console.log("Google authentication clicked");
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <Link to="/">
          <img src="/iCyberpathX/images/FirstLogo.png" alt="iCyberpathX Logo" />
        </Link>
      </div>

      <h1 className="auth-title">
        Sign in or sign up
        <br />
        to access iCyberpathX
      </h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="email-input-container">
          <span className="email-icon">✉️</span>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <button type="submit" className="submit-arrow" disabled={isLoading}>
            {isLoading ? "..." : "→"}
          </button>
        </div>

        <div className="separator">
          <span>OR</span>
        </div>

        <button type="button" className="google-btn" onClick={handleGoogleAuth}>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
          Continue with Google
        </button>
      </form>

      <div className="benefits-section">
        <h2>Join iCyberpathX Today</h2>
        <ul className="benefits-list">
          <li>
            <span className="benefit-icon">🔒</span>
            <span className="benefit-text">
              Access exclusive cybersecurity resources
            </span>
          </li>
          <li>
            <span className="benefit-icon">🚀</span>
            <span className="benefit-text">Track your learning progress</span>
          </li>
          <li>
            <span className="benefit-icon">💬</span>
            <span className="benefit-text">
              Join our community of security professionals
            </span>
          </li>
          <li>
            <span className="benefit-icon">📱</span>
            <span className="benefit-text">Access content on any device</span>
          </li>
        </ul>
      </div>

      <div className="terms-footer">
        By proceeding, you acknowledge that you have read, understood, and agree
        to our <Link to="/terms">Terms of Service</Link> and{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </div>
    </div>
  );
}

export default SignUp;
