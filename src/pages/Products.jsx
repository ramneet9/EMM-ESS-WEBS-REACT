import Header from '../components/Header'
import Footer from '../components/Footer'

function Section({ id, title, children }) {
  return (
    <section id={id} className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
          <p>{title}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

export default function ProductsPage() {
  const brands = [
    { name: 'Mimosa Wireless', logo: '/assets/img/clients/mimosa.png' },
    { name: 'Cambium Networks', logo: '/assets/img/clients/cambium.png' },
    { name: 'RADWIN Wireless', logo: '/assets/img/clients/images.png' },
    { name: 'Engenius', logo: '/assets/img/clients/engenius.png' },
    { name: 'Quantum Wireless', logo: '/assets/img/clients/quantum.png' },
    { name: 'Aspera Walkie Talkie', logo: '/assets/img/clients/aspera.png' },
    { name: 'Nexio Walkie Talkie', logo: '/assets/img/clients/nexio.png' },
    { name: 'Yealink', logo: '/assets/img/clients/yealink.png' },
    { name: 'People Link', logo: '/assets/img/clients/poeple.png' },
    { name: 'Star Splicing Machine', logo: '/assets/img/clients/star.png' },
    { name: 'Lenovo', logo: '/assets/img/clients/client-3.png' },
    { name: 'Acer', logo: '/assets/img/clients/client-1.png' },

  ]
  return (
    <>
      <Header />
      <div style={{ height: 74 }}></div>
      <Section id="products" title="Products we deal">
        <div className="row">
          {brands.map((b) => (
            <div key={b.name} className="col-lg-3 col-md-4 col-6 mb-4 d-flex align-items-stretch">
              <div className="icon-box w-100 text-center" style={{ padding: '24px 15px' }}>
                <div style={{ height: 80 }} className="d-flex align-items-center justify-content-center">
                  <img src={b.logo} alt={b.name} className="img-fluid" style={{ maxHeight: '60px', objectFit: 'contain', filter: 'grayscale(0%)' }} />
                </div>
                <h5 className="mt-3 mb-0">{b.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="categories" title="Product Categories">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Wireless Solutions</h4>
              <p className="mb-2">Mimosa Wireless, Cambium Networks and RADWIN Wireless for high-performance wireless connectivity.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Enterprise Networking</h4>
              <p className="mb-2">Engenius and Quantum Wireless solutions for business networking needs.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Communication Devices</h4>
              <p className="mb-2">Aspera and Nexio Walkie Talkies for reliable two-way communication.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>VoIP Solutions</h4>
              <p className="mb-2">Yealink products for professional VoIP and video conferencing.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Video Conferencing</h4>
              <p className="mb-2">People Link solutions for seamless video collaboration.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Fiber Optic Tools</h4>
              <p className="mb-2">Star Splicing Machine for professional fiber optic cable installations.</p>
            </div>
          </div>
        </div>
      </Section>
      <section className="cta">
        <div className="container text-center" data-aos="zoom-in">
          <h3>Ready To Work With Us?</h3>
          <a className="cta-btn" href="/#contact">Email Sales</a>
        </div>
      </section>
      <Footer />
    </>
  )
}


