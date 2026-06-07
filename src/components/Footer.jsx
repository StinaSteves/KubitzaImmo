import { Link } from 'react-router-dom'
import Logo from '../../public/logoKubitza.jpeg'

function Footer() {
  return (
    <footer className='siteFooter'>
      <div className='siteFooterInner'>
        <Link className='footerBrand' to='/' aria-label='Kubitza Immobilien Startseite'>
          <img src={Logo} alt='Kubitza Immobilien GmbH' />
        </Link>

        <div className='footerColumn'>
          <p className='footerLabel'>Kontakt</p>
          <a href='tel:+492041765517'>02041 765517</a>
          <a href='mailto:info@kubitza-immobilien.de'>
            info@kubitza-immobilien.de
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
