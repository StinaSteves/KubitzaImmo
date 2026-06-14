import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

function Datenschutz() {
  return (
    <>
      <Seo
        title='Datenschutz | Kubitza Immobilien'
        description='Datenschutzerklärung der Kubitza Immobilien GmbH.'
        path='/datenschutz'
      />
      <main className='legalPage'>
        <div className='legalPageInner'>
          <p className='legalEyebrow'>Rechtliche Informationen</p>
          <h1>Datenschutz</h1>

          <section className='legalSection'>
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
              Datenschutzerklärung informiert Sie darüber, welche Daten beim Besuch
              dieser Website verarbeitet werden und welche Rechte Sie haben.
            </p>
            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Diese Website verwendet kein
              Kontaktformular und bindet derzeit keine Analyse-, Karten-, Video-,
              Social-Media- oder externen Schriftdienste ein.
            </p>
          </section>

          <section className='legalSection'>
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address>
              Kubitza Immobilien GmbH
              <br />
              Geschäftsführer: Michael Kubitza
              <br />
              <span className='noWrap'>Am Scheidgensbach 8</span>
              <br />
              46240 Bottrop
            </address>
            <p>
              Telefon: <a href='tel:+492041765517'>02041 765517</a>
              <br />
              E-Mail:{' '}
              <a href='mailto:office@kubitza-immobilien.de'>
                Office@kubitza-immobilien.de
              </a>
            </p>
          </section>

          <section className='legalSection'>
            <h2>3. Hosting durch IONOS</h2>
            <p>
              Diese Website wird bei IONOS SE,{' '}
              <span className='noWrap'>Elgendorfer Straße 57</span>, 56410
              Montabaur, gehostet. Beim Aufruf der Website verarbeitet IONOS
              technische Zugriffsdaten. Dazu können die aufgerufene Seite oder
              Datei, Referrer, Browsertyp und Browserversion, Betriebssystem,
              Gerätetyp, Zeitpunkt des Zugriffs sowie eine anonymisierte IP-Adresse
              gehören.
            </p>
            <p>
              Die Verarbeitung erfolgt zur sicheren, stabilen und fehlerfreien
              Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt im zuverlässigen Betrieb
              unseres Internetauftritts. Nach Angaben von IONOS werden die
              Besucherdaten acht Wochen gespeichert und nicht in Drittländer
              übermittelt.
            </p>
            <p>
              Wir haben mit IONOS einen Vertrag über Auftragsverarbeitung
              geschlossen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>4. IONOS WebAnalytics</h2>
            <p>
              Im Rahmen des Hostings kann IONOS WebAnalytics zur statistischen
              Auswertung und technischen Optimierung der Website einsetzen. Die
              Auswertung erfolgt laut IONOS anhand anonymisierter Daten. Es werden
              keine Daten an Dritte weitergegeben und keine personenbezogenen
              Besucherprofile erstellt.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse besteht in der Analyse und Verbesserung der technischen
              Qualität unserer Website.
            </p>
          </section>

          <section className='legalSection'>
            <h2>5. Kontakt per E-Mail oder Telefon</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
              Ihre Angaben einschließlich der von Ihnen mitgeteilten Kontaktdaten,
              um Ihre Anfrage zu bearbeiten. Eine Weitergabe erfolgt nicht ohne
              Ihre Einwilligung, soweit keine gesetzliche Verpflichtung besteht.
            </p>
            <p>
              Die Verarbeitung erfolgt je nach Inhalt Ihrer Anfrage auf Grundlage
              von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher oder
              vertraglicher Maßnahmen oder auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung
              Ihrer Anfrage.
            </p>
            <p>
              Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt
              und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>6. Cookies und externe Dienste</h2>
            <p>
              Diese Website setzt selbst keine Cookies ein. Es werden derzeit keine
              einwilligungspflichtigen Tracking- oder Marketingdienste und keine
              Inhalte externer Anbieter eingebunden.
            </p>
            <p>
              Wenn Sie den Datenschutzhinweis mit „Verstanden“ schließen, wird
              diese Auswahl ausschließlich lokal in Ihrem Browser gespeichert.
              Dadurch wird der Hinweis bei späteren Besuchen nicht erneut
              angezeigt. Die Speicherung dient keiner Analyse oder Verfolgung
              Ihres Nutzungsverhaltens.
            </p>
          </section>

          <section className='legalSection'>
            <h2>7. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
              Datenübertragbarkeit. Erteilte Einwilligungen können Sie jederzeit
              mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht,
              können Sie aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, Widerspruch gegen die Verarbeitung einlegen.
            </p>
          </section>

          <section className='legalSection'>
            <h2>8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über
              die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              Zuständig ist insbesondere:
            </p>
            <address>
              Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen
              <br />
              <span className='noWrap'>Kavalleriestraße 2–4</span>
              <br />
              40213 Düsseldorf
            </address>
          </section>

          <section className='legalSection'>
            <h2>9. Aktualität</h2>
            <p>Stand dieser Datenschutzerklärung: Juni 2026.</p>
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

export default Datenschutz
