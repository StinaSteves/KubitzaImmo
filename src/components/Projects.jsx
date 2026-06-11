
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import projectsData from './projectsData'
import useScrollReveal from './useScrollReveal'

function ProjectGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const lastIndex = images.length - 1

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? lastIndex : currentIndex - 1,
    )
  }

  const showNextImage = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === lastIndex ? 0 : currentIndex + 1,
    )
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPreviousImage()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNextImage()
    }
  }

  return (
    <div
      className='projectGallery'
      role='region'
      aria-label={`Bildergalerie ${title}`}
      tabIndex='0'
      onKeyDown={handleKeyDown}
    >
      <img
        className='projectGalleryImage'
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
      />

      <button
        className='projectGalleryArrow projectGalleryArrowPrevious'
        type='button'
        aria-label='Vorheriges Bild anzeigen'
        onClick={showPreviousImage}
      >
        <span aria-hidden='true'>&larr;</span>
      </button>
      <button
        className='projectGalleryArrow projectGalleryArrowNext'
        type='button'
        aria-label='Nächstes Bild anzeigen'
        onClick={showNextImage}
      >
        <span aria-hidden='true'>&rarr;</span>
      </button>

      <div
        className='projectGalleryDots'
        role='group'
        aria-label='Bild auswählen'
      >
        {images.map((image, index) => (
          <button
            className={`projectGalleryDot ${index === activeIndex ? 'active' : ''}`}
            type='button'
            key={image.src}
            aria-label={`Bild ${index + 1} von ${images.length} anzeigen`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <span className='visuallyHidden' aria-live='polite'>
        Bild {activeIndex + 1} von {images.length}
      </span>
    </div>
  )
}

function Projects({ projects = projectsData }) {
  const { sectionRef, isVisible } = useScrollReveal()

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
                <div className='currentProjectContent'>
                  {title && <h2>{title}</h2>}
                  {project.description && (
                    <p>
                      {project.description.map((line, lineIndex) => (
                        <span key={line}>
                          {line}
                          {lineIndex < project.description.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  )}
                </div>

                {project.galleryImages?.length > 0 ? (
                  <ProjectGallery images={project.galleryImages} title={title} />
                ) : project.image ? (
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
                ) : null}

                <Link
                  className='projectButton projectButtonLink'
                  to={`/aktuelle-projekte/${project.slug}`}
                >
                  zum Projekt
                </Link>
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
