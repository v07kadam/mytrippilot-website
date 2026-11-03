import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Introduction from './components/Introduction.jsx'
import Features from './components/Features.jsx'
import TripTypes from './components/TripTypes.jsx'
import Faq from './components/Faq.jsx'
import DownloadCta from './components/DownloadCta.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return undefined

    const root = document.documentElement
    root.classList.add('has-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('has-reveal')
    }
  }, [])
}

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Introduction />
        <Features />
        <TripTypes />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  )
}
