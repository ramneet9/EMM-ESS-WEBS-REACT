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
    { name: 'Mimosa', logo: '/assets/img/clients/client-1.png' },
    { name: 'Engenius', logo: '/assets/img/clients/client-2.png' },
    { name: 'Netgear', logo: '/assets/img/clients/client-3.png' },
    { name: 'Ligowave', logo: '/assets/img/clients/client-4.png' },
    { name: 'Mikrotik', logo: '/assets/img/clients/client-5.png' },
    { name: 'Hikvision', logo: '/assets/img/clients/client-6.png' },
    { name: 'Fortinet', logo: '/assets/img/clients/client-7.png' },
    { name: 'Polycom', logo: '/assets/img/clients/client-8.png' },
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
              <h4>Point to Point</h4>
              <p className="mb-2">High-throughput PTP links for backbone, last-mile and campus bridging.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Point to Multi Point</h4>
              <p className="mb-2">Reliable PTMP for enterprise Wi‑Fi, surveillance backhaul and ISP deployments.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Accessories</h4>
              <p className="mb-2">Antennas, PoE, mount kits and cables compatible with leading brands.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="icon-box h-100">
              <h4>Enterprise Wi‑Fi</h4>
              <p className="mb-2">Secure and scalable WLAN solutions for offices, campuses and hospitality.</p>
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


