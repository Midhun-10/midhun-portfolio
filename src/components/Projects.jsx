import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiFileText, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import useInView from '../hooks/useInView'
import './Projects.css'

const projects = [
  {
    index: '01',
    title: 'Bus Reservation System',
    type: 'Backend + Frontend',
    desc: 'Web-based reservation system enabling users to search available buses, select seats, and complete bookings through a dynamic interactive interface.',
    bullets: [
      'Frontend: Dynamic web pages using JSP for route search, seat selection and booking confirmation',
      'Backend: Core business logic using Java Servlets to handle user requests and booking operations',
      'ORM: Hibernate framework for efficient object-relational mapping and database operations',
      'Database: MySQL to store user details, bus schedules, seat availability and booking records',
      'Features: User authentication, bus search, seat tracking, booking management and history retrieval',
      'Session Management: User sessions to maintain login state and secure booking operations',
    ],
    tags: ['Servlets', 'Hibernate', 'JSP', 'MySQL'],
    link: 'https://midhun-10.github.io/BusReservationSystem/',
    linkLabel: 'View Project',
    linkIcon: 'github',
  },
  {
    index: '02',
    title: 'Nalam Construction',
    type: 'Static Website',
    desc: 'Responsive static company website showcasing services, completed projects and company information through a clean, mobile-friendly interface.',
    bullets: [
      'Built a fully responsive layout ensuring compatibility across desktop and mobile devices',
      'Structured semantic HTML for better accessibility and content organization',
      'Designed custom CSS styling for modern layout and visual consistency',
      'Created dedicated sections for services, project gallery and contact information',
      'Deployed and hosted via GitHub Pages using Git for version control',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    link: 'https://midhun-10.github.io/Nalam-Construction/',
    linkLabel: 'Live Demo',
    linkIcon: 'external',
  },
  {
    index: '03',
    title: 'Natural Composite Pipes',
    type: 'Research Project',
    desc: 'Engineered short pipes using natural hemp/jute fibres and resin as part of a mechanical engineering prototype study.',
    bullets: [
      'Designed the manufacturing process for producing short composite pipes using hemp and jute fibres',
      'Fabricated prototypes using natural fibre reinforced resin composite material',
      'Conducted mechanical stress testing to evaluate structural integrity and durability',
      'Validated performance specifications against engineering benchmarks',
      'Documented test results and analysis as part of final year project research',
    ],
    tags: ['Research', 'Prototyping', 'Mechanical Testing', 'Composite Materials'],
    link: null,
    linkLabel: 'Research Project',
    linkIcon: 'file',
  },
]

const ProjectCard = ({ project, index, inView }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`project__card fade-in ${inView ? 'visible' : ''} fade-in-delay-${index + 1}`}>
      <div className="project__card-bar" />
      <div className="project__card-body">
        <div className="project__index">{project.index}</div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.desc}</p>

        <button
          className="project__expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <><FiChevronUp size={13} /> Hide details</> : <><FiChevronDown size={13} /> Show details</>}
        </button>

        {expanded && (
          <ul className="project__bullets">
            {project.bullets.map((b, i) => (
              <li key={i} className="project__bullet">
                <span className="project__bullet-dot" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="project__tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project__tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="project__card-footer">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="project__link">
            {project.linkIcon === 'github' ? <FaGithub size={13} /> : <FiArrowUpRight size={13} />}
            {project.linkLabel}
          </a>
        ) : (
          <span className="project__link project__link--muted">
            <FiFileText size={13} /> {project.linkLabel}
          </span>
        )}
        <span className="project__type">{project.type}</span>
      </div>
    </div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section section--bg" ref={ref}>
      <p className="sec-tag">Projects</p>
      <h2 className="sec-title">Things I've <em>built</em></h2>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}

export default Projects
