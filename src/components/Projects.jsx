
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import projectsData from './projectsData'

function Projects({ projects = projectsData }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.25,
      },
    )

    const resetAnimationAtTop = () => {
      if (window.scrollY <= 5) {
        setIsVisible(false)
      }
    }

    observer.observe(section)
    window.addEventListener('scroll', resetAnimationAtTop, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', resetAnimationAtTop)
    }
  }, [])

  return (
    <section
      id='projekte'
      className={`projects ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h1 className='projectsTitle'>Aktuelle Projekte</h1>

      <div className='currentProjectsList'>
        {projects.map((project, index) => {
          const title = project.title || project.headline || project.heading

          return (
            <div className='currentProjectItem' key={`${title}-${index}`}>
              <article
                className='currentProjectCard'
                style={{ transitionDelay: isVisible ? `${0.35 + index * 0.16}s` : '0s' }}
              >
                {project.image && (
                  <div className='currentProjectMedia'>
                    <img
                      className='currentProjectImage'
                      src={project.image}
                      alt={project.alt || title || 'Projektbild'}
                    />
                    {project.hoverImage && (
                      <img
                        className='currentProjectHoverImage'
                        src={project.hoverImage}
                        alt=''
                        aria-hidden='true'
                      />
                    )}
                  </div>
                )}

                <div className='currentProjectContent'>
                  {title && <h2>{title}</h2>}
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    <br />
                    Sed diam nonumy eirmod tempor invidunt ut labore.
                  </p>
                  <Link
                    className='projectButton projectButtonLink'
                    to={`/aktuelle-projekte/${project.slug}`}
                  >
                    zum Projekt
                  </Link>
                </div>
              </article>
              {index < projects.length - 1 && (
                <div
                  className='currentProjectDivider'
                  style={{ transitionDelay: isVisible ? `${0.55 + index * 0.16}s` : '0s' }}
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
