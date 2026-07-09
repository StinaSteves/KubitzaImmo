import { useEffect, useState } from 'react'
import '../App.css'
import reverenzData from './data'
import useScrollReveal from './useScrollReveal'

const twoColumnQuery = '(min-width: 601px) and (max-width: 900px)'

function Reverenzen({ projects = reverenzData }) {
  const { sectionRef, isVisible } = useScrollReveal()
  const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(() =>
    window.matchMedia(twoColumnQuery).matches,
  )
  const initialVisibleCount = isTwoColumnLayout ? 4 : 6
  const revealStep = isTwoColumnLayout ? 2 : 3
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const visibleProjects = projects.slice(0, visibleCount)
  const hasHiddenProjects = projects.length > initialVisibleCount

  useEffect(() => {
    const mediaQuery = window.matchMedia(twoColumnQuery)
    const handleLayoutChange = (event) => {
      const nextInitialCount = event.matches ? 4 : 6

      setIsTwoColumnLayout(event.matches)
      setVisibleCount(nextInitialCount)
      setIsCollapsing(false)
    }

    mediaQuery.addEventListener('change', handleLayoutChange)

    return () => mediaQuery.removeEventListener('change', handleLayoutChange)
  }, [])

  const handleVisibleProjects = () => {
    if (isCollapsing) {
      setVisibleCount(initialVisibleCount)
      setIsCollapsing(false)
      return
    }

    const nextCount = Math.min(projects.length, visibleCount + revealStep)

    setVisibleCount(nextCount)
    setIsCollapsing(nextCount === projects.length)
  }

  return (
    <section
      id='referenzen'
      className={`projects ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h2 className='projectsTitle'>Referenzen</h2>
      <p className='projectsIntro'>Auszug aus unseren Projekten der letzten zehn Jahre</p>

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
                  loading='lazy'
                  decoding='async'
                />
              )}

              <div className='projectContent'>
                {title && <h3>{title}</h3>}
                {project.text && <p>{project.text}</p>}
              </div>
            </article>
          )
        })}
      </div>

      {hasHiddenProjects && (
        <div className='referencesActions'>
          <button
            className='projectButton referencesToggle'
            type='button'
            onClick={handleVisibleProjects}
            aria-controls='referencesGrid'
            aria-expanded={visibleCount > initialVisibleCount}
          >
            {isCollapsing ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Reverenzen
