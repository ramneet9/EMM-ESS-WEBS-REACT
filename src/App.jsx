import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Counts from './components/Counts'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Ensure hash navigation from other pages scrolls to the correct section after mount
    if (window && window.location && window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el && typeof el.scrollIntoView === 'function') {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' })
        }, 0)
      }
    }
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Counts />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
