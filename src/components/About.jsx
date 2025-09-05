export default function About() {
  return (
    <section id="About" className="About">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="/assets/img/about.jpg" className="img-fluid" alt="About EMM ESS Enterprises" loading="lazy" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>WELCOME</h3>
            <p className="font-italic">
              EMM ESS is a key supplier of IT infrastructure, wireless links, surveillance, and business application services to organizations of all sizes. We are a preferred partner to private and public enterprises in India.
            </p>
            <p>
              We follow rigorous processes to ensure our products and services meet high standards. Our aim is to enhance client competitiveness with timely, reliable, and cost‑effective solutions through continuous improvement and strong supplier partnerships.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> 24x7 Client Support.</li>
              <li><i className="ri-check-double-line"></i> High Quality Service.</li>
              <li><i className="ri-check-double-line"></i> Best Performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


