import { FOOTER_LINKS } from '../content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand brand-light">
          <span>MyTripPilot</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <p className="copyright">© {new Date().getFullYear()} MyTripPilot. All rights reserved.</p>
      </div>
    </footer>
  )
}
