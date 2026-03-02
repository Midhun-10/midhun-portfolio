import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import useInView from '../hooks/useInView'
import './Education.css'

const Education = () => {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section section--bg" ref={ref}>
      <p className="sec-tag">Education</p>
      <h2 className="sec-title">Academic <em>background</em></h2>

      <div className={`edu__card fade-in ${inView ? 'visible' : ''}`}>
        <div className="edu__card-top">
          <div>
            <p className="edu__type">Bachelor of Engineering</p>
            <h3 className="edu__degree">Mechanical Engineering</h3>
          </div>
          <div className="edu__year-badge">2021 – 2025</div>
        </div>
        <div className="edu__card-bottom">
          <div>
            <p className="edu__school">S.A. Engineering College</p>
            <p className="edu__location">
              <FiMapPin size={11} /> Chennai, Tamil Nadu
            </p>
          </div>
          <div className="edu__cgpa">
            <div className="edu__cgpa-num">7.28</div>
            <div className="edu__cgpa-label">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
