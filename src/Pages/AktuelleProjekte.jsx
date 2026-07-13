import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import projectsData from '../components/projectsData'
import Seo from '../components/Seo'
import siteUrl from '../components/seoConfig'

const emphasizedFundingPattern = /(KfW-40-Standard)/g
const emphasizedFundingExactPattern = /^(KfW-40-Standard)$/

function renderTextWithFundingEmphasis(text) {
  return text.split(emphasizedFundingPattern).map((part, index) =>
    emphasizedFundingExactPattern.test(part) ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  )
}

function renderTextWithNonBreakingNotes(text) {
  return text.split(/(\([^)]+\))/g).map((part, index) =>
    part.startsWith('(') && part.endsWith(')') ? (
      <span className='noWrapText' key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function AktuelleProjekte() {
  const { projectSlug } = useParams()
  const project = projectsData.find(
    (item) => item.slug === projectSlug || item.aliases?.includes(projectSlug),
  )
  const [activeHouseIndex, setActiveHouseIndex] = useState(0)

  if (!project) {
    return (
      <>
        <Seo
          title='Projekt nicht gefunden | Kubitza Immobilien'
          description='Das gesuchte Immobilienprojekt wurde nicht gefunden.'
          robots='noindex, follow'
        />
        <main className='projectDetailPage'>
          <Link className='projectBackLink' to='/'>
            zurück
          </Link>
          <h1>Projekt nicht gefunden</h1>
        </main>
      </>
    )
  }

  const activeHouse = project.houses?.[activeHouseIndex]

  return (
    <>
      <Seo
        title={project.seoTitle || `${project.title} | Kubitza Immobilien`}
        description={project.seoDescription || project.description.join(' ')}
        path={`/aktuelle-projekte/${encodeURIComponent(project.slug)}`}
        image={project.seoImage || project.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ApartmentComplex',
          name: project.detailTitle || project.title,
          description: project.seoDescription,
          url: `${siteUrl}/aktuelle-projekte/${encodeURIComponent(project.slug)}`,
          image: new URL(project.seoImage || project.image, siteUrl).toString(),
          address: {
            '@type': 'PostalAddress',
            addressLocality:
              project.slug === 'recklinghausen'
                ? 'Recklinghausen'
                : 'Essen-Altenessen',
            addressCountry: 'DE',
          },
        }}
      />
      <main className='projectDetailPage'>
        {project.image && (
          <img
            className='projectDetailImage'
            src={project.image}
            alt={project.alt || project.title}
            decoding='async'
          />
        )}
        <div className='projectDetailContent'>
          <h1>{project.detailTitle || project.title}</h1>

          {project.houses?.length > 1 && (
            <div className='houseSwitch' aria-label='Haus auswählen'>
              {project.houses.map((house, index) => (
                <button
                  className={`houseSwitchButton ${
                    house.id === 'gross-tagespflege' ? 'preserveCase' : ''
                  } ${index === activeHouseIndex ? 'active' : ''}`}
                  type='button'
                  key={house.id}
                  onClick={() => setActiveHouseIndex(index)}
                >
                  {house.label}
                </button>
              ))}
            </div>
          )}

          {activeHouse && (
            <section className='houseDetails'>
              {activeHouse.detailVideo ? (
                <video
                  className='houseDetailImage houseDetailVideo'
                  src={activeHouse.detailVideo}
                  aria-label={`${activeHouse.label} Kameraflug`}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload='metadata'
                />
              ) : (
                <img
                  className='houseDetailImage'
                  src={activeHouse.introImage}
                  alt={`${activeHouse.label} Ansicht`}
                  loading='lazy'
                  decoding='async'
                />
              )}
              {activeHouse.introText && (
                <p>{renderTextWithNonBreakingNotes(activeHouse.introText)}</p>
              )}

              <img
                className='houseDetailImage'
                src={activeHouse.tableImage}
                alt={`${activeHouse.label} Lage`}
                loading='lazy'
                decoding='async'
                style={
                  activeHouse.tableImagePosition
                    ? { objectPosition: activeHouse.tableImagePosition }
                    : undefined
                }
              />

              {activeHouse.closingText && (
                <p>{renderTextWithFundingEmphasis(activeHouse.closingText)}</p>
              )}
              {activeHouse.contentSections?.map((section, sectionIndex) => (
                <div
                  className='houseContentSection'
                  key={`${activeHouse.id}-section-${sectionIndex}`}
                >
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.text.map((paragraph) => (
                    <p key={paragraph}>
                      {renderTextWithNonBreakingNotes(paragraph)}
                    </p>
                  ))}
                </div>
              ))}
              {activeHouse.priceNote && (
                <p className='housePriceNote'>{activeHouse.priceNote}</p>
              )}

              {activeHouse.detailVideo && (
                <img
                  className='houseDetailImage'
                  src={activeHouse.introImage}
                  alt={`${activeHouse.label} Ansicht`}
                  loading='lazy'
                  decoding='async'
                />
              )}

              {activeHouse.apartments?.length > 0 && (
                <div className='apartmentsTableWrap'>
                  <table className='apartmentsTable'>
                    <tbody>
                      {activeHouse.apartments.map((apartment) => (
                        <tr key={`${activeHouse.id}-${apartment.number}`}>
                          <td className='apartmentIdentityCell' colSpan='2'>
                            <span className='apartmentIdentity'>
                              <span>{apartment.type}</span>
                              <span>{apartment.number}</span>
                            </span>
                          </td>
                          <td>{apartment.location}</td>
                          <td>{apartment.rooms}</td>
                          <td>{apartment.area}</td>
                          <td>{apartment.price}</td>
                          <td className='tableDownloadCell'>
                            <div className='tableDownloadButtons'>
                              {apartment.exposeUrl ? (
                                <a
                                  className='tableDownloadButton'
                                  href={apartment.exposeUrl}
                                  download
                                >
                                  <span>Exposé</span>
                                  <span>herunterladen</span>
                                </a>
                              ) : (
                                <span
                                  className='tableDownloadButton tableDownloadButtonDisabled'
                                  aria-disabled='true'
                                >
                                  <span>Exposé</span>
                                  <span>herunterladen</span>
                                </span>
                              )}
                              {activeHouse.id !== 'haus-4' && (
                                apartment.baubeschreibungUrl ? (
                                  <a
                                    className='tableDownloadButton'
                                    href={apartment.baubeschreibungUrl}
                                    download
                                  >
                                    <span>Baubeschreibung</span>
                                    <span>herunterladen</span>
                                  </a>
                                ) : (
                                  <span
                                    className='tableDownloadButton tableDownloadButtonDisabled'
                                    aria-disabled='true'
                                  >
                                    <span>Baubeschreibung</span>
                                    <span>herunterladen</span>
                                  </span>
                                )
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeHouse.parkingPrice && (
                <p className='houseParkingNote'>
                  Tiefgaragenstellplatz: {activeHouse.parkingPrice}
                </p>
              )}
            </section>
          )}

          <Link className='projectBackLink' to='/'>
            zurück
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AktuelleProjekte
