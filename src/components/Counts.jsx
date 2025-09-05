import CountUp from 'react-countup'

export default function Counts() {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
          <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Acknowledgments</h3>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <span><CountUp end={70} duration={1.2} /></span>
                    <p><strong>Happy Clients</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <span><CountUp end={100} duration={1.2} /></span>
                    <p><strong>Projects</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-clock-time"></i>
                    <span><CountUp end={6} duration={1.2} /></span>
                    <p><strong>Years of experience</strong></p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-award"></i>
                    <span><CountUp end={10} duration={1.2} /></span>
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


