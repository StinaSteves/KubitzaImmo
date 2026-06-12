import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

function Impressum() {
  return (
    <>
      <Seo
        title='Impressum | Kubitza Immobilien'
        description='Impressum und Anbieterinformationen der Kubitza Immobilien GmbH und WP Wohnbau und Projektsteuerung GmbH.'
        path='/impressum'
      />
      <main className='legalPage'>
        <div className='legalPageInner'>
          <p className='legalEyebrow'>Rechtliche Informationen</p>
          <h1>Impressum</h1>

          <section className='legalSection'>
            <h2>Kubitza Immobilien GmbH</h2>
            <p>Inhaber: Michael Kubitza</p>
            <address>
              Am Scheidgensbach 8
              <br />
              46240 Bottrop
            </address>
            <p>
              Vertretungsberechtigter Geschäftsführer: Michael Kubitza
              <br />
              Telefon: <a href='tel:+492041765517'>02041 765517</a>
              <br />
              E-Mail:{' '}
              <a href='mailto:Office@kubitza-immobilien.de'>
                Office@kubitza-immobilien.de
              </a>
              <br />
              Website:{' '}
              <a
                href='https://www.kubitza-immobilien.de'
                target='_blank'
                rel='noreferrer'
              >
                www.kubitza-immobilien.de
              </a>
            </p>
            <p>
              Handelsregister: Amtsgericht Gelsenkirchen
              <br />
              Handelsregisternummer: HRB 15606
              <br />
              Steuer-Nr.: Finanzamt Bottrop 308/5063/1847
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
              Telefon: <a href='tel:+492041765517'>02041 765517</a>
              <br />
              E-Mail:{' '}
              <a href='mailto:Info@WPWohnbau.de'>
                Info@WPWohnbau.de
              </a>
            </p>
            <p>
              Handelsregister: Amtsgericht Gelsenkirchen
              <br />
              Handelsregisternummer: HRB 17768
              <br />
              Steuer-Nr.: Finanzamt Bottrop 308/5063/2023
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
            <p>
              <a href='https://www.bottrop.de' target='_blank' rel='noreferrer'>
                www.bottrop.de
              </a>
            </p>
          </section>

          <section className='legalSection'>
            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
              Inhalte umgehend entfernen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu
              diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche
              Kontrolle ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet und entsprechende
              Inhalte als solche gekennzeichnet. Sollten Sie dennoch auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
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
