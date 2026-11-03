import { useEffect, useState } from 'react'
import { DOWNLOAD_APP_URL, NAV_LINKS } from '../content.js'
import BrandMark from './BrandMark.jsx'
import Icon from './Icon.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="MyTripPilot home" onClick={close}>
          <BrandMark />
          <span>MyTripPilot</span>
        </a>

        <nav className="site-nav" id="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={close}>{link.label}</a>
          ))}
          <a className="btn btn-primary nav-download" href={DOWNLOAD_APP_URL} onClick={close}>Download App</a>
        </nav>

        <a className="btn btn-primary btn-sm header-download" href={DOWNLOAD_APP_URL}>Download App</a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
