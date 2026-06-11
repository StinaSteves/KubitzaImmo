import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import projectsData from '../components/projectsData'

function AktuelleProjekte() {
  const { projectSlug } = useParams()
  const project = projectsData.find((item) => item.slug === projectSlug)
  const [activeHouseIndex, setActiveHouseIndex] = useState(0)

  if (!project) {
    return (
      <main className='projectDetailPage'>
        <Link className='projectBackLink' to='/'>
          zurück
        </Link>
        <h1>Projekt nicht gefunden</h1>
      </main>
    )
  }

  const activeHouse = project.houses?.[activeHouseIndex]

  return (
    <>
      <main className='projectDetailPage'>
        {project.image && (
          <img
            className='projectDetailImage'
            src={project.image}
            alt={project.alt || project.title}
          />
        )}
        <div className='projectDetailContent'>
          <h1>{project.title}</h1>

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
              />
              {activeHouse.introText && <p>{activeHouse.introText}</p>}

              <img
                className='houseDetailImage'
                src={activeHouse.tableImage}
                alt={`${activeHouse.label} Lage`}
              />

              {activeHouse.closingText && <p>{activeHouse.closingText}</p>}
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
                              <a
                                className='tableDownloadButton'
                                href={apartment.exposeUrl}
                                download
                              >
                                <span>Expose</span>
                                <span>herunterladen</span>
                              </a>
                              <a
                                className='tableDownloadButton'
                                href={activeHouse.lageplanUrl}
                                download
                              >
                                <span>Lageplan</span>
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
