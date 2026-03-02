import React from 'react'
import {
  FaJava,FaCode, FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiEclipseide
} from 'react-icons/si'
import { FiTerminal, FiMonitor, FiServer, FiTool, FiDatabase } from 'react-icons/fi'
import { TbApi } from 'react-icons/tb'
import useInView from '../hooks/useInView'
import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    icon: <FiTerminal />,
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'SQL', icon: <FiDatabase /> },
    ],
  },
  {
    title: 'Frontend',
    icon: <FiMonitor />,
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JSP', icon: <FiMonitor /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Hibernate', icon: <SiHibernate /> },
      { name: 'Servlets', icon: <FiServer /> },
      { name: 'JDBC', icon: <FiDatabase /> },
      { name: 'REST APIs', icon: <TbApi /> },
      { name: 'MVC', icon: <FiServer /> },
    ],
  },
  {
    title: 'Tools & Database',
    icon: <FiTool />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Maven', icon: <FiTool /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Eclipse', icon: <SiEclipseide/> }
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section section--white" ref={ref}>
      <p className="sec-tag">Technical Skills</p>
      <h2 className="sec-title">What I <em>work</em> with</h2>

      <div className="skills__grid">
        {skillGroups.map((group, gi) => (
          <div
            key={gi}
            className={`skills__group fade-in ${inView ? 'visible' : ''} fade-in-delay-${gi % 3 + 1}`}
          >
            <div className="skills__group-head">
              <span className="skills__group-icon">{group.icon}</span>
              {group.title}
            </div>
            <div className="skills__pills">
              {group.skills.map((skill, si) => (
                <span key={si} className="skills__pill">
                  <span className="skills__pill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
