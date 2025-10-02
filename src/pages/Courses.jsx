import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Courses.css";

function Courses() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleCourseClick = (e, courseId) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate("/get-started", {
        state: { redirectTo: `/course/${courseId}` },
      });
    } else {
      // Navigate to course if logged in
      navigate(`/course/${courseId}`);
    }
  };

  const careerPaths = [
    { id: "all", name: "All Courses" },
    { id: "helpdesk", name: "IT Helpdesk Technician" },
    { id: "junior-analyst", name: "Junior Security Analyst" },
    { id: "pentester", name: "Penetration Tester" },
    { id: "soc-analyst", name: "SOC Analyst (Blue Team)" },
    { id: "cyber-manager", name: "Cybersecurity Manager" },
    { id: "defense-analyst", name: "Cyber Defense Analyst" },
    { id: "network-security", name: "Network Security" },
    { id: "security-engineer", name: "Security Engineer" },
  ];

  const courses = [
    // IT Helpdesk Technician
    {
      id: "it-fundamentals",
      title: "IT Fundamentals for Cybersecurity",
      description:
        "Learn essential IT concepts and skills that form the foundation of cybersecurity practices.",
      duration: "20 hours",
      level: "Beginner",
      instructor: "Sarah Johnson",
      image: "course-it-fundamentals.png",
      category: "helpdesk",
    },
    {
      id: "networking-basics",
      title: "Networking Fundamentals",
      description:
        "Master the basics of computer networking, protocols, and troubleshooting techniques.",
      duration: "25 hours",
      level: "Beginner",
      instructor: "Michael Chen",
      image: "course-networking.png",
      category: "helpdesk",
    },
    {
      id: "windows-admin",
      title: "Windows Administration",
      description:
        "Learn to manage and troubleshoot Windows operating systems in enterprise environments.",
      duration: "30 hours",
      level: "Intermediate",
      instructor: "David Wilson",
      image: "course-windows.png",
      category: "helpdesk",
    },
    {
      id: "linux-essentials",
      title: "Linux Essentials",
      description:
        "Gain practical skills in Linux administration, command line, and basic security configurations.",
      duration: "22 hours",
      level: "Beginner",
      instructor: "Priya Patel",
      image: "course-linux.png",
      category: "helpdesk",
    },
    {
      id: "help-desk-support",
      title: "Technical Support Fundamentals",
      description:
        "Develop customer service skills and technical troubleshooting methods for IT support roles.",
      duration: "18 hours",
      level: "Beginner",
      instructor: "James Rodriguez",
      image: "course-support.png",
      category: "helpdesk",
    },

    // Junior Security Analyst
    {
      id: "security-fundamentals",
      title: "Cybersecurity Fundamentals",
      description:
        "Introduction to core cybersecurity concepts, terminology, and basic defensive techniques.",
      duration: "24 hours",
      level: "Beginner",
      instructor: "Emma Davis",
      image: "course-security-fundamentals.png",
      category: "junior-analyst",
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence Basics",
      description:
        "Learn to identify, analyze and understand cyber threats and threat actors.",
      duration: "20 hours",
      level: "Intermediate",
      instructor: "Alex Thompson",
      image: "course-threat-intel.png",
      category: "junior-analyst",
    },
    {
      id: "security-monitoring",
      title: "Security Monitoring & Analysis",
      description:
        "Develop skills to monitor networks and systems for security events and analyze potential incidents.",
      duration: "28 hours",
      level: "Intermediate",
      instructor: "Sophia Martinez",
      image: "course-monitoring.png",
      category: "junior-analyst",
    },
    {
      id: "incident-response-basics",
      title: "Incident Response Fundamentals",
      description:
        "Learn the basics of responding to security incidents and following response procedures.",
      duration: "22 hours",
      level: "Intermediate",
      instructor: "Ryan Cooper",
      image: "course-incident-response.png",
      category: "junior-analyst",
    },
    {
      id: "security-tools",
      title: "Security Tools & Technologies",
      description:
        "Hands-on experience with common security tools used by junior analysts.",
      duration: "26 hours",
      level: "Intermediate",
      instructor: "Olivia Wilson",
      image: "course-security-tools.png",
      category: "junior-analyst",
    },

    // Penetration Tester
    {
      id: "ethical-hacking",
      title: "Ethical Hacking - The Complete Course",
      description:
        "Learn how to hack like a pro with up-to-date practical hacking techniques.",
      duration: "40 hours",
      level: "Advanced",
      instructor: "Heath Adams",
      image: "course-ethical-hacking.png",
      category: "pentester",
    },
    {
      id: "web-app-pentesting",
      title: "Web Application Penetration Testing",
      description:
        "Master techniques to identify and exploit vulnerabilities in web applications.",
      duration: "35 hours",
      level: "Advanced",
      instructor: "Jessica Knight",
      image: "course-webapp-pentest.png",
      category: "pentester",
    },
    {
      id: "network-pentesting",
      title: "Network Penetration Testing",
      description:
        "Learn methodologies to test network infrastructure security and identify weaknesses.",
      duration: "32 hours",
      level: "Advanced",
      instructor: "Marcus Johnson",
      image: "course-network-pentest.png",
      category: "pentester",
    },
    {
      id: "mobile-pentesting",
      title: "Mobile Application Security Testing",
      description:
        "Discover techniques to test and exploit vulnerabilities in iOS and Android applications.",
      duration: "28 hours",
      level: "Advanced",
      instructor: "Aisha Rahman",
      image: "course-mobile-pentest.png",
      category: "pentester",
    },
    {
      id: "exploit-development",
      title: "Exploit Development Fundamentals",
      description:
        "Learn to develop custom exploits and understand vulnerability exploitation.",
      duration: "45 hours",
      level: "Expert",
      instructor: "Daniel Lee",
      image: "course-exploit-dev.png",
      category: "pentester",
    },

    // SOC Analyst (Blue Team)
    {
      id: "soc-operations",
      title: "SOC Operations & Procedures",
      description:
        "Learn the day-to-day operations of a Security Operations Center and standard procedures.",
      duration: "25 hours",
      level: "Intermediate",
      instructor: "Nathan Black",
      image: "course-soc-ops.png",
      category: "soc-analyst",
    },
    {
      id: "siem-mastery",
      title: "SIEM Implementation & Management",
      description:
        "Master Security Information and Event Management systems for effective threat detection.",
      duration: "30 hours",
      level: "Intermediate",
      instructor: "Laura Chen",
      image: "course-siem.png",
      category: "soc-analyst",
    },
    {
      id: "threat-hunting",
      title: "Proactive Threat Hunting",
      description:
        "Develop skills to proactively search for threats that evade existing security solutions.",
      duration: "28 hours",
      level: "Advanced",
      instructor: "Carlos Mendez",
      image: "course-threat-hunting.png",
      category: "soc-analyst",
    },
    {
      id: "log-analysis",
      title: "Advanced Log Analysis",
      description:
        "Learn techniques to analyze various log sources to detect and investigate security incidents.",
      duration: "24 hours",
      level: "Intermediate",
      instructor: "Samantha Wright",
      image: "course-log-analysis.png",
      category: "soc-analyst",
    },
    {
      id: "malware-analysis",
      title: "Malware Analysis for Blue Team",
      description:
        "Understand malware behavior and develop skills to analyze and detect malicious software.",
      duration: "32 hours",
      level: "Advanced",
      instructor: "Victor Nguyen",
      image: "course-malware.png",
      category: "soc-analyst",
    },

    // Cybersecurity Manager
    {
      id: "security-leadership",
      title: "Cybersecurity Leadership & Management",
      description:
        "Develop leadership skills specific to managing cybersecurity teams and programs.",
      duration: "30 hours",
      level: "Advanced",
      instructor: "Elizabeth Morgan",
      image: "course-leadership.png",
      category: "cyber-manager",
    },
    {
      id: "security-governance",
      title: "Security Governance & Compliance",
      description:
        "Learn to implement security governance frameworks and ensure regulatory compliance.",
      duration: "25 hours",
      level: "Advanced",
      instructor: "Robert Taylor",
      image: "course-governance.png",
      category: "cyber-manager",
    },
    {
      id: "risk-management",
      title: "Cybersecurity Risk Management",
      description:
        "Master methodologies to identify, assess, and mitigate security risks in organizations.",
      duration: "28 hours",
      level: "Advanced",
      instructor: "Jennifer Adams",
      image: "course-risk.png",
      category: "cyber-manager",
    },
    {
      id: "security-strategy",
      title: "Developing Security Strategy & Roadmaps",
      description:
        "Learn to create effective security strategies aligned with business objectives.",
      duration: "24 hours",
      level: "Advanced",
      instructor: "William Park",
      image: "course-strategy.png",
      category: "cyber-manager",
    },
    {
      id: "security-budgeting",
      title: "Security Program Budgeting & ROI",
      description:
        "Understand how to budget for security initiatives and demonstrate return on investment.",
      duration: "20 hours",
      level: "Advanced",
      instructor: "Diana Rodriguez",
      image: "course-budgeting.png",
      category: "cyber-manager",
    },

    // Additional career paths with courses...
    // Cyber Defense Analyst
    {
      id: "defense-in-depth",
      title: "Defense-in-Depth Strategies",
      description:
        "Learn layered security approaches to protect organizational assets from various threats.",
      duration: "26 hours",
      level: "Intermediate",
      instructor: "Thomas Grant",
      image: "course-defense-depth.png",
      category: "defense-analyst",
    },
    {
      id: "vulnerability-management",
      title: "Vulnerability Management Program",
      description:
        "Develop skills to implement effective vulnerability management across the enterprise.",
      duration: "24 hours",
      level: "Intermediate",
      instructor: "Michelle Wong",
      image: "course-vuln-management.png",
      category: "defense-analyst",
    },
    {
      id: "security-architecture",
      title: "Security Architecture Fundamentals",
      description:
        "Learn principles of designing secure systems and network architectures.",
      duration: "30 hours",
      level: "Advanced",
      instructor: "Kevin Barnes",
      image: "course-security-architecture.png",
      category: "defense-analyst",
    },
    {
      id: "threat-modeling",
      title: "Threat Modeling & Analysis",
      description:
        "Master techniques to identify potential threats and develop appropriate countermeasures.",
      duration: "22 hours",
      level: "Intermediate",
      instructor: "Rachel Green",
      image: "course-threat-modeling.png",
      category: "defense-analyst",
    },
    {
      id: "security-automation",
      title: "Security Automation & Orchestration",
      description:
        "Learn to automate security processes to improve efficiency and response capabilities.",
      duration: "28 hours",
      level: "Advanced",
      instructor: "Jason Kim",
      image: "course-security-automation.png",
      category: "defense-analyst",
    },

    // Network Security
    {
      id: "network-defense",
      title: "Network Defense Essentials",
      description:
        "Learn fundamental techniques to secure network infrastructure against various attacks.",
      duration: "30 hours",
      level: "Intermediate",
      instructor: "Andrew Wilson",
      image: "course-network-defense.png",
      category: "network-security",
    },
    {
      id: "firewall-management",
      title: "Firewall Implementation & Management",
      description:
        "Master the configuration and management of next-generation firewalls.",
      duration: "25 hours",
      level: "Intermediate",
      instructor: "Lisa Johnson",
      image: "course-firewall.png",
      category: "network-security",
    },
    {
      id: "ids-ips",
      title: "Intrusion Detection & Prevention Systems",
      description:
        "Learn to implement and manage IDS/IPS solutions to detect and block network attacks.",
      duration: "28 hours",
      level: "Intermediate",
      instructor: "Mark Thompson",
      image: "course-ids-ips.png",
      category: "network-security",
    },
    {
      id: "vpn-security",
      title: "VPN & Remote Access Security",
      description:
        "Understand secure implementation of VPNs and remote access solutions.",
      duration: "22 hours",
      level: "Intermediate",
      instructor: "Sophia Lee",
      image: "course-vpn.png",
      category: "network-security",
    },
    {
      id: "network-monitoring",
      title: "Network Security Monitoring",
      description:
        "Develop skills to monitor network traffic for security events and anomalies.",
      duration: "26 hours",
      level: "Intermediate",
      instructor: "Christopher Davis",
      image: "course-network-monitoring.png",
      category: "network-security",
    },

    // Security Engineer
    {
      id: "secure-coding",
      title: "Secure Coding Practices",
      description:
        "Learn to write secure code and implement security throughout the development lifecycle.",
      duration: "32 hours",
      level: "Advanced",
      instructor: "Emily Zhang",
      image: "course-secure-coding.png",
      category: "security-engineer",
    },
    {
      id: "cloud-security",
      title: "Cloud Security Engineering",
      description:
        "Master security techniques for major cloud platforms (AWS, Azure, GCP).",
      duration: "35 hours",
      level: "Advanced",
      instructor: "Michael Roberts",
      image: "course-cloud-security.png",
      category: "security-engineer",
    },
    {
      id: "devsecops",
      title: "DevSecOps Implementation",
      description:
        "Learn to integrate security into DevOps pipelines and continuous integration processes.",
      duration: "30 hours",
      level: "Advanced",
      instructor: "Alicia Sanchez",
      image: "course-devsecops.png",
      category: "security-engineer",
    },
    {
      id: "identity-access",
      title: "Identity & Access Management",
      description:
        "Develop skills to design and implement robust IAM solutions for enterprise environments.",
      duration: "28 hours",
      level: "Advanced",
      instructor: "David Chen",
      image: "course-iam.png",
      category: "security-engineer",
    },
    {
      id: "security-automation-engineering",
      title: "Security Automation Engineering",
      description:
        "Learn to build automated security solutions using programming and scripting.",
      duration: "34 hours",
      level: "Advanced",
      instructor: "Natalie Wong",
      image: "course-automation-eng.png",
      category: "security-engineer",
    },
  ];

  // Function to generate course icon based on category and title
  const CourseIcon = ({ category, title, level }) => {
    // Define colors based on category - for level indicators only
    const categoryColors = {
      helpdesk: "rgba(76, 175, 80, 0.8)",
      "junior-analyst": "rgba(33, 150, 243, 0.8)",
      pentester: "rgba(244, 67, 54, 0.8)",
      "soc-analyst": "rgba(156, 39, 176, 0.8)",
      "cyber-manager": "rgba(255, 152, 0, 0.8)",
      "defense-analyst": "rgba(63, 81, 181, 0.8)",
      "network-security": "rgba(0, 188, 212, 0.8)",
      "security-engineer": "rgba(255, 87, 34, 0.8)",
    };

    // Default color if category not found - using the site's theme color
    const categoryColor = categoryColors[category] || "rgba(0, 255, 255, 0.8)";

    // Generate a unique pattern seed based on the course title
    const seed = title
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Generate pattern parameters based on the course category and title
    const getPatternParams = () => {
      // Different pattern types based on category
      const patterns = {
        helpdesk: {
          type: "grid",
          elements: 4 + (seed % 3),
          rotation: seed % 45,
        },
        "junior-analyst": {
          type: "circles",
          elements: 3 + (seed % 4),
          rotation: seed % 30,
        },
        pentester: {
          type: "hexagon",
          elements: 2 + (seed % 3),
          rotation: seed % 60,
        },
        "soc-analyst": {
          type: "shield",
          elements: 3 + (seed % 2),
          rotation: seed % 20,
        },
        "cyber-manager": {
          type: "nodes",
          elements: 4 + (seed % 3),
          rotation: seed % 15,
        },
        "defense-analyst": {
          type: "layers",
          elements: 3 + (seed % 3),
          rotation: seed % 25,
        },
        "network-security": {
          type: "web",
          elements: 5 + (seed % 3),
          rotation: seed % 40,
        },
        "security-engineer": {
          type: "code",
          elements: 4 + (seed % 4),
          rotation: seed % 35,
        },
      };

      return (
        patterns[category] || {
          type: "default",
          elements: 4,
          rotation: seed % 30,
        }
      );
    };

    const params = getPatternParams();

    // Level indicator
    const levelIndicator =
      {
        Beginner: 1,
        Intermediate: 2,
        Advanced: 3,
        Expert: 4,
      }[level] || 1;

    return (
      <div className="course-icon-container">
        <div className="ai-pattern-container">
          <svg
            viewBox="0 0 100 100"
            className="ai-pattern"
            style={{ transform: `rotate(${params.rotation}deg)` }}
          >
            {params.type === "grid" && (
              <>
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                <line
                  x1="20"
                  y1="40"
                  x2="80"
                  y2="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                <line
                  x1="20"
                  y1="60"
                  x2="80"
                  y2="60"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                <line
                  x1="40"
                  y1="20"
                  x2="40"
                  y2="80"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="20"
                  x2="60"
                  y2="80"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => (
                  <circle
                    key={i}
                    cx={30 + ((i * 15) % 40)}
                    cy={30 + Math.floor(i / 3) * 15}
                    r="3"
                    fill="rgba(255,255,255,0.7)"
                    className="pulse-element"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </>
            )}

            {params.type === "circles" && (
              <>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => {
                  const angle = ((i * 360) / params.elements) * (Math.PI / 180);
                  const radius = 20;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="rgba(255,255,255,0.7)"
                      className="pulse-element"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  );
                })}
              </>
            )}

            {params.type === "hexagon" && (
              <>
                <polygon
                  points="50,20 80,35 80,65 50,80 20,65 20,35"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <polygon
                  points="50,30 70,40 70,60 50,70 30,60 30,40"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => {
                  const points = [
                    [50, 30],
                    [70, 40],
                    [70, 60],
                    [50, 70],
                    [30, 60],
                    [30, 40],
                  ];
                  const point = points[i % points.length];
                  return (
                    <circle
                      key={i}
                      cx={point[0]}
                      cy={point[1]}
                      r="3"
                      fill="rgba(255,255,255,0.7)"
                      className="pulse-element"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  );
                })}
              </>
            )}

            {params.type === "shield" && (
              <>
                <path
                  d="M50,20 C70,30 80,40 80,60 C80,70 70,75 50,80 C30,75 20,70 20,60 C20,40 30,30 50,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <path
                  d="M50,30 C65,38 70,45 70,60 C70,65 65,70 50,75 C35,70 30,65 30,60 C30,45 35,38 50,30"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => (
                  <circle
                    key={i}
                    cx={50}
                    cy={40 + i * 10}
                    r="3"
                    fill="rgba(255,255,255,0.7)"
                    className="pulse-element"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </>
            )}

            {params.type === "nodes" && (
              <>
                <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.7)" />
                {Array.from({ length: params.elements }).map((_, i) => {
                  const angle = ((i * 360) / params.elements) * (Math.PI / 180);
                  const radius = 25;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return (
                    <g key={i}>
                      <line
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="3"
                        fill="rgba(255,255,255,0.7)"
                        className="pulse-element"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </g>
                  );
                })}
              </>
            )}

            {params.type === "layers" && (
              <>
                {Array.from({ length: params.elements }).map((_, i) => {
                  const offset = i * 5;
                  return (
                    <rect
                      key={i}
                      x={25 + offset}
                      y={25 + offset}
                      width={50 - offset * 2}
                      height={50 - offset * 2}
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                      className="pulse-stroke"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  );
                })}
                <circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="rgba(255,255,255,0.7)"
                  className="pulse-element"
                />
              </>
            )}

            {params.type === "web" && (
              <>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => {
                  const angle = ((i * 360) / params.elements) * (Math.PI / 180);
                  const x1 = 50 + 30 * Math.cos(angle);
                  const y1 = 50 + 30 * Math.sin(angle);
                  return (
                    <g key={i}>
                      <line
                        x1="50"
                        y1="50"
                        x2={x1}
                        y2={y1}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx={x1}
                        cy={y1}
                        r="2"
                        fill="rgba(255,255,255,0.5)"
                        className="pulse-element"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      {Array.from({ length: 2 }).map((_, j) => {
                        const nextI = (i + j + 1) % params.elements;
                        const nextAngle =
                          ((nextI * 360) / params.elements) * (Math.PI / 180);
                        const x2 = 50 + 30 * Math.cos(nextAngle);
                        const y2 = 50 + 30 * Math.sin(nextAngle);
                        return (
                          <line
                            key={j}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="0.5"
                            className="pulse-stroke"
                            style={{ animationDelay: `${(i + j) * 0.1}s` }}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </>
            )}

            {params.type === "code" && (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={i}
                    x1="20"
                    y1={30 + i * 10}
                    x2="80"
                    y2={30 + i * 10}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: params.elements }).map((_, i) => {
                  const width = 10 + ((seed + i) % 30);
                  return (
                    <rect
                      key={i}
                      x={25}
                      y={30 + i * 10}
                      width={width}
                      height="5"
                      rx="1"
                      fill="rgba(255,255,255,0.3)"
                      className="pulse-element"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  );
                })}
                <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.5)" />
                <circle cx="25" cy="15" r="3" fill="rgba(255,255,255,0.5)" />
                <circle cx="35" cy="15" r="3" fill="rgba(255,255,255,0.5)" />
              </>
            )}

            {params.type === "default" && (
              <>
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                {Array.from({ length: params.elements }).map((_, i) => {
                  const angle = ((i * 360) / params.elements) * (Math.PI / 180);
                  const x = 50 + 25 * Math.cos(angle);
                  const y = 50 + 25 * Math.sin(angle);
                  return (
                    <g key={i}>
                      <line
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="3"
                        fill="rgba(255,255,255,0.5)"
                        className="pulse-element"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </g>
                  );
                })}
              </>
            )}
          </svg>
        </div>

        <div className="course-level-indicator">
          {[...Array(levelIndicator)].map((_, i) => (
            <span
              key={i}
              className="level-dot"
              style={{ backgroundColor: categoryColor }}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  const filteredCourses = courses.filter((course) => {
    return (
      (activeTab === "all" || course.category === activeTab) &&
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="courses-page">
      <Header />

      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Cybersecurity Courses</h1>
          <p>
            Advance your career with our expert-led courses designed for every
            stage of your cybersecurity journey
          </p>
        </div>
      </div>

      <div className="courses-container">
        <div className="courses-sidebar">
          <h3>Career Paths</h3>
          <ul className="career-paths-list">
            {careerPaths.map((path) => (
              <li
                key={path.id}
                className={activeTab === path.id ? "active" : ""}
                onClick={() => setActiveTab(path.id)}
              >
                {path.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="courses-main">
          <div className="courses-header">
            <h2>
              {careerPaths.find((path) => path.id === activeTab)?.name ||
                "All Courses"}
            </h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="course-card"
                  onClick={(e) => handleCourseClick(e, course.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="course-image">
                    <div className="course-level">{course.level}</div>
                    <CourseIcon
                      category={course.category}
                      title={course.title}
                      level={course.level}
                    />
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-meta">
                      <span>
                        <i className="far fa-clock"></i> {course.duration}
                      </span>
                      <span>
                        <i className="far fa-user"></i> {course.instructor}
                      </span>
                    </div>
                    {!isLoggedIn && (
                      <div className="login-required">
                        <small>Login required to access course</small>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-courses">
                <p>
                  No courses found matching your criteria. Try adjusting your
                  search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
