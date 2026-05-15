
import { useEffect, useRef, useState } from 'react'
import '../App.css'
import reverenzData from './data'

function Reverenzen({ projects = reverenzData }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id='projekte'
      className={`projects ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h1 className='projectsTitle'>Reverenzen</h1>

      <div className='projectsGrid'>
        {projects.map((project, index) => {
          const title = project.title || project.headline || project.heading

          return (
            <article
              className='projectCard'
              key={`${title}-${index}`}
              style={{ transitionDelay: isVisible ? `${0.35 + index * 0.16}s` : '0s' }}
            >
              {project.image && (
                <img
                  className='projectImage'
                  src={project.image}
                  alt={project.alt || title || 'Projektbild'}
                />
              )}

              <div className='projectContent'>
                {title && <h2>{title}</h2>}
                {project.text && <p>{project.text}</p>}
                <button className='projectButton' type='button'>
                  mehr lesen
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Reverenzen
