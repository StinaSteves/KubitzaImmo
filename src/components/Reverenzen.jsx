
import '../App.css'
import reverenzData from './data'
import useScrollReveal from './useScrollReveal'

function Reverenzen({ projects = reverenzData }) {
  const { sectionRef, isVisible } = useScrollReveal()

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
