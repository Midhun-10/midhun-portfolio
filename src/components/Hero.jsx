import React, { useState, useEffect } from 'react'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import './Hero.css'

const WORDS = [
  'Full Stack Java Developer',
  'Backend Engineer (Spring Boot)',
  'Problem Solver & System Builder',
]

const Hero = () => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = WORDS[wordIndex]
    const speed = isDeleting ? 55 : 110

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200)
          return
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex(prev => (prev + 1) % WORDS.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])

  const handleResume = () => {
    const link = document.createElement('a')
    link.href = './Midhun_Resume.pdf'
    link.download = 'Midhun_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__left">
        <div className="hero__eyebrow">
          <span className="hero__pulse" />
          Open to Opportunities
        </div>

        <h1 className="hero__name">
          Java Full Stack<br />
          <span>Developer.</span>
        </h1>

        <p className="hero__role">Fresh Graduate &middot; Chennai, India</p>

        <div className="hero__typing">
          I am&nbsp;<span className="hero__typed">{text}</span>
          <span className="hero__cursor" />
        </div>

        <p className="hero__bio">
          B.E. Mechanical Engineering graduate with comprehensive full-stack Java training.
          I build clean, functional web applications using Spring Boot, Hibernate &amp; React.js.
          Passionate about solving problems — 200+ LeetCode solutions and counting.
        </p>

        <div className="hero__btns">
          <button className="hero__btn-primary" onClick={handleResume}>
            <FiDownload size={14} /> Download Resume
          </button>
          <a href="#projects" className="hero__btn-outline">
            View Projects <FiArrowRight size={13} />
          </a>
        </div>

        <div className="hero__meta">
          <a href="https://github.com/Midhun-10" target="_blank" rel="noreferrer" className="hero__meta-item">
            <FaGithub size={13} /> github.com/Midhun-10
          </a>
          <a href="https://www.linkedin.com/in/midhun10/" target="_blank" rel="noreferrer" className="hero__meta-item">
            <FaLinkedin size={13} /> linkedin.com/in/midhun10
          </a>
          <span className="hero__meta-item">
            <FaLocationDot size={12} /> Chennai, India
          </span>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__stat-card">
          <div className="hero__stat-num">200+</div>
          <div className="hero__stat-label">LeetCode Solved</div>
        </div>
        <div className="hero__photo-frame">
          <img src="./profile.png" alt="Midhun M" />
        </div>
        <div className="hero__avail-badge">
          <span className="hero__pulse" /> Available for hire
        </div>
      </div>
    </section>
  )
}

export default Hero
