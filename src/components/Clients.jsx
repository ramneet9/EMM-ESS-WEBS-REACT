import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import CountUp from 'react-countup'
import { useState, useEffect, useRef } from 'react'

export default function Clients() {
  const logos = [
    'client-1', 'client-2', 'client-3', 'client-4', 'client-5', 'client-6', 'client-7', 'client-8',
    'mimosa', 'cambium', 'images', 'engenius', 'quantum', 'aspera', 'nexio', 'yealink', 
    'poeple', 'star'
  ]
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p>Trusted by leading brands worldwide</p>
        </div>
        
        {/* Circular Logo Carousel */}
        <div className="circular-carousel-container">
          <div className="circular-track">
            {logos.concat(logos).map((logoName, index) => (
              <div key={`${logoName}-${index}`} className="circular-logo-card">
                <div className="logo-card-inner">
                  <img 
                    src={`/assets/img/clients/${logoName}.png`} 
                    alt={`Client ${logoName}`} 
                    loading="lazy" 
                    className="client-logo"
                    onError={(e) => {
                      // Fallback to .jpg if .png doesn't exist
                      e.target.src = `/assets/img/clients/${logoName}.jpg`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="partners-stats" style={{ marginTop: 40, textAlign: 'center' }}>
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 style={{ fontSize: 32, fontWeight: 'bold', color: '#ffc451', margin: 0 }}>
                  {isVisible ? <CountUp end={10} duration={2} suffix="+" /> : '0+'}
                </h3>
                <p style={{ margin: 5, color: '#666' }}>Partners</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 style={{ fontSize: 32, fontWeight: 'bold', color: '#ffc451', margin: 0 }}>
                  {isVisible ? <CountUp end={120} duration={2} suffix="+" /> : '0+'}
                </h3>
                <p style={{ margin: 5, color: '#666' }}>Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 style={{ fontSize: 32, fontWeight: 'bold', color: '#ffc451', margin: 0 }}>
                  {isVisible ? <CountUp end={15} duration={2} suffix="+" /> : '0+'}
                </h3>
                <p style={{ margin: 5, color: '#666' }}>Years</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 style={{ fontSize: 32, fontWeight: 'bold', color: '#ffc451', margin: 0 }}>
                  {isVisible ? <CountUp end={24} duration={2} suffix="/7" /> : '0/7'}
                </h3>
                <p style={{ margin: 5, color: '#666' }}>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


