import { Link } from 'react-router-dom'
import Logo from '../../public/logoKubitza.jpeg'
import LogoWP from '../../public/logoWP.jpeg'

function Footer() {
  return (
    <footer className='siteFooter'>
      <div className='siteFooterInner'>
        <Link className='footerBrand' to='/' aria-label='Kubitza Immobilien Startseite'>
          <span className='footerLogoFlip'>
            <img src={LogoWP} alt='WP Wohnbau und Projektsteuerung GmbH' />
            <img
              className='footerLogoBack'
              src={Logo}
              alt='Kubitza Immobilien GmbH'
            />
          </span>
        </Link>

        <div className='footerColumn'>
          <p className='footerLabel'>Kontakt</p>
          <a href='tel:+492041765517'>02041 765517</a>
          <a href='mailto:office@kubitza-immobilien.de'>
            Office@kubitza-immobilien.de <br />
          </a>
          <a href='mailto:info@wpwohnbau.de'>
            Info@WPWohnbau.de <br />
          </a>
        </div>

        <nav className='footerColumn' aria-label='Footer Navigation'>
          <p className='footerLabel'>Navigation</p>
          <Link to='/#projekte'>Aktuelle Projekte</Link>
          <Link to='/#referenzen'>Referenzen</Link>
        </nav>

        <nav className='footerColumn' aria-label='Rechtliche Links'>
          <p className='footerLabel'>Rechtliches</p>
          <Link to='/impressum'>Impressum</Link>
          <Link to='/datenschutz'>Datenschutz</Link>
        </nav>
      </div>

      <div className='footerBottom'>
        <p>© {new Date().getFullYear()} Kubitza Immobilien GmbH</p>
      </div>
    </footer>
  )
}

export default Footer
