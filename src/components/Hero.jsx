import { DOWNLOAD_APP_URL, HERO_SCREENS, STATS } from '../content.js'
import PhoneFrame from './PhoneFrame.jsx'
import Icon from './Icon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Group travel expenses, sorted</p>
          <h1>Your Trips. Your Expenses. All Under Control.</h1>
          <p className="hero-lead">
            Plan trips with friends, log shared expenses, split bills fairly and pack smart,
            all in one app built for travellers in India.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={DOWNLOAD_APP_URL}>Download App</a>
            <a className="btn btn-ghost btn-lg" href="#how-it-works">
              See how it works <Icon name="arrow" />
            </a>
          </div>
          <ul className="hero-trust">
            <li><Icon name="check" /> Free to use</li>
            <li><Icon name="check" /> Android, iOS &amp; Web</li>
            <li><Icon name="check" /> ₹ INR first</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" aria-hidden="true" />
          <PhoneFrame className="phone-back" src={HERO_SCREENS.back.src} alt={HERO_SCREENS.back.alt} eager />
          <PhoneFrame className="phone-front" src={HERO_SCREENS.front.src} alt={HERO_SCREENS.front.alt} eager />

          <div className="chip chip-invite" aria-hidden="true">
            <span className="chip-label">Invite code</span>
            <strong className="chip-code">1E7B86</strong>
          </div>
          <div className="chip chip-split" aria-hidden="true">
            <span className="chip-dot"><Icon name="check" /></span>
            <span>
              <span className="chip-label">Split type</span>
              <strong>Equal or custom</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
