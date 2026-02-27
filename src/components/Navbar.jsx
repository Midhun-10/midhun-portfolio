import React, { useState, useEffect } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleResume = () => {
    const link = document.createElement('a')
    link.href = './Midhun_Resume.pdf'
    link.download = 'Midhun_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        Midhun <em>M.</em>
      </div>

      <div className="navbar__links">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="navbar__resume-btn" onClick={handleResume}>
        <FiDownload size={13} />
        Resume
      </button>

      <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__mobile-link ${active === link.id ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="navbar__resume-btn navbar__resume-btn--mobile" onClick={handleResume}>
            <FiDownload size={13} /> Resume
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
