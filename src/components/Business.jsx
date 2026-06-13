import { useEffect, useRef, useState } from 'react'
import '../App.css'

const officeImage = `${import.meta.env.BASE_URL}immoPictures/buero-web.jpg`

const businessSlides = [
  {
    eyebrow: 'Unser Anspruch',
    title: 'Projekte für Menschen und ihren Alltag',
    text: 'Wir entwickeln und realisieren Immobilien, die sich an den Bedürfnissen der Menschen orientieren und nachhaltig Werte schaffen.',
  },
  {
    eyebrow: 'Erfahrung',
    title: 'Zusammenarbeit, die seit Jahrzehnten trägt',
    text: 'Seit über 20 Jahren vertrauen wir auf dieselben Handwerker. Eingespielte Abläufe, kurze Wege und ein gemeinsames Qualitätsverständnis schaffen eine verlässliche Umsetzung.',
  },
  {
    eyebrow: 'Haltung',
    title: 'Verlässlich und menschlich',
    text: 'Für uns zählen nicht nur Verbindlichkeit und Qualität, sondern auch die Menschen hinter einem Projekt. Deshalb setzen wir auf klare Absprachen und einen respektvollen Umgang.',
  },
  {
    eyebrow: 'Das Ergebnis',
    title: 'Immobilien, die sich in ihr Umfeld einfügen',
    text: 'So entstehen Orte, die den Menschen dienen, die dort wohnen, arbeiten oder betreut werden – durchdacht, beständig und mit Blick auf das Wesentliche.',
  },
]

function Business() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const lastIndex = businessSlides.length - 1

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!isInView || prefersReducedMotion) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === lastIndex ? 0 : currentIndex + 1,
      )
    }, 12000)

    return () => window.clearTimeout(timer)
  }, [activeIndex, isInView, lastIndex])

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? lastIndex : currentIndex - 1,
    )
  }

  const showNextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === lastIndex ? 0 : currentIndex + 1,
    )
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPreviousSlide()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNextSlide()
    }
  }

  const activeSlide = businessSlides[activeIndex]

  return (
    <section
      id='business'
      className={`businessSection ${isInView ? 'visible' : ''}`}
      ref={sectionRef}
      aria-label='Business und Zusammenarbeit'
      tabIndex='0'
      onKeyDown={handleKeyDown}
    >
      <img
        className='businessBackdrop'
        src={officeImage}
        alt='Besprechungsbereich im Büro von Kubitza Immobilien'
        loading='lazy'
        decoding='async'
      />
      <div className='businessOverlay' />

      <div className='businessStage'>
        <div className='businessHeading'>
          <p>Planen. Bauen. Vertrauen.</p>
          <h2>Business</h2>
        </div>

        <div className='businessGlassCard' key={activeIndex}>
          <p className='businessSlideEyebrow'>{activeSlide.eyebrow}</p>
          <h3>{activeSlide.title}</h3>
          <p className='businessSlideText'>{activeSlide.text}</p>
        </div>

        <div className='businessControls'>
          <div
            className='businessDots'
            role='group'
            aria-label='Business-Text auswählen'
          >
            {businessSlides.map((slide, index) => (
              <button
                className={`businessDot ${index === activeIndex ? 'active' : ''}`}
                type='button'
                key={slide.title}
                aria-label={`Text ${index + 1} von ${businessSlides.length} anzeigen`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <span className='visuallyHidden' aria-live='polite'>
          Text {activeIndex + 1} von {businessSlides.length}
        </span>
      </div>
    </section>
  )
}

export default Business
