import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

export default function Clients() {
  const logos = [1,2,3,4,5,6,7,8]
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="section-title" style={{ paddingBottom: 20 }}>
          <h2 style={{ fontSize: 18 }}>Our Partners</h2>
          <p style={{ fontSize: 40 }}>Trusted by leading brands</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            900: { slidesPerView: 6, spaceBetween: 20 }
          }}
        >
          {logos.map((n) => (
            <SwiperSlide key={n}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 130, padding: 12, background: '#fff', borderRadius: 8, boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
                <img src={`/assets/img/clients/client-${n}.png`} alt={`Client ${n}`} loading="lazy" style={{ maxWidth: '95%', maxHeight: '100px', objectFit: 'contain' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


