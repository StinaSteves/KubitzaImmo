import { Link, useLocation } from 'react-router-dom'
import Logo from '../../public/logoKubitza.jpeg'
import LogoWP from '../../public/logoWP.jpeg'

function Navigation() {
  const { pathname } = useLocation()

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') return

    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className='siteNavigation'>
      <div className='logoWrapper'>
        <Link className='logoHomeLink' to='/' aria-label='Zur Startseite'>
          <div className='logoFlip'>
            <img src={LogoWP} alt='Logo WP' className='logo logoFront' />
            <img src={Logo} alt='Kubitza Logo' className='logo logoBack' />
          </div>
        </Link>
        <nav className='menuItems' aria-label='Hauptnavigation'>
          <Link to='/#projekte' onClick={() => scrollToSection('projekte')}>
            Aktuelle Projekte
          </Link>
          <Link to='/#referenzen' onClick={() => scrollToSection('referenzen')}>
            Referenzen
          </Link>
          <Link to='/#business' onClick={() => scrollToSection('business')}>
            Business
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
