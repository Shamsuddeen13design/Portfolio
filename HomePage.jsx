import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <main className="home-page">
      
      <section className="hero">
        <div className="hero-content">
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
          <h1>ABUBAKAR MUHAMMAD SHAMSUDDEEN</h1>
          <p className="tagline">Front-End Developer</p>
          <p className="description">Welcome to My Portfolio Website</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
      </section>

      
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate Front-End Developer with a focus on creating beautiful, 
            responsive, and user-friendly web applications. I love turning ideas into 
            interactive digital experiences.I am currently in my final year studying Computer Science at ABU Zaria.
          </p>
        </div>
      </section>

      
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
             
              <h3>Calculator</h3>
              <p>A simple web-based calculator application built with Javascript</p>
            </div>
            <div className="project-card">
              
              <h3>Portfolio</h3>
              <p>A personal interactive personal portfolio website built with React</p>
            </div>
            <div className="project-card">
              
              <h3>Homes</h3>
              <p>A real estate listing website showcasing various properties built with React</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">Git</div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out for any inquiries or collaboration opportunities</p>
            <a href="mailto:mshamsuddeen300@gmail.com" className="btn btn-primary">Send me an Email</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage