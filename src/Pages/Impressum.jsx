import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Impressum() {
  return (
    <>
      <main className='legalPage'>
        <div className='legalPageInner'>
          <p className='legalEyebrow'>Rechtliche Informationen</p>
          <h1>Impressum</h1>

          <section className='legalSection'>
            <h2>Kubitza Immobilien GmbH</h2>
            <address>
              Am Scheidgensbach 8
              <br />
              46240 Bottrop
            </address>
            <p>
              Geschäftsführer: Michael Kubitza
              <br />
              Telefon: <a href='tel:+492041765517'>02041 765517</a>
              <br />
              E-Mail:{' '}
              <a href='mailto:info@kubitza-immobilien.de'>
                info@kubitza-immobilien.de
              </a>
            </p>
            <p>
              Handelsregister: Amtsgericht Gelsenkirchen
              <br />
              Handelsregisternummer: HRB 15606
            </p>
          </section>

          <section className='legalSection'>
            <h2>WP Wohnbau und Projektsteuerung GmbH</h2>
            <address>
              Am Scheidgensbach 8
              <br />
              46240 Bottrop
            </address>
            <p>
              Geschäftsführer: Michael Kubitza
              <br />
              E-Mail:{' '}
              <a href='mailto:verwaltung@wpwohnbau-projektsteuerung.de'>
                verwaltung@wpwohnbau-projektsteuerung.de
              </a>
            </p>
            <p>
              Handelsregister: Amtsgericht Gelsenkirchen
              <br />
              Handelsregisternummer: HRB 17768
            </p>
          </section>

          <section className='legalSection'>
            <h2>Aufsichtsbehörde</h2>
            <p>
              Die Gewerbeerlaubnis gemäß § 34c GewO wurde erteilt durch:
            </p>
            <address>
              Stadt Bottrop
              <br />
              Kirchhellener Straße 21
              <br />
              46236 Bottrop
            </address>
          </section>

          <section className='legalSection'>
            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <Link className='legalBackLink' to='/'>
            zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Impressum
