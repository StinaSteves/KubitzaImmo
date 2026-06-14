import { useState } from 'react'
import { Link } from 'react-router-dom'

const privacyNoticeKey = 'kubitza-privacy-notice-dismissed'

function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return localStorage.getItem(privacyNoticeKey) !== 'true'
    } catch {
      return true
    }
  })

  const dismissNotice = () => {
    try {
      localStorage.setItem(privacyNoticeKey, 'true')
    } catch {
      // The notice still closes when browser storage is unavailable.
    }

    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside
      className='privacyNotice'
      aria-label='Datenschutzhinweis'
      aria-live='polite'
    >
      <div className='privacyNoticeContent'>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige
          Speichertechniken.
        </p>
        <div className='privacyNoticeActions'>
          <Link className='privacyNoticeLink' to='/datenschutz'>
            Datenschutz
          </Link>
          <button
            className='privacyNoticeButton'
            type='button'
            onClick={dismissNotice}
          >
            Verstanden
          </button>
        </div>
      </div>
    </aside>
  )
}

export default PrivacyNotice
