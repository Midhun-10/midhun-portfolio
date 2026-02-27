import React from 'react'
import { FaJava, FaGithub } from 'react-icons/fa'
import { FiCode } from 'react-icons/fi'
import useInView from '../hooks/useInView'
import './Certifications.css'

const certs = [
  {
    icon: <FaJava />,
    name: 'Java Full Stack Development',
    org: 'Comprehensive enterprise Java training program',
    chip: 'Certified',
  },
  {
    icon: <FiCode />,
    name: 'LeetCode — 200+ Problems Solved',
    org: 'Data Structures & Algorithms practice',
    chip: '200+ Solved',
  },
  {
    icon: <FaGithub />,
    name: 'GitHub Open Source Contributor',
    org: 'Active contributor with multiple full-stack projects',
    chip: 'Active',
  },
]

const Certifications = () => {
  const [ref, inView] = useInView()

  return (
    <section id="certifications" className="section section--white" ref={ref}>
      <p className="sec-tag">Certifications &amp; Achievements</p>
      <h2 className="sec-title">Recognition &amp; <em>milestones</em></h2>

      <div className="cert__grid">
        {certs.map((cert, i) => (
          <div
            key={i}
            className={`cert__card fade-in ${inView ? 'visible' : ''} fade-in-delay-${i + 1}`}
          >
            <div className="cert__icon">{cert.icon}</div>
            <div className="cert__name">{cert.name}</div>
            <div className="cert__org">{cert.org}</div>
            <div className="cert__chip">{cert.chip}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
