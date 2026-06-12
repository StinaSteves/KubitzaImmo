import '../App.css'
import useScrollReveal from './useScrollReveal'

const officeImage = `${import.meta.env.BASE_URL}immoPictures/buero-web.jpg`

function Business() {
  const { sectionRef, isVisible } = useScrollReveal()

  return (
    <section
      id='business'
      className={`businessSection ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className='businessInner'>
        <div className='businessHeading'>
          <p>Planen. Bauen. Vertrauen.</p>
          <h2>Business</h2>
        </div>

        <div className='businessLayout'>
          <div className='businessImageWrap'>
            <img
              className='businessImage'
              src={officeImage}
              alt='Besprechungsbereich im Büro von Kubitza Immobilien'
              loading='lazy'
              decoding='async'
            />
          </div>

          <div className='businessContent'>
            <p className='businessIntro'>
              Wir entwickeln und realisieren Projekte für Menschen und ihren
              Alltag.
            </p>

            <div className='businessTextBlock'>
              <h3>Erfahrung, die verbindet</h3>
              <p>
                Seit über 20 Jahren vertrauen wir auf die Zusammenarbeit mit
                denselben Handwerkern. Eingespielte Abläufe, kurze Wege und ein
                gemeinsames Qualitätsverständnis schaffen dabei die Grundlage
                für eine verlässliche Umsetzung.
              </p>
            </div>

            <div className='businessTextBlock'>
              <h3>Verlässlich und menschlich</h3>
              <p>
                Für uns zählen nicht nur Verbindlichkeit und Verlässlichkeit,
                sondern auch die Menschen hinter einem Projekt. Wir setzen auf
                einen respektvollen Umgang, klare Absprachen und Lösungen, die
                langfristig funktionieren.
              </p>
            </div>

            <p className='businessClosing'>
              So entstehen Immobilien, die sich in ihr Umfeld einfügen und den
              Menschen dienen, die dort wohnen, arbeiten oder betreut werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
