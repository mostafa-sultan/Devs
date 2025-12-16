import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'NodeJS', level: 85 },
    { name: 'ReactJS', level: 85 },
    { name: 'React Native', level: 90 },
    { name: 'Express JS', level: 85 },
    { name: 'Data Structures & Algorithms', level: 80 },
    { name: 'Problem Solving', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'RESTful API', level: 85 },
    { name: 'Android SDK', level: 75 },
  ];

  const experiences = [
    {
      title: 'Mobile Developer with React Native',
      company: 'Ejada',
      period: 'Jul 2024 – Present',
      type: 'Full Time',
      description: [
        'Develop and maintain the "Qaema" ERP application for AL-Rajhi Bank using React Native, ensuring smooth functionality, fixing bugs, and enhancing modules for an optimized user experience.',
        'Integrate third-party APIs to streamline data flow and functionality',
        'Manage deployment processes on Google Play and the App Store, ensuring compliance with platform guidelines and timely releases.',
        'Provide a user-friendly, mobile-first interface to streamline workflows',
        'Ensure seamless mobile performance, along with managing app updates and releases, contributing to system reliability and user satisfaction.'
      ],
      techStack: ['React Native', 'JavaScript', 'Android', 'iOS', 'API Integration', 'Figma', 'Google Play', 'App Store']
    },
    {
      title: 'Mobile Developer with React Native',
      company: 'Tjaara',
      period: 'Jan 2024 – Jul 2024',
      type: 'Full Time',
      description: [
        'Develop and maintain user-friendly eCommerce storefronts on a no-code platform',
        'Design and build reusable React Native components',
        'Enable traders to establish their online presence, expand their reach, and drive business growth.',
        'Deliver seamless and engaging mobile shopping experiences, fostering customer satisfaction and loyalty.'
      ],
      techStack: ['React Native', 'JavaScript', 'Android', 'iOS', 'Figma', 'Cross-platform']
    },
    {
      title: 'Mobile Developer with React Native',
      company: 'Fast Go',
      period: 'Feb 2024 - Feb 2024',
      type: 'Freelancer',
      description: [
        'Enhanced FastGo\'s mobile app through comprehensive testing and optimization.',
        'Resolved request delivery issues, ensuring seamless user experience.',
        'Boosted app performance, improving speed and responsiveness.'
      ],
      techStack: ['React Native', 'JavaScript', 'Android', 'iOS']
    },
    {
      title: 'Data Entry Specialist and Computer Hardware Technician',
      company: 'Egypt Army',
      period: 'Oct 2022 - Dec 2023',
      type: 'Full Time',
      description: [
        'Maintaining computer systems, and troubleshooting network issues.'
      ],
      techStack: []
    },
    {
      title: 'Full Stack JavaScript',
      company: 'Finitic',
      period: 'Mar 2022 - Aug 2022',
      type: 'Full Time',
      description: [
        'Collaborated with a cross-functional team to design, develop, and implement a robust and scalable forex trading platform using agile methodologies.',
        'Owned the development and delivery of key platform features, including user permissions management and customer order monitoring and execution systems.',
        'Passionate about fintech and financial technologies.',
        'Expertise in full-stack development using Node.js, Express, Reactjs, Redux, Saga, MongoDB',
        'Agile development methodologies experience.',
        'Excellent problem-solving and analytical skills.'
      ],
      techStack: ['Reactjs', 'Node.js', 'Express', 'Redux', 'Saga', 'MongoDB', 'Jest']
    },
    {
      title: 'Full Stack JavaScript',
      company: 'Phantom Technologies',
      period: 'Feb 2021 - Aug 2021',
      type: 'Full Time',
      description: [
        'Developed and maintained automated bots using JavaScript techniques to extract product information, pricing, and availability from e-commerce websites.',
        'Implemented price comparison algorithms to identify the best deals for customers.',
        'Automated the purchase process using e-commerce APIs and Playwright automation tools.',
        'Experience with e-commerce platforms and APIs.',
        'Strong analytical and problem-solving skills.'
      ],
      techStack: ['Node.js', 'Express', 'Java', 'Okhttp', 'Web Scraping', 'MongoDB', 'Playwright', 'Automation', 'Reactjs', 'Redux']
    }
  ];

  const projects = [
    {
      title: 'Qaema – قائمه',
      description: 'Qaema is a comprehensive accounting software designed to streamline financial management for businesses of all sizes. Whether you are a small business owner, freelancer, or large enterprise, Qaema provides the tools you need to manage your finances efficiently in one place.',
      techStack: ['React Native', 'Redux', 'Java Spring', 'SQL'],
      links: [
        { name: 'App Store', url: 'https://apps.apple.com/eg/app/qaema-accounting-system/id6544789609', icon: 'fab fa-apple' }
      ]
    },
    {
      title: 'FastGo',
      description: 'FastGo is Turkey\'s innovative electric vehicle charging station network.',
      techStack: ['React Native', 'Redux', 'Nodejs', 'MongoDB'],
      links: [
        { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=tr.com.fastgo.app', icon: 'fab fa-google-play' }
      ]
    },
    {
      title: 'Face Recognition System NodeJS',
      description: 'Implementation of face recognition server as Rest Api by tensorflow.js and face Api',
      techStack: ['Node.js', 'TensorFlow.js', 'Face API', 'REST API']
    },
    {
      title: 'Alzheimer AI Assistant',
      description: 'Our project consists of smart glasses that contain a camera and headphones. The people close to the patient are stored in the application, and when it is difficult to identify the person, the camera in the glasses takes a picture, identifies the person and tells him. (Awarded first place for all graduate projects)',
      techStack: ['React Native', 'Redux', 'Nodejs', 'MongoDB', 'TensorFlow.js']
    }
  ];

  const education = [
    {
      degree: 'B.S.E. in Computer Science Engineering with Minor in Mathematics',
      institution: 'Menoufia University',
      period: '2018 – 2022',
      field: 'Computer Science'
    },
    {
      degree: 'Summer Training Certificate',
      institution: 'ITI - Menoufia Branch',
      period: 'Aug 2020 – Sep 2020',
      description: 'Summer training in ITI Menoufia Branch, completed 120 credit hours (JavaScript, PHP, Laravel, HTML, CSS)'
    }
  ];

  const volunteering = [
    {
      title: 'Development Team in Compiler Community',
      description: 'Student Activity in my College. Working to help students improve their skills and learn technologies.'
    },
    {
      title: 'Handmade team Alef Community',
      description: 'Student Activity in my College. Make fun events and trips and help desk for students.'
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
                <h1 className="cv-name">Mustafa Sophy Sultan</h1>
                <h3 className="cv-title">Mobile Developer & Full Stack JavaScript Developer</h3>
                <div className="cv-contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:mostafasultandev@gmail.com">mostafasultandev@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+201066918430">+201066918430</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Cairo, Egypt</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/mostafa-sultan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/mostafa-sultan/" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-google-play"></i>
                    <a href="https://play.google.com/store/apps/developer?id=neotek&hl=ar" target="_blank" rel="noopener noreferrer">Google Play</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-apple"></i>
                    <a href="https://apps.apple.com/eg/app/qaema-accounting-system/id6544789609" target="_blank" rel="noopener noreferrer">App Store</a>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-npm"></i>
                    <a href="https://www.npmjs.com/~mostafa-sultan" target="_blank" rel="noopener noreferrer">NPM Packages</a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-blog"></i>
                    <span>Blog</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-youtube"></i>
                    <a href="https://www.youtube.com/@mostafa-sultan7" target="_blank" rel="noopener noreferrer">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <section className="cv-section summary-section">
            <h2 className="section-title">
              <i className="fas fa-user"></i> Professional Summary
            </h2>
            <div className="section-content">
              <p className="summary-text">
                I am a software developer specialized in web and mobile application development using JavaScript. 
                I believe in the power of technology to transform ideas into practical solutions. I contribute to the tech community 
                by publishing NPM packages, apps on Google Play and App Store, technical articles on my blog, and educational tech videos on my YouTube channel.
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
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-company">{exp.company}</span>
                      {exp.type && <span className="experience-type">{exp.type}</span>}
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="experience-description-list">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="experience-description">{exp.description}</p>
                  )}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="tech-stack">
                      {/* <strong><i className="fas fa-tools"></i> Tech Stack: </strong> */}
                      {exp.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
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
                      {project.links && project.links.length > 0 && (
                        <div className="project-links">
                          {project.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <i className={link.icon}></i>
                              <span>{link.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
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
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.field && <p className="education-field">{edu.field}</p>}
                  <p className="education-period">{edu.period}</p>
                  {edu.description && <p className="education-description">{edu.description}</p>}
                  {index < education.length - 1 && <hr className="education-divider" />}
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering Section */}
          <section className="cv-section">
            <h2 className="section-title">
              <i className="fas fa-hands-helping"></i> Volunteering
            </h2>
            <div className="section-content">
              {volunteering.map((vol, index) => (
                <div key={index} className="volunteering-item">
                  <h4 className="volunteering-title">{vol.title}</h4>
                  <p className="volunteering-description">{vol.description}</p>
                  {index < volunteering.length - 1 && <hr className="volunteering-divider" />}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
