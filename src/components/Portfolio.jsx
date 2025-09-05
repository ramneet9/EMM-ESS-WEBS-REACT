import { useMemo, useState } from 'react'

const items = [
  { id: 1, img: '/assets/img/portfolio/portfolio-1.jpg', title: 'Field', cat: 'app' },
  { id: 2, img: '/assets/img/portfolio/testing1.jpg', title: 'Camera', cat: 'web' },
  { id: 3, img: '/assets/img/portfolio/portfolio-2.jpg', title: 'Field', cat: 'app' },
  { id: 4, img: '/assets/img/portfolio/portfolio-4.png', title: 'Device', cat: 'card' },
  { id: 5, img: '/assets/img/portfolio/portfolio-5.jpg', title: 'Camera', cat: 'web' },
  { id: 6, img: '/assets/img/portfolio/portfolio-6.jpg', title: 'Field', cat: 'app' },
  { id: 7, img: '/assets/img/portfolio/portfolio-7.jpg', title: 'Device', cat: 'card' },
  { id: 8, img: '/assets/img/portfolio/portfolio-8.jpg', title: 'Device', cat: 'card' },
  { id: 9, img: '/assets/img/portfolio/portfolio-9.jpg', title: 'Camera', cat: 'web' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('*')
  const filtered = useMemo(() => {
    if (filter === '*') return items
    return items.filter((i) => i.cat === filter)
  }, [filter])

  return (
    <section id="Portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li className={filter==='*' ? 'filter-active' : ''} onClick={() => setFilter('*')}>All</li>
              <li className={filter==='app' ? 'filter-active' : ''} onClick={() => setFilter('app')}>Field</li>
              <li className={filter==='card' ? 'filter-active' : ''} onClick={() => setFilter('card')}>Devices</li>
              <li className={filter==='web' ? 'filter-active' : ''} onClick={() => setFilter('web')}>Security</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: 'stretch' }}>
          {filtered.map((it) => (
            <div key={it.id} className={`col-lg-4 col-md-6 portfolio-item filter-${it.cat}`}>
              <div className="portfolio-wrap" style={{ height: '100%' }}>
                <img src={it.img} className="img-fluid" alt={it.title} loading="lazy" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
                <div className="portfolio-info">
                  <h4>{it.title}</h4>
                  <p>{it.id}</p>
                  <div className="portfolio-links">
                    <a href={it.img} data-gall="portfolioGallery" className="venobox" title={it.title}><i className="bx bx-plus"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


