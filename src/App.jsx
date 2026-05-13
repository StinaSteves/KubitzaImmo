import { useRef, useState, useEffect } from 'react'
import HeroVideo from '../public/video/230719_Bottrop-KUB.mp4'
import Logo from '../public/logo.png'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [heroActive, setHeroActive] = useState(false)
  const [heroTextVisible, setHeroTextVisible] = useState(false)
  const hideTimer = useRef(null)
  const heroTimer = useRef(null)
  const textTimer = useRef(null)

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }

  const clearHeroTimers = () => {
    if (heroTimer.current) {
      clearTimeout(heroTimer.current)
      heroTimer.current = null
    }
    if (textTimer.current) {
      clearTimeout(textTimer.current)
      textTimer.current = null
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

  useEffect(() => {
    heroTimer.current = setTimeout(() => {
      setHeroActive(true)
      textTimer.current = setTimeout(() => {
        setHeroTextVisible(true)
      }, 900)
    }, 5000)

    return () => {
      clearHideTimer()
      clearHeroTimers()
    }
  }, [])

  return (
    <div>
      <div className='landing'>
<div className='heroHeader'>
  <div>
    <div className='animatedLogo'>
      <div className='logoWrapper' onMouseEnter={showMenu} onMouseLeave={hideMenuDelayed}>
        <img src={Logo} alt="Logo" className={`logo ${menuVisible ? 'menu-open' : ''}`} />
        <nav className={`menuItems ${menuVisible ? 'visible' : ''}`}>
          <a href='#about'>about</a>
          <a href='#projekte'>projekte</a>
          <a href='#contact'>contact</a>
        </nav>
      </div>
    </div>
    <div className={`heroVideoWrapper ${heroActive ? 'shrunk' : ''}`}>
      <video className='heroVideo' src={HeroVideo} autoPlay loop muted />
      <div className={`heroTextTop ${heroTextVisible ? 'visible' : ''}`}>
     IMMOBILIEN MIT LEIDENSCHAFT
      </div>
    </div>
    <div className={`heroTextBottom ${heroTextVisible ? 'visible' : ''}`}>
     KOMPETENZ AUS ERFAHRUNG
    </div>
  </div>
</div>
</div>
<Projects />
</div>
  )
}

export default App
