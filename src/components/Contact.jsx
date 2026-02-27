import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import './Contact.css'

const contactItems = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'm.midhun29102003@gmail.com',
    href: 'mailto:m.midhun29102003@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 8072 8065 14',
    href: 'tel:+918072806514',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
  },
]

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Midhun-10', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/midhun10/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:m.midhun29102003@gmail.com', label: 'Email' },
]

const Contact = () => {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="section section--bg" ref={ref}>
      <p className="sec-tag">Contact</p>
      <h2 className="sec-title">Get in <em>touch</em></h2>

      <div className={`contact__wrap fade-in ${inView ? 'visible' : ''}`}>
        <div className="contact__left">
          <p className="contact__intro">
            I'm currently looking for full-time opportunities as a Java Full Stack Developer.
            If you have a role, a project, or just want to connect — feel free to reach out directly.
          </p>

          <div className="contact__items">
            {contactItems.map((item, i) => (
              <div key={i} className="contact__item">
                <div className="contact__item-icon">{item.icon}</div>
                <div>
                  <div className="contact__item-label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="contact__item-value">{item.value}</a>
                  ) : (
                    <span className="contact__item-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact__socials">
            <p className="contact__socials-label">Find me on</p>
            <div className="contact__socials-row">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact__right">
          <h3 className="contact__right-title">
            Let's build something great together.
          </h3>
          <p className="contact__right-sub">
            Open to full-time roles and freelance projects. Quick learner, team player,
            ready to contribute from day one.
          </p>
          <div className="contact__stats">
            <div className="contact__stat">
              <div className="contact__stat-num">3+</div>
              <div className="contact__stat-label">Projects</div>
            </div>
            <div className="contact__stat">
              <div className="contact__stat-num">200+</div>
              <div className="contact__stat-label">LC Solved</div>
            </div>
            <div className="contact__stat">
              <div className="contact__stat-num">3mo</div>
              <div className="contact__stat-label">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
