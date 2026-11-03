import { DOWNLOAD_APP_URL, NAV_LINKS } from '../content.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="MyTripPilot home">
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#0b3b5c" />
            <path d="M5 22 Q16 4 27 12" fill="none" stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1.5 4" />
            <circle cx="5" cy="22" r="2.5" fill="#ffffff" />
            <circle cx="27" cy="12" r="3" fill="#2ec4b6" />
          </svg>
          <span>MyTripPilot</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="btn btn-primary btn-sm" href={DOWNLOAD_APP_URL}>Download App</a>
      </div>
    </header>
  )
}
