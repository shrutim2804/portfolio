import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink, FiCode, FiAward, FiBookOpen } from 'react-icons/fi'
import './App.css'

function App() {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const typedStrings = [
  "Computer Science Undergraduate",
  "Aspiring Software Engineer",
  "Java Developer",
  "AI & Machine Learning Enthusiast",
  "Problem Solver"
];

  // Typing Animation Effect
  useEffect(() => {
    let timeout
    if (charIndex < typedStrings[textIndex].length) {
      timeout = setTimeout(() => {
        setTypedText(prev => prev + typedStrings[textIndex].charAt(charIndex))
        setCharIndex(charIndex + 1)
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText('')
        setCharIndex(0)
        setTextIndex((textIndex + 1) % typedStrings.length)
      }, 2000)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, textIndex])

  

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 50) {
          header.style.background = 'var(--bg-primary)'
          header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
        } else {
          header.style.background = 'transparent'
          header.style.boxShadow = 'none'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "AI Resume & Cover Letter Generator",
      description: "Developed an AI-powered resume and cover letter generator using Generative AI APIs. Applied prompt engineering techniques to improve response quality and accuracy.**Deployed live on Render** – fully functional and accessible.",
      tech: ["React", "Generative AI", "Python", "API Integration"],
      github: "https://github.com/shrutim2804/resume-cover-letter-generator",
      live: "https://resume-cover-letter-generator-ts5i.onrender.com/"
    },
    
    {
      title: "Online Examination System",
      description: "A desktop-based examination platform using Java Swing and OOPs principles. Implemented a timer-based question rendering system with automatic score calculation using the Collections Framework (ArrayList, HashMap).",
      tech: ["Java", "OOPs", "Collections"],
      github: "https://github.com/shrutim2804/Online-Examination-System",
      live: "#"
    },
    {
  title: "Student Management System",
  description: "A complete desktop application to manage student records, featuring admin authentication, full CRUD operations (Add, Edit, Delete, View), real-time search by ID or name, CSV export for reports, data validation (email, phone, student ID format), and an interactive dashboard with statistics. Built to help educational institutions manage student data efficiently using a modern Swing GUI and MySQL database.",
  tech: ["Java", "MySQL", "JDBC", "Swing", "OOP"],
  github: "https://github.com/shrutim2804/student-management-system",
  live: "#"
},
    
    {
      title: "NIRMAY - Rural Healthcare Assistant (SIH Project)",
      description: "Developed as part of a 6-member team for Smart India Hackathon (SIH). Contributed to UI/UX design, frontend development, and solution planning for a platform aimed at improving healthcare accessibility in rural communities. Project currently in development.",
      tech: ["React", "Frontend Development", "UI/UX", "Healthcare"],
      github: "#",
      live: "#"
    }
  ]

  const skills = {
    "Programming Languages": ["Java","C", "Python",  "SQL"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React"],
    "AI/ML": ["Generative AI", "Prompt Engineering", "API Integration"],
    "Tools": ["GitHub", "VS Code"],
    "Core CS": ["DSA", "OOP", "DBMS", "OS", "CN"]
  }

  const internships = [
    {
      title: "Gen-AI Intern",
      company: "IBM PBEL Virtual Internship Program",
      duration: "2025",
      desc: "Developed AI-based Resume & Cover Letter Generator using Generative AI APIs. Implemented prompt engineering techniques."
    },
    {
      title: "Summer Training",
      company: "United College of Engineering and Research",
      duration: "2024",
      desc: "Completed training focused on Core Java and Java Collection Framework. Enhanced practical coding skills."
    }
  ]

  const achievements = [
    "Actively practicing Data Structures and Algorithms on LeetCode, focusing on Arrays, Strings, and Java fundamentals.",
    "Selected as Contributor in GirlScript Summer of Code (GSSoC) 2026",
    "Shortlisted in Smart India Hackathon (SIH) internal rounds",
    "Oracle Cloud Infrastructure AI Foundations Associate - 2025",
    "Infosys Artificial Intelligence Certification - 2025"
  ]

  return (
    <div className="app">
      {/* Particle Background */}
      <div id="particles-js"></div>
      
      {/* Animated Circles */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>

      {/* Header */}
      <header className="header">
        <nav className="nav container">
          <div className="logo">Portfolio.</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-text">
              <h1 className="hero-name shadow-3d">SHRUTI MISHRA</h1>
              <p className="hero-title">4th Year B.Tech Computer Science Student</p>
              <p className="typing-text">✨ {typedText}<span className="cursor">|</span></p>
              <p className="hero-desc">
                4th Year B.Tech Computer Science student with interests in Java development, Generative AI, and modern web technologies. Actively building projects, strengthening problem-solving skills, and seeking opportunities in software engineering and AI.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn-primary"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <FiDownload /> Download Resume
                </button>
                <a href="#contact" className="btn-secondary">Contact Me</a>
              </div>
              <div className="social-links">
                <a href="https://github.com/shrutim2804"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/shruti-mishra-5020s"><FiLinkedin /></a>
                <a href="mailto:shrutimishra5020@gmail.com"><FiMail /></a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-placeholder floating">
<img 
  src="https://res.cloudinary.com/dgipcza0f/image/upload/v1781728507/profile_kk9vsp.jpg" 
  alt="Profile" 
  style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} 
/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>Who am I?</h3>
                <p>
I'm a 4th-year Computer Science Engineering student with a strong interest in software development, artificial intelligence, and web technologies. I enjoy building practical applications using Java and modern tools while continuously learning Data Structures & Algorithms, cloud computing, and API integration. Through internships, hackathons, and academic projects, I strive to create solutions that make a meaningful impact.
                </p>
                <h3>What I Do?</h3>
                <p>
                  I have a strong interest in Java development, Generative AI applications, and web development. I enjoy solving complex problems, learning new technologies, and building projects that create meaningful impact.
                </p>
                <div className="interests">
                  <span>💻 Software Development</span>
                  <span>🤖 Artificial Intelligence</span>
                  <span>🚀 Open Source</span>
                  <span>📱 Web Technologies</span>
                </div>
              </div>
              <div className="education-card">
                <h3><FiBookOpen /> Education</h3>
                <div className="edu-item">
                  <h4>B.Tech Computer Science</h4>
                  <p>United College of Engineering and Research</p>
                  <p>CGPA: 7.8/10 | 2023-2027</p>
                </div>
                <div className="edu-item">
                  <h4>Class 12</h4>
                  <p>Percentage: 83.2%</p>
                </div>
                <div className="edu-item">
                  <h4>Class 10</h4>
                  <p>Percentage: 91.67%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div 
                  key={idx} 
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{category}</h3>
                  <div className="skill-items">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="project-icon"><FiCode /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
  <a href={project.github} target="_blank" rel="noopener noreferrer"><FiGithub /> Code</a>
  {project.live && project.live !== "#" && (
    <a href={project.live} target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
  )}
</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Internships & Training</h2>
            <div className="experience-timeline">
              {internships.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  className="exp-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="exp-year">{exp.duration}</div>
                  <div className="exp-content">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, idx) => (
                <motion.div 
                  key={idx} 
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FiAward className="achievement-icon" />
                  <p>{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's Connect!</h3>
                <p>I'm actively looking for internships and full-time opportunities. Feel free to reach out!</p>
                <div className="contact-details">
                  <p>                  <a href="mailto:shrutimishra5020@gmail.com"><FiMail /> Email</a>
 📧 shrutimishra5020@gmail.com</p> 
                  <p><a href="https://www.linkedin.com/in/shruti-mishra-5020s"><FiLinkedin /> LinkedIn</a></p>
                 <p> <a href="https://github.com/shrutim2804"><FiGithub /> GitHub</a></p>

                  <p>📍 India</p>
                </div>
                <div className="social-links">
                  <a href="https://github.com/shrutim2804"><FiGithub /> GitHub</a>
                  <a href="https://www.linkedin.com/in/shruti-mishra-5020s"><FiLinkedin /> LinkedIn</a>
                  <a href="mailto:shrutimishra5020@gmail.com"><FiMail /> Email</a>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Shruti Mishra. All rights reserved.</p>
          <p>Built with ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
