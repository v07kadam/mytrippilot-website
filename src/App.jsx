import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Introduction from './components/Introduction.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Introduction />
        <Features />
      </main>
      <Footer />
    </>
  )
}
