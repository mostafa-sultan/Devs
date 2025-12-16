import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'React', level: 77 },
    { name: 'React Native', level: 70 },
    { name: 'Data Structures & Algorithms', level: 65 },
    { name: 'Databases (MongoDB, MySQL)', level: 65 },
    { name: 'Backend Development', level: 77 },
    { name: 'Frontend Development', level: 65 },
    { name: 'Python', level: 70 },
    { name: 'Java', level: 65 },
  ];

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Phantom Technologies',
      period: 'Current',
      description: 'Developed e-commerce automation bots and web scraping solutions. Built automated processes for internet-based e-commerce operations.',
      techStack: ['Node.js', 'Express', 'Java', 'OkHttp', 'Web Scraping', 'MongoDB', 'Playwright', 'Automation', 'React.js']
    },
    {
      title: 'Intern',
      company: 'MegaAnalytics',
      period: 'Previous',
      description: 'Implemented authentication systems with JWT, CRUD services, and admin panels for website management including posts and users management.',
      techStack: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'MongoDB']
    },
    {
      title: 'Summer Training',
      company: 'ITI - Menoufia Branch',
      period: 'Previous',
      description: 'Completed 120 credit hours training program covering web development fundamentals and backend technologies.',
      techStack: ['JavaScript', 'PHP', 'Laravel', 'HTML', 'CSS']
    }
  ];

  const projects = [
    {
      title: 'Email System (Node.js)',
      description: 'Full-featured email system similar to Gmail/Yahoo with authentication, email sending/receiving, file attachments, and email replies.',
      techStack: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Multer', 'Passport.js'],
      features: ['User Authentication & Registration', 'Send/Receive Emails', 'File Attachments', 'Download Attachments', 'Email Replies']
    },
    {
      title: 'Face Recognition System',
      description: 'RESTful API server for face recognition using TensorFlow and Face API.',
      techStack: ['Node.js', 'TensorFlow', 'Face API', 'REST API']
    },
    {
      title: 'NPM Packages',
      description: 'Published multiple NPM packages for the developer community.',
      techStack: ['JavaScript', 'Node.js']
    },
    {
      title: 'Mobile Applications',
      description: 'Published applications on Google Play Store.',
      techStack: ['React Native', 'Android']
    }
  ];

  return (
    <div className="cv-container">
      <Navbar />
      <div className="cv-wrapper">
        <div className="container">
          {/* Header Section */}
          <div className="cv-header">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-5 text-center mb-4 mb-md-0">
                <div className="profile-image-wrapper">
                  <img className="profile-image" src="/pic.jpg" alt="Mostafa Sultan" />
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <h1 className="cv-name">Mostafa Sultan</h1>
                <h3 className="cv-title">Full Stack Software Engineer</h3>
                <div className="cv-contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:mostafasolatn82@gmail.com">mostafasolatn82@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Cairo, Egypt</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/mostafa-sultan/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/mostafa-sultan/" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-google-play"></i>
                    <a href="https://play.google.com/store/apps/developer?id=Mostafa+Soltan" target="_blank" rel="noopener noreferrer">Google Play</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <section className="cv-section">
            <h2 className="section-title">
              <i className="fas fa-user"></i> Professional Summary
            </h2>
            <div className="section-content">
              <p className="summary-text">
                Full stack developer with over 1 year of professional experience specializing in JavaScript ecosystem. 
                Currently studying Computer Science at the Faculty of Computers and Information. Passionate about building 
                scalable web applications and automation solutions. Active contributor to open source, published NPM packages, 
                mobile applications on Google Play, technical articles, and educational tech videos on YouTube.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="cv-section">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i> Professional Experience
            </h2>
            <div className="section-content">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="tech-stack">
                    {exp.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  {index < experiences.length - 1 && <hr className="experience-divider" />}
                </div>
              ))}
            </div>
          </section>

          {/* Projects and Skills Grid */}
          <div className="cv-grid-section">
            {/* Projects Section */}
            <section className="cv-section cv-section-grid">
              <h2 className="section-title">
                <i className="fas fa-project-diagram"></i> Notable Projects
              </h2>
              <div className="section-content">
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <h4 className="project-title">{project.title}</h4>
                      <p className="project-description">{project.description}</p>
                      {project.features && (
                        <ul className="project-features">
                          {project.features.map((feature, fIndex) => (
                            <li key={fIndex}>{feature}</li>
                          ))}
                        </ul>
                      )}
                      <div className="project-tech-stack">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="cv-section cv-section-grid">
              <h2 className="section-title">
                <i className="fas fa-code"></i> Technical Skills
              </h2>
              <div className="section-content">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress skill-progress">
                      <div 
                        className="progress-bar skill-progress-bar" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      >
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Education Section */}
          <section className="cv-section">
            <h2 className="section-title">
              <i className="fas fa-graduation-cap"></i> Education
            </h2>
            <div className="section-content">
              <div className="education-item">
                <h3 className="education-degree">Bachelor of Computer Science</h3>
                <p className="education-institution">Faculty of Computers and Information</p>
                <p className="education-status">Currently Studying</p>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="cv-section">
            <h2 className="section-title">
              <i className="fas fa-trophy"></i> Achievements & Contributions
            </h2>
            <div className="section-content">
              <ul className="achievements-list">
                <li><i className="fas fa-check-circle"></i> Published NPM packages</li>
                <li><i className="fas fa-check-circle"></i> Published mobile applications on Google Play Store</li>
                <li><i className="fas fa-check-circle"></i> Published technical articles and blog posts</li>
                <li><i className="fas fa-check-circle"></i> Created educational tech content on YouTube</li>
                <li><i className="fas fa-check-circle"></i> Active open source contributor</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
