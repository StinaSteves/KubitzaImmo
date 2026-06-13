import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import projectsData from '../components/projectsData'
import Seo from '../components/Seo'
import siteUrl from '../components/seoConfig'

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
            <div className='houseSwitch' aria-label='Haus auswaehlen'>
              {project.houses.map((house, index) => (
                <button
                  className={`houseSwitchButton ${index === activeHouseIndex ? 'active' : ''}`}
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
              <img
                className='houseDetailImage'
                src={activeHouse.introImage}
                alt={`${activeHouse.label} Ansicht`}
                loading='lazy'
                decoding='async'
              />
              {activeHouse.introText && <p>{activeHouse.introText}</p>}

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

              {activeHouse.closingText && <p>{activeHouse.closingText}</p>}
              {activeHouse.contentSections?.map((section, sectionIndex) => (
                <div
                  className='houseContentSection'
                  key={`${activeHouse.id}-section-${sectionIndex}`}
                >
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
              {activeHouse.priceNote && (
                <p className='housePriceNote'>{activeHouse.priceNote}</p>
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
                              <span
                                className='tableDownloadButton tableDownloadButtonDisabled'
                                aria-disabled='true'
                              >
                                <span>Expose</span>
                                <span>herunterladen</span>
                              </span>
                              <a
                                className='tableDownloadButton'
                                href={activeHouse.lageplanUrl}
                                download
                              >
                                <span>Baubeschreibung</span>
                                <span>herunterladen</span>
                              </a>
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
