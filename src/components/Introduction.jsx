import { STEPS } from '../content.js'

export default function Introduction() {
  return (
    <section className="section intro" id="about">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">About MyTripPilot</p>
          <h2>Group trips are fun. Settling up should be too.</h2>
          <p className="section-lead">
            MyTripPilot gives every trip a shared space for members, budgets, expenses and balances.
            Everyone sees the same numbers, so nobody has to chase receipts or maintain spreadsheets.
          </p>
        </div>

        <ol className="steps" id="how-it-works">
          {STEPS.map((step, index) => (
            <li className={`step step-${step.accent} reveal`} key={step.id}>
              <div className="step-media">
                <img src={step.image} alt={step.alt} width="720" height="540" loading="lazy" decoding="async" />
              </div>
              <div className="step-body">
                <span className="step-num">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
