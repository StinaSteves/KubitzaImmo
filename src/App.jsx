import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Business from './components/Business.jsx'
import Reverenzen from './components/Reverenzen.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Seo from './components/Seo.jsx'
import siteUrl from './components/seoConfig.js'
import AktuelleProjekte from './Pages/AktuelleProjekte.jsx'
import Datenschutz from './Pages/Datenschutz.jsx'
import Impressum from './Pages/Impressum.jsx'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')
const heroVideo = `${import.meta.env.BASE_URL}video/230719_Bottrop-KUB-web.mp4`
const heroVideoMobile = `${import.meta.env.BASE_URL}video/230719_Bottrop-KUB-mobile.mp4`
const heroPoster = `${import.meta.env.BASE_URL}video/230719_Bottrop-KUB-poster.jpg`

function Home() {
  return (
    <div>
      <Seo
        title='Eigentumswohnungen in Recklinghausen | Kubitza Immobilien'
        description='Eigentumswohnungen in Recklinghausen kaufen: Entdecken Sie die Quartiersentwicklung St. Markus mit seniorengerechten Wohnungen, Aufzug und Tiefgarage.'
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              name: 'Kubitza Immobilien',
              url: `${siteUrl}/`,
              inLanguage: 'de-DE',
            },
            {
              '@type': 'ItemList',
              name: 'Aktuelle Immobilienprojekte',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  url: `${siteUrl}/aktuelle-projekte/recklinghausen`,
                  name: 'Eigentumswohnungen in Recklinghausen – St. Markus',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  url: `${siteUrl}/aktuelle-projekte/altenessen-mitte`,
                  name: 'Neubauprojekt Altenessen-Mitte',
                },
              ],
            },
          ],
        }}
      />
      <div className='landing'>
<div className='heroHeader'>
  <div>
    <div className='heroVideoWrapper'>
      <video
        className='heroVideo'
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
        poster={heroPoster}
      >
        <source
          src={heroVideoMobile}
          media='(max-width: 600px)'
          type='video/mp4'
        />
        <source src={heroVideo} type='video/mp4' />
      </video>
    </div>
  </div>
</div>
</div>

<Projects />
<Reverenzen />
<Business />
<Footer />

</div>
  )
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aktuelle-projekte/:projectSlug' element={<AktuelleProjekte />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
