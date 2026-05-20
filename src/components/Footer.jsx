function Footer() {
  return (
    <footer className='siteFooter'>
      <div className='siteFooterInner'>
        <div className='footerContact'>
          <p className='footerLabel'>Kontakt</p>
          <a href='tel:+490000000000' className='footerPhone'>
            +49 000 000000
          </a>
          <a href='mailto:info@kubitza-immobilien.de'>
            info@kubitza-immobilien.de
          </a>
        </div>

        <nav className='footerLinks' aria-label='Rechtliche Links'>
          <a href='#impressum'>Impressum</a>
          <a href='#datenschutz'>Datenschutz</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
