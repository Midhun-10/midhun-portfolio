import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        Midhun <em>M.</em>
      </div>
      <p className="footer__copy">© 2025 Midhun M &middot; Built with React + Vite</p>
      <div className="footer__links">
        <a href="https://github.com/Midhun-10" target="_blank" rel="noreferrer">
          <FaGithub size={16} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/midhun10/" target="_blank" rel="noreferrer">
          <FaLinkedin size={16} /> LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
