import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroVideo from '../public/video/230719_Bottrop-KUB.mp4'
import Business from './components/Business.jsx'
import Reverenzen from './components/Reverenzen.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AktuelleProjekte from './Pages/AktuelleProjekte.jsx'
import Datenschutz from './Pages/Datenschutz.jsx'
import Impressum from './Pages/Impressum.jsx'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

function Home() {
  return (
    <div>
      <div className='landing'>
<div className='heroHeader'>
  <div>
    <div className='heroVideoWrapper'>
      <video className='heroVideo' src={HeroVideo} autoPlay loop muted />
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
