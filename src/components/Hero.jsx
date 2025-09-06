export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-6 col-lg-8">
            <h1>Powerful IT Solutions With EEE<span>.</span></h1>
            <h2 className="skills">EMM ESS ENTERPRISES - Solutions Simplified<span>.</span></h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div className="col-xl-2 col-md-4 col-6">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>IT Infrastructure</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 ">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Wireless Solutions</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Surveillance Support</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Business Applications</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div className="icon-box">
              <i className="ri-database-2-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Maintenance Support</a></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
            <div className="icon-box">
              <i className="ri-database-2-line"></i>
              <h3><a href="#" onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('Services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>Product Vendor Services</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


