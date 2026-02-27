import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import useInView from '../hooks/useInView'
import './Experience.css'

const bullets = [
  'Conducted systematic testing and evaluation of product samples in accordance with established BIS quality and safety standards.',
  'Performed various laboratory-based and procedural tests to verify product compliance with national certification requirements.',
  'Analyzed test observations, documented detailed reports and ensured accurate recording of results for quality assessment.',
  'Assisted senior technical officers in validating products prior to the issuance of BIS quality certification.',
  'Gained hands-on exposure to quality assurance processes, regulatory compliance frameworks and standardized product evaluation methodologies.',
  'Developed strong analytical thinking, attention to detail and documentation skills while working in a structured government regulatory environment.',
]

const Experience = () => {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section section--white" ref={ref}>
      <p className="sec-tag">Experience</p>
      <h2 className="sec-title">Where I've <em>worked</em></h2>

      <div className="exp__timeline" ref={ref}>
        <div className={`exp__item fade-in ${inView ? 'visible' : ''}`}>
          <div className="exp__dot" />
          <div className="exp__card">
            <div className="exp__card-header">
              <div>
                <h3 className="exp__role">Testing Intern</h3>
                <p className="exp__company">Bureau of Indian Standards (BIS) &middot; Chennai, India</p>
              </div>
              <span className="exp__badge">Jan 2025 – Mar 2025</span>
            </div>

            <ul className="exp__bullets">
              {bullets.map((b, i) => (
                <li key={i} className="exp__bullet">
                  <FiCheckCircle className="exp__bullet-icon" size={14} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
