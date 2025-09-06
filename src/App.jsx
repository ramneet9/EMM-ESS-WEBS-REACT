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
    // Handle navigation from products page to specific sections
    const scrollToStoredSection = () => {
      const targetSection = sessionStorage.getItem('scrollToSection')
      if (targetSection) {
        sessionStorage.removeItem('scrollToSection') // Clear it after use
        const element = document.getElementById(targetSection)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 500) // Delay to ensure page is fully loaded
        }
      }
    }
    
    // Handle hash navigation from other pages (like products page)
    const handleHashScroll = () => {
      if (window && window.location && window.location.hash) {
        // Check if it's a section hash (not a route hash like #/products)
        const hash = window.location.hash
        if (hash && !hash.startsWith('#/') && hash !== '#') {
          const id = hash.slice(1)
          const el = document.getElementById(id)
          if (el && typeof el.scrollIntoView === 'function') {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 300) // Increased delay to ensure page is loaded
          }
        }
      }
    }
    
    // Handle initial load
    handleHashScroll()
    scrollToStoredSection()
    
    // Handle hash changes
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
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
