import { FAQS } from '../content.js'

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-inner">
        <div className="section-head reveal">
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered</h2>
          <p className="section-lead">Quick answers about how MyTripPilot works.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details className="faq-item reveal" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
