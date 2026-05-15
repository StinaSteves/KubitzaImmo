import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
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

        {project.houses?.length > 0 && (
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
            <p>{activeHouse.introText}</p>

            <img
              className='houseDetailImage'
              src={activeHouse.tableImage}
              alt={`${activeHouse.label} Lage`}
            />
            <table className='houseFactsTable'>
              <tbody>
                {activeHouse.facts.map(([label, value]) => (
                  <tr key={label}>
                    <th scope='row'>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>{activeHouse.closingText}</p>

            <div className='projectDownloads'>
              <a className='projectDownloadButton' href={activeHouse.exposeUrl} download>
                Expose herunterladen
              </a>
              <a className='projectDownloadButton' href={activeHouse.lageplanUrl} download>
                Lageplan herunterladen
              </a>
            </div>
          </section>
        )}

        <Link className='projectBackLink' to='/'>
          zurück
        </Link>
      </div>
    </main>
  )
}

export default AktuelleProjekte
