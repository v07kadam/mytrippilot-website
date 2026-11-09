import { STEPS } from '../content.js'
import forestPhoto from '../assets/IMG20260525150755.webp'
import scenicPhoto from '../assets/20250525_174620.webp'
import Icon from './Icon.jsx'

const FUTURE_CAPABILITIES = [
  {
    icon: 'route',
    title: 'Travel Itinerary Planning',
    description: 'Create personalized travel itineraries, organize destinations and plan activities.',
  },
  {
    icon: 'map',
    title: 'Offline Maps',
    description: 'Access destination maps and navigate even when internet connectivity is unavailable.',
  },
  {
    icon: 'compass',
    title: 'Smarter Travel Management',
    description: 'Continue making trip organization, shared expenses and travel documentation simpler.',
  },
]

export default function Introduction() {
  return (
    <>
      <section className="section intro about-story" id="about">
        <div className="container">
          <div className="about-story-grid reveal">
            <div className="about-story-copy">
              <p className="eyebrow">About MyTripPilot</p>
              <h2>Made for the trip and the shared costs that come with it.</h2>
              <p>
                MyTripPilot was built to simplify trip organization, expense tracking and shared
                travel spending. It brings trip details, budgets, members and expenses into one
                shared space, so everyone can follow the plan and understand the numbers.
              </p>
              <p>
                From the first plan to the final report, the goal is practical: help groups keep
                travel details clear, record shared costs and see how spending adds up.
              </p>
            </div>

            <figure className="about-story-photo">
              <img
                src={forestPhoto}
                alt="Traveller seated on a rocky path surrounded by green forest."
                width="768"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="about-how" id="how-it-works">
            <div className="section-head center reveal">
              <p className="eyebrow">How it works</p>
              <h2>Plan together, share costs and keep the details in reach.</h2>
            </div>

            <ol className="steps">
              {STEPS.map((step, index) => (
                <li className={`step step-${step.accent} reveal`} key={step.id}>
                  <div className="step-media">
                    <img
                      src={step.image}
                      alt={step.alt}
                      width="720"
                      height="540"
                      loading="lazy"
                      decoding="async"
                    />
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
        </div>
      </section>

      <section className="about-difference" aria-labelledby="about-difference-title">
        <div className="container about-difference-inner">
          <figure className="about-difference-photo reveal">
            <img
              src={scenicPhoto}
              alt="Traveller standing on a mountain ridge above a valley filled with clouds."
              width="1365"
              height="768"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="about-difference-copy reveal">
            <p className="eyebrow">Travel, made clearer</p>
            <h2 id="about-difference-title">What Makes MyTripPilot Different?</h2>
            <p className="about-difference-lead">
              One shared place for the details that keep a group trip moving—from planning the trip
              to understanding the final spend.
            </p>

            <ul className="about-difference-list">
              <li>
                <h3>Trip management</h3>
                <p>Keep dates, budgets, members and trip details together.</p>
              </li>
              <li>
                <h3>Group travel</h3>
                <p>Invite friends and keep the group working from the same trip information.</p>
              </li>
              <li>
                <h3>Expense tracking</h3>
                <p>Record who paid, split costs equally or by custom amounts, and follow balances.</p>
              </li>
              <li>
                <h3>Expense reports</h3>
                <p>Review spending by category and share CSV, PDF or trip summaries.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-founder" aria-labelledby="about-founder-title">
        <div className="container about-founder-inner">
          <figure className="about-founder-photo reveal">
            <img
              src="/images/about/founder-vaibhav.png"
              alt="Vaibhav standing at a mountain viewpoint with forested ridges behind him."
              width="768"
              height="1020"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="about-founder-copy reveal">
            <p className="eyebrow">Founder story</p>
            <h2 id="about-founder-title">The Person Behind MyTripPilot</h2>
            <p className="about-founder-name">Vaibhav</p>
            <p className="about-founder-role">Founder &amp; Creator, MyTripPilot</p>

            <div className="about-founder-bio">
              <p>Hi, I'm Vaibhav, the founder and creator of MyTripPilot.</p>
              <p>
                I'm a technology professional by experience, a traveller by passion, and someone
                who enjoys turning ideas into practical solutions.
              </p>
              <p>
                MyTripPilot started with a simple thought: why should managing travel expenses and
                organizing trip details take away from the joy of travelling?
              </p>
              <p>
                I enjoy exploring new destinations, discovering places beyond the usual tourist
                trails, and capturing moments along the way. My interest in technology inspired me
                to turn this idea into an application that makes managing trips, tracking expenses
                and sharing travel costs simpler.
              </p>
              <p>
                What started as a personal initiative has gradually evolved into MyTripPilot, a
                product I'm continuously building and improving with the goal of making every
                journey easier to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-roadmap" aria-labelledby="about-roadmap-title">
        <div className="container">
          <div className="about-roadmap-heading reveal">
            <div>
              <p className="eyebrow">WHERE WE ARE HEADED</p>
              <h2 id="about-roadmap-title">The journey doesn't stop here.</h2>
            </div>
            <span className="about-roadmap-badge">What's Coming Next</span>
          </div>

          <p className="about-roadmap-intro reveal">
            My vision for MyTripPilot is to gradually evolve it into a comprehensive travel
            companion that supports travellers throughout their journeys.
          </p>

          <div className="about-roadmap-grid">
            {FUTURE_CAPABILITIES.map((capability) => (
              <article className="about-roadmap-card reveal" key={capability.title}>
                <div className="about-roadmap-card-top">
                  <span className="about-roadmap-icon">
                    <Icon name={capability.icon} />
                  </span>
                  <span className="about-roadmap-status">Planned</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>

          <p className="about-roadmap-closing reveal">
            These are part of the journey ahead. The goal remains the same: helping people spend
            less time managing travel logistics and more time enjoying the experiences that matter.
          </p>
        </div>
      </section>
    </>
  )
}
