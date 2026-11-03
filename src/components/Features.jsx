import { SHOWCASES } from '../content.js'
import PhoneFrame from './PhoneFrame.jsx'
import Icon from './Icon.jsx'

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Key features</p>
          <h2>Everything your group trip needs</h2>
          <p className="section-lead">
            From the first plan to the final settle-up, MyTripPilot covers the whole trip.
          </p>
        </div>

        <nav className="feature-tabs" aria-label="Feature shortcuts">
          {SHOWCASES.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.eyebrow}</a>
          ))}
        </nav>

        <div className="showcases">
          {SHOWCASES.map((item, index) => (
            <article className={`showcase${index % 2 ? ' is-reversed' : ''}`} id={item.id} key={item.id}>
              <div className="showcase-copy reveal">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="showcase-lead">{item.description}</p>
                <ul className="checklist">
                  {item.points.map((point) => (
                    <li key={point}><span className="tick"><Icon name="check" /></span>{point}</li>
                  ))}
                </ul>
              </div>
              <div className={`showcase-media reveal${item.screens.length > 1 ? ' is-pair' : ''}`}>
                {item.screens.map((screen) => (
                  <PhoneFrame key={screen.alt} src={screen.src} alt={screen.alt} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
