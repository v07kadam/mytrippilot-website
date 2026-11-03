import { CONTACT_EMAILS, FOOTER_LINKS, NAV_LINKS } from '../content.js'
import BrandMark from './BrandMark.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand brand-light" href="#top" aria-label="MyTripPilot home">
            <BrandMark />
            <span>MyTripPilot</span>
          </a>
          <p>Group trips, shared expenses and packing lists, all under control.</p>
          <address className="footer-contact" id="contact">
            {CONTACT_EMAILS.map((item) => (
              <span key={item.email}>
                {item.label}: <a href={`mailto:${item.email}`}>{item.email}</a>
              </span>
            ))}
          </address>
        </div>
        <nav className="footer-col" aria-label="Product">
          <h2>Product</h2>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <nav className="footer-col" aria-label="Company">
          <h2>Company</h2>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="copyright">© {new Date().getFullYear()} MyTripPilot. All rights reserved.</p>
      </div>
    </footer>
  )
}
