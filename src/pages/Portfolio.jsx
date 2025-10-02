import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";

function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="portfolio-page">
      <header>
        <Link to="/">
          <img
            src="/iCyberpathX/images/FirstLogo.png"
            alt="Logo"
            className="header-logo"
          />
        </Link>
        <div className="header-buttons">
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <div
          className="mobile-menu-toggle"
          id="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <nav>
        <ul id="nav-menu" className={mobileMenuOpen ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Sunday Ekhasomi</h1>
          <p>Software Developer & System Engineer</p>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i> ekh19001@byui.edu
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 208-201-1254
            </p>
            <p>
              <i className="fab fa-github"></i>{" "}
              <a
                href="https://github.com/Ekhasomi-Sun19?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate software developer with experience in full-stack
            development, system engineering, and network security. My expertise
            spans across various technologies including JavaScript, Python,
            React, and AWS cloud services.
          </p>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>Bachelor's degree in Computer Science</h3>
            <p>Brigham Young University – Idaho, United States</p>
            <p>GPA: 3.7/4.0</p>
          </div>
          <div className="education-card">
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>2024 - 2027</p>
            <p>December 2024</p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>TypeScript</li>
                <li>PowerShell</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <ul>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>Vue</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>AWS DynamoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Other Technology</h3>
              <ul>
                <li>Amazon Web Services</li>
                <li>GitHub</li>
                <li>Linux</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Windows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Developer Intern</h3>
              <p className="company">QBench</p>
              <p className="duration">May 2025 - Present | Remote</p>
            </div>
            <ul className="experience-details">
              <li>
                Developed a scalable, fault-tolerant distributed system for user
                portfolio pages using JavaScript, HTML, React, and PostgreSQL.
              </li>
              <li>
                Optimized real-time data retrieval algorithms to enhance data
                consistency, reliability, and efficiency, leveraging data
                structures.
              </li>
              <li>
                Built a responsive web application using React and JavaScript,
                focusing on customer experience and software quality.
              </li>
              <li>
                Designed resource management and search engine features using
                JavaScript and React, incorporating UI/UX design, complexity.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>System Engineer</h3>
              <p className="company">
                Brigham Young University – Idaho (IT Platform Services)
              </p>
              <p className="duration">April 2022 – Jan 2024 | Rexburg, Idaho</p>
            </div>
            <ul className="experience-details">
              <li>
                Utilized Postman and Python to reverse engineer & interact with
                Workday App Restful APIs to make a web HTTP Request to server.
              </li>
              <li>
                Developed over 50+ custom integrations on Workday IDE to pull
                data from Workday API and monitor user action abnormalities.
              </li>
              <li>
                Monitored system logs, web API logs, generated reports,
                documented integrations, and provided support for incidents
                requests.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Network Engineer Intern</h3>
              <p className="company">
                The Church of Jesus Christ of Latter-day Saints (IT Division)
              </p>
              <p className="duration">
                September 2022 – January 2023 | Riverton, Utah
              </p>
            </div>
            <ul className="experience-details">
              <li>
                Developed network security automation on Cisco Meraki, reducing
                unauthorized access by 40% and improving monitoring by 30%.
              </li>
              <li>
                Configured CISCO devices, and optimized distributed computing,
                securing 25+ VLANs, LANs, WLANs, and VPNs.
              </li>
              <li>
                Spearhead a 100TB+ cloud migration, enhancing scalability and
                cutting costs by 40%.
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Front-End Developer Intern</h3>
              <p className="company">Sapien Design</p>
              <p className="duration">
                June 2021 – September 2021 | Rexburg, Idaho
              </p>
            </div>
            <ul className="experience-details">
              <li>
                Designed a web troubleshooting dashboard with Python for web
                application monitoring to improve resolution efficiency by 25%.
              </li>
              <li>
                Integrated RESTful APIs using Postman and JSON, enhancing data
                flow and system interoperability in a multi-tiered architecture.
              </li>
              <li>
                Developed and improved software components using JavaScript,
                React, and CSS, ensuring maintainable and extendable code while
                collaborating with stakeholders to enhance UX.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="project-cards">
            <div className="project-card">
              <h3>Web Application</h3>
              <p className="tech-stack">
                AWS S3, EC2, EventBridge, JavaScript, HTML, CSS
              </p>
              <ul className="project-details">
                <li>
                  Developed a web application on AWS using Lambda, EventBridge,
                  DynamoDB, and S3 to automate the oil change process.
                </li>
                <li>
                  Integrated EC2, RDS, and Route 53 for efficient cloud-based
                  service automation.
                </li>
                <li>
                  Designed a scalable solution to streamline oil change
                  procedures on the AWS platform.
                </li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Cloud Database (Firebase)</h3>
              <p className="tech-stack">
                RESTful API, JavaScript, HTML, CSS, Firebase, React.js
              </p>
              <ul className="project-details">
                <li>
                  Developed a user login and sign-up page for a mobile app using
                  JavaScript, React.js, & Firebase for authentication and data
                  storage.
                </li>
                <li>
                  Utilized Python for data analysis and classification to
                  enhance user insights.
                </li>
                <li>
                  Leveraged Postman and JSON to interact with RESTful & SOAP
                  APIs for secure web requests.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-info-container">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>ekh19001@byui.edu</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+1 208-201-1254</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <p>
                <a
                  href="https://github.com/Ekhasomi-Sun19?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2024 Sunday Ekhasomi. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Ekhasomi-Sun19?tab=repositories"
            className="icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
