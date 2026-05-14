import { useRef, useState, useEffect } from 'react'
import HeroVideo from '../public/video/230719_Bottrop-KUB.mp4'
import Logo from '../public/Logo_grau_gesamt.jpeg'
import Projects from './components/Projects'
import './App.css'

function App() {
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
        <img src={Logo} alt="Logo" className={`logo ${menuVisible ? 'menu-open' : ''}`} />
        <nav className={`menuItems ${menuVisible ? 'visible' : ''}`}>
          <a href='#about'>Business</a>
          <a href='#projekte'>Aktuelle Projekte</a>
          <a href='#contact'>Referenzen</a>
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
</div>
  )
}

export default App
