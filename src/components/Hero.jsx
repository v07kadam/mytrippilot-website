import { DOWNLOAD_APP_URL } from '../content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Travel expense management for India</p>
          <h1>Your Trips. Your Expenses. All Under Control.</h1>
          <p className="hero-lead">
            MyTripPilot keeps group trips, shared expenses and bill receipts in one place,
            so you always know what was spent, who paid and what is still owed.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={DOWNLOAD_APP_URL}>Download App</a>
            <a className="btn btn-ghost" href="#features">Explore features</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg className="hero-scene" viewBox="0 0 480 360" role="presentation">
            <circle cx="400" cy="70" r="36" fill="#f5a623" opacity="0.9" />
            <path d="M40 300 C 120 220, 170 320, 250 240 S 380 120, 440 110" fill="none" stroke="#2ec4b6" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
            <path d="M40 330 C 180 290, 300 340, 440 300" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <path d="M0 340 Q 120 300 240 330 T 480 320 L480 360 L0 360 Z" fill="rgba(255,255,255,0.08)" />
            <circle cx="40" cy="300" r="7" fill="#ffffff" />
            <circle cx="250" cy="240" r="6" fill="#f5a623" />
            <g transform="translate(428 100) rotate(-25)">
              <path d="M0 -12 L6 0 L0 12 L-2 4 L-10 6 L-10 2 L-2 0 L-2 -4 L-10 -2 L-10 -6 L-2 -4 Z" fill="#ffffff" />
            </g>
          </svg>

          <div className="float-card float-card-trip">
            <span className="float-label">Goa Trip · Dec</span>
            <strong>₹18,400 <small>of ₹25,000</small></strong>
            <div className="meter"><span style={{ width: '74%' }} /></div>
          </div>

          <div className="float-card float-card-bill">
            <span className="bill-tick">✓</span>
            <div>
              <span className="float-label">Bill scanned</span>
              <strong>Fuel · ₹2,340</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
