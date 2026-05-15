import { useRef, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroVideo from '../public/video/230719_Bottrop-KUB.mp4'
import Logo from '../public/Logo_arktikgrau.jpeg'
import LogoWP from '../public/Logo_WP_klein.jpeg'
import Reverenzen from './components/Reverenzen.jsx'
import Projects from './components/Projects.jsx'
import AktuelleProjekte from './Pages/AktuelleProjekte.jsx'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

function Home() {
  const [menuVisible, setMenuVisible] = useState(false)
  const hideTimer = useRef(null)

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const showMenu = () => {
    clearHideTimer()
    setMenuVisible(true)
  }

  const hideMenuDelayed = () => {
    clearHideTimer()
    hideTimer.current = setTimeout(() => {
      setMenuVisible(false)
      hideTimer.current = null
    }, 5000)
  }

  useEffect(() => {
    const hideMenuOnScroll = () => {
      clearHideTimer()
      setMenuVisible(false)
    }

    window.addEventListener('scroll', hideMenuOnScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', hideMenuOnScroll)
    }
  }, [])

  return (
    <div>
      <div className='landing'>
<div className='heroHeader'>
  <div>
    <div className='animatedLogo'>
      <div className='logoWrapper' onMouseEnter={showMenu} onMouseLeave={hideMenuDelayed}>
        <div className={`logoFlip ${menuVisible ? 'menu-open' : ''}`}>
          <img src={Logo} alt="Logo" className='logo logoFront' />
          <img src={LogoWP} alt="Logo WP" className='logo logoBack' />
        </div>
        <nav className={`menuItems ${menuVisible ? 'visible' : ''}`}>
          <a href='#projekte'>Aktuelle Projekte</a>
          <a href='#contact'>Referenzen</a>
          <a href='#about'>Business</a>
        </nav>
      </div>
    </div>
    <div className='heroVideoWrapper'>
      <video className='heroVideo' src={HeroVideo} autoPlay loop muted />
    </div>
  </div>
</div>
</div>
<Projects />
<Reverenzen />

</div>
  )
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aktuelle-projekte/:projectSlug' element={<AktuelleProjekte />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
