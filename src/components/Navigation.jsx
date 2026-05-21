import Logo from '../../public/logoKubitza.jpeg'
import LogoWP from '../../public/logoWP.jpeg'

function Navigation() {
  const basePath = import.meta.env.BASE_URL

  return (
    <header className='siteNavigation'>
      <div className='logoWrapper'>
        <a className='logoHomeLink' href={basePath} aria-label='Zur Startseite'>
        <div className='logoFlip'>
          <img src={LogoWP} alt='Logo WP' className='logo logoFront' />
          <img src={Logo} alt='Kubitza Logo' className='logo logoBack' />
        </div>
        </a>
        <nav className='menuItems' aria-label='Hauptnavigation'>
          <a href={`${basePath}#projekte`}>Aktuelle Projekte</a>
          <a href={`${basePath}#referenzen`}>Referenzen</a>
          <a href={`${basePath}#about`}>Business</a>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
