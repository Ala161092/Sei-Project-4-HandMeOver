import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div className='contact-wrapper'>
      <div className='about-me-container'>
        <h1>about me.</h1>
        <p>
          I have always had a love for Handbags, so what better way is there to
          practice my coding skills, than by building a site all about bags.
        </p>
        <p>
          I hope you have enjoyed browsing through the site and maybe even had
          some inspiration, for that all important
          <br />
          <span> Which bag should I buy next?!</span>
        </p>
        <h3>This Project was built using:</h3>
        <div className='skills-container'>
          <i className='devicon-html5-plain-wordmark'></i>
          <i className='devicon-css3-plain-wordmark'></i>
          <i className='devicon-sass-original'></i>
          <i className='devicon-javascript-plain'></i>
          <i className='devicon-python-plain-wordmark'></i>
          <i className='devicon-nodejs-plain'></i>
          <i className='devicon-react-original-wordmark'></i>
          <i className='devicon-postgresql-plain-wordmark'></i>
          <i className='devicon-django-plain'></i>
        </div>
      </div>
      <div className='contact-container'>
        <h1>contact me.</h1>
        <a href='https://github.com/Ala161092'>
          <FaGithub />
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/ala-rahman-879849222/'>
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default About
