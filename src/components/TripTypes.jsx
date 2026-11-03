import { EXTRAS, TRIP_TYPES } from '../content.js'
import Icon from './Icon.jsx'

export default function TripTypes() {
  return (
    <section className="section trip-types" id="trip-types">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Made for every kind of trip</p>
          <h2>Pick a trip type. Get a packing list that fits.</h2>
          <p className="section-lead">
            Choose from 9 trip types. Eight come with a ready-made packing checklist.
          </p>
        </div>

        <ul className="type-grid">
          {TRIP_TYPES.map((type) => (
            <li className="type-card reveal" key={type.name}>
              <span className="type-emoji" aria-hidden="true">{type.emoji}</span>
              <strong>{type.name}</strong>
              <span>{type.hint}</span>
            </li>
          ))}
        </ul>

        <div className="extras">
          <h3 className="extras-title reveal">And the details that matter</h3>
          <ul className="extras-grid">
            {EXTRAS.map((extra) => (
              <li className="extra reveal" key={extra.title}>
                <span className="extra-icon"><Icon name={extra.icon} /></span>
                <div>
                  <strong>{extra.title}</strong>
                  <p>{extra.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
