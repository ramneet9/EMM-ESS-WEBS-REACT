import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <img src="/assets/img/founder.jpg" className="testimonial-img" alt="Founder" loading="lazy" />
              <h3>Gurpreet Singh</h3>
              <h4> Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Success usually comes to those who are too busy to be looking for it.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}


