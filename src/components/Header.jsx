import { useEffect, useState } from 'react'

export default function Header() {
  const isInner = typeof window !== 'undefined' && window.location && window.location.pathname !== '/'
  const isProducts = typeof window !== 'undefined' && window.location && window.location.pathname === '/products'
  const [activeId, setActiveId] = useState('hero')
  const [mobileNavActive, setMobileNavActive] = useState(false)

  useEffect(() => {
    if (isProducts) return
    const sectionIds = ['hero', 'About', 'Services', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!('IntersectionObserver' in window) || sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isProducts])
  const scrollToId = (id) => (e) => {
    e.preventDefault()
    setMobileNavActive(false) // Close mobile nav when clicking a link
    
    if (isProducts) {
      // If on products page, navigate to home first, then scroll
      window.location.href = `/#${id}`
    } else {
      // If on home page, just scroll to section
      window.location.hash = id
    }
  }

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive)
  }

  // Add/remove body class for mobile nav
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [mobileNavActive])
  return (
    <>
      <header id="header" className={`fixed-top header-scrolled ${isInner ? 'header-inner-pages' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <a href="#hero" onClick={scrollToId('hero')} className="logo"><img src="/assets/img/emmessname.png" alt="EMM ESS Enterprises" className="img-fluid" /></a>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className={!isProducts && activeId === 'hero' ? 'active' : ''}><a href={isProducts ? '/#hero' : '#hero'}>Home</a></li>
              <li className={!isProducts && activeId === 'About' ? 'active' : ''}><a href={isProducts ? '/#About' : '#About'}>About</a></li>
              <li className={!isProducts && activeId === 'Services' ? 'active' : ''}><a href={isProducts ? '/#Services' : '#Services'}>Services</a></li>
              <li className={isProducts ? 'active' : ''}><a href="/products">Products</a></li>
              <li className={!isProducts && activeId === 'contact' ? 'active' : ''}><a href={isProducts ? '/#contact' : '#contact'}>Contact</a></li>
            </ul>
          </nav>
          {!isProducts && (
            <a href="#About" onClick={scrollToId('About')} className="get-started-btn scrollto d-none d-lg-block">Get Started</a>
          )}
          <i className={`mobile-nav-toggle ${mobileNavActive ? 'icofont-close' : 'icofont-navigation-menu'}`} onClick={toggleMobileNav}></i>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
        <ul>
          <li className={!isProducts && activeId === 'hero' ? 'active' : ''}>
            <a href={isProducts ? '/#hero' : '#hero'} onClick={scrollToId('hero')}>Home</a>
          </li>
          <li className={!isProducts && activeId === 'About' ? 'active' : ''}>
            <a href={isProducts ? '/#About' : '#About'} onClick={scrollToId('About')}>About</a>
          </li>
          <li className={!isProducts && activeId === 'Services' ? 'active' : ''}>
            <a href={isProducts ? '/#Services' : '#Services'} onClick={scrollToId('Services')}>Services</a>
          </li>
          <li className={isProducts ? 'active' : ''}>
            <a href="/products" onClick={(e) => {
              e.preventDefault()
              setMobileNavActive(false)
              if (!isProducts) {
                window.location.href = '/products'
              }
            }}>Products</a>
          </li>
          <li className={!isProducts && activeId === 'contact' ? 'active' : ''}>
            <a href={isProducts ? '/#contact' : '#contact'} onClick={scrollToId('contact')}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileNavActive && (
        <div className="mobile-nav-overly" onClick={() => setMobileNavActive(false)}></div>
      )}
    </>
  )
}


