import { useEffect, useRef, useState } from 'react'

function useScrollReveal() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const resetAnimationAtTop = () => {
      if (window.scrollY <= 2) {
        setIsVisible(false)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.01,
      },
    )

    observer.observe(section)
    window.addEventListener('scroll', resetAnimationAtTop, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', resetAnimationAtTop)
    }
  }, [])

  return { sectionRef, isVisible }
}

export default useScrollReveal
