import CountUp from 'react-countup'
import { useState, useEffect, useRef } from 'react'

export default function Counts() {
  const [isVisible, setIsVisible] = useState(false)
  const countsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (countsRef.current) {
      observer.observe(countsRef.current)
    }

    return () => {
      if (countsRef.current) {
        observer.unobserve(countsRef.current)
      }
    }
  }, [])

  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
          <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <div ref={countsRef} className="content d-flex flex-column justify-content-center">
              <h3>Acknowledgments</h3>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <span>{isVisible ? <CountUp end={200} duration={2} suffix="+" /> : '0'}</span>
                    <p><strong>Happy Clients</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <span>{isVisible ? <CountUp end={120} duration={2} suffix="+" /> : '0'}</span>
                    <p><strong>Projects</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-location-pin"></i>
                    <span>{isVisible ? <CountUp end={6} duration={2} /> : '0'}</span>
                    <p><strong>States</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-award"></i>
                    <span>{isVisible ? <CountUp end={8} duration={2} /> : '0'}</span>
                    <p><strong>Awards</strong></p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


