import { useState } from 'react'
import '../App.css'
import reverenzData from './data'
import useScrollReveal from './useScrollReveal'

function Reverenzen({ projects = reverenzData }) {
  const { sectionRef, isVisible } = useScrollReveal()
  const [visibleCount, setVisibleCount] = useState(6)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const visibleProjects = projects.slice(0, visibleCount)
  const hasMoreThanSixProjects = projects.length > 6

  const handleVisibleProjects = () => {
    if (isCollapsing) {
      setVisibleCount(6)
      setIsCollapsing(false)
      return
    }

    const nextCount = Math.min(projects.length, visibleCount + 3)

    setVisibleCount(nextCount)
    setIsCollapsing(nextCount === projects.length)
  }

  return (
    <section
      id='referenzen'
      className={`projects ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h1 className='projectsTitle'>Referenzen</h1>

      <div className='projectsGrid' id='referencesGrid'>
        {visibleProjects.map((project, index) => {
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
              </div>
            </article>
          )
        })}
      </div>

      {hasMoreThanSixProjects && (
        <div className='referencesActions'>
          <button
            className='projectButton referencesToggle'
            type='button'
            onClick={handleVisibleProjects}
            aria-controls='referencesGrid'
            aria-expanded={visibleCount > 6}
          >
            {isCollapsing ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Reverenzen
