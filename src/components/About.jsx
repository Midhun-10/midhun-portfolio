import React from 'react'
import { FiBookOpen, FiStar, FiCode, FiBriefcase } from 'react-icons/fi'
import useInView from '../hooks/useInView'
import './About.css'

const highlights = [
  { icon: <FiBookOpen />, label: 'Degree', value: 'B.E. Mechanical Engg.' },
  { icon: <FiStar />, label: 'CGPA', value: '7.28 / 10' },
  { icon: <FiCode />, label: 'LeetCode', value: '200+ Problems' },
  { icon: <FiBriefcase />, label: 'Internship', value: 'BIS — 3 months' },
]

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section section--bg" ref={ref}>
      <div className={`about__inner fade-in ${inView ? 'visible' : ''}`}>
        <div>
          <p className="sec-tag">About Me</p>
          <h2 className="sec-title">
            A developer who<br /><em>builds</em> things.
          </h2>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              Hi, I'm <strong>Midhun</strong> — a passionate and detail-oriented developer who
              enjoys building clean, simple, and user-friendly web applications. I love turning
              ideas into real products that solve problems and create smooth experiences for users.
            </p>
            <p>
              My journey into technology started with curiosity and a strong desire to understand
              how things work. Over time, through consistent learning and practice, I've developed
              solid skills in problem-solving, logical thinking, and writing clean, maintainable
              code. I believe good software is not just about functionality — it's about clarity,
              performance, and user experience.
            </p>
            <p>
              I enjoy working on both frontend design and backend logic, and I find satisfaction
              in connecting everything into a complete, well-functioning system. My goal is to
              become a strong, reliable software engineer who creates meaningful digital solutions
              that make people's lives easier and more efficient.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`about__card fade-in ${inView ? 'visible' : ''} fade-in-delay-${i % 3 + 1}`}
              >
                <div className="about__card-icon">{h.icon}</div>
                <div>
                  <div className="about__card-label">{h.label}</div>
                  <div className="about__card-value">{h.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
