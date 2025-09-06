import { useState, useCallback, useEffect } from 'react'
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
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const brands = [
    { 
      name: 'Mimosa Wireless', 
      logo: '/assets/img/clients/mimosa.png',
      description: 'High-performance wireless networking solutions for enterprise and service provider markets.',
      category: 'Wireless Solutions',
      products: [
        '/assets/img/portfolio/mimosa-1.jpg',
        '/assets/img/portfolio/mimosa-2.jpg',
        '/assets/img/portfolio/mimosa-4.jpg',
        '/assets/img/portfolio/mimosa-3.jpg'
      ]
    },
    { 
      name: 'Cambium Networks', 
      logo: '/assets/img/clients/cambium.png',
      description: 'Leading provider of wireless broadband solutions for enterprise and service provider markets.',
      category: 'Wireless Solutions',
      products: [
        '/assets/img/portfolio/cambium-1.jpg',
        '/assets/img/portfolio/cambium-2.jpg',
        '/assets/img/portfolio/cambium-3.jpg',
        '/assets/img/portfolio/cambium-4.jpeg'
      ]
    },
    { 
      name: 'RADWIN Wireless', 
      logo: '/assets/img/clients/images.png',
      description: 'Advanced wireless broadband solutions for point-to-point and point-to-multipoint connectivity.',
      category: 'Wireless Solutions',
      products: [
        '/assets/img/portfolio/radwin-1.jpeg',
        '/assets/img/portfolio/radwin-2.jpg',
        '/assets/img/portfolio/radwin-3.jpg',
        '/assets/img/portfolio/radwin-4.jpg'
      ]
    },
    { 
      name: 'Engenius', 
      logo: '/assets/img/clients/engenius.png',
      description: 'Professional networking equipment for small to medium businesses and enterprises.',
      category: 'Enterprise Networking',
      products: [
        '/assets/img/portfolio/engenius-1.jpg',
        '/assets/img/portfolio/engenius-2.jpg',
        '/assets/img/portfolio/engenius-3.jpeg',
        '/assets/img/portfolio/engenius-4.jpg'
      ]
    },
    { 
      name: 'Quantum Wireless', 
      logo: '/assets/img/clients/quantum.png',
      description: 'Innovative wireless solutions for business networking and connectivity needs.',
      category: 'Enterprise Networking',
      products: [
        '/assets/img/portfolio/quantum-1.jpg',
        '/assets/img/portfolio/quantum-2.png',
        '/assets/img/portfolio/quantum-3.png',
        '/assets/img/portfolio/quantum-4.jpg'
      ]
    },
    { 
      name: 'Aspera Walkie Talkie', 
      logo: '/assets/img/clients/aspera.png',
      description: 'Reliable two-way radio communication devices for professional and industrial use.',
      category: 'Communication Devices',
      products: [
        '/assets/img/portfolio/aspera-1.png',
        '/assets/img/portfolio/aspera-2.jpg',
        '/assets/img/portfolio/aspera-3.jpg',
        '/assets/img/portfolio/aspera-4.jpg'
      ]
    },
    { 
      name: 'Nexio Walkie Talkie', 
      logo: '/assets/img/clients/nexio.png',
      description: 'Advanced walkie talkie systems for seamless communication in various environments.',
      category: 'Communication Devices',
      products: [
        '/assets/img/portfolio/nexio-1.jpg',
        '/assets/img/portfolio/nexio-2.jpg',
        '/assets/img/portfolio/nexio-3.png',
        '/assets/img/portfolio/nexio-4.png'
      ]
    },
    { 
      name: 'Yealink', 
      logo: '/assets/img/clients/yealink.png',
      description: 'Professional VoIP phones and video conferencing solutions for modern businesses.',
      category: 'VoIP Solutions',
      products: [
        '/assets/img/portfolio/yealink-1.jpg',
        '/assets/img/portfolio/yealink-2.jpeg',
        '/assets/img/portfolio/yealink-3.jpeg',
        '/assets/img/portfolio/yealink-4.png'
      ]
    },
    { 
      name: 'People Link', 
      logo: '/assets/img/clients/poeple.png',
      description: 'Video conferencing and collaboration solutions for remote and hybrid work environments.',
      category: 'Video Conferencing',
      products: [
        '/assets/img/portfolio/peoplelink-1.jpg',
        '/assets/img/portfolio/peoplelink-2.jpg',
        '/assets/img/portfolio/peoplelink-3.png',
        '/assets/img/portfolio/peoplelink-4.jpg'
      ]
    },
    { 
      name: 'Star Splicing Machine', 
      logo: '/assets/img/clients/star.png',
      description: 'Professional fiber optic splicing equipment for high-quality cable installations.',
      category: 'Fiber Optic Tools',
      products: [
        '/assets/img/portfolio/star-1.jpg',
        '/assets/img/portfolio/star-2.jpg',
        '/assets/img/portfolio/star-3.jpg',
        '/assets/img/portfolio/star-4.jpg'
      ]
    },
    { 
      name: 'Lenovo', 
      logo: '/assets/img/clients/client-3.png',
      description: 'Enterprise computing solutions and professional workstations for business needs.',
      category: 'Computing Solutions',
      products: [
        '/assets/img/portfolio/lenovo-1.jpeg',
        '/assets/img/portfolio/lenovo-2.jpeg',
        '/assets/img/portfolio/lenovo-3.png',
        '/assets/img/portfolio/lenovo-4.jpg'
      ]
    },
    { 
      name: 'Acer', 
      logo: '/assets/img/clients/client-1.png',
      description: 'Reliable computing devices and business solutions for various organizational needs.',
      category: 'Computing Solutions',
      products: [
        '/assets/img/portfolio/acer-1.jpg',
        '/assets/img/portfolio/acer-2.jpg',
        '/assets/img/portfolio/acer-3.jpeg',
        '/assets/img/portfolio/acer-4.jpg'
      ]
    },
  ]

  const handleBrandClick = useCallback((brand) => {
    setSelectedBrand(brand)
  }, [])

  const handleClosePopup = useCallback(() => {
    setSelectedBrand(null)
  }, [])

  const handleImageClick = useCallback((imageSrc, imageIndex, brand) => {
    setSelectedImage(imageSrc)
    setCurrentImageIndex(imageIndex)
    setSelectedBrand(brand)
  }, [])

  const handleCloseImageViewer = useCallback(() => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }, [])

  const handleNextImage = useCallback(() => {
    if (selectedBrand && selectedBrand.products) {
      const nextIndex = (currentImageIndex + 1) % selectedBrand.products.length
      setCurrentImageIndex(nextIndex)
      setSelectedImage(selectedBrand.products[nextIndex])
    }
  }, [currentImageIndex, selectedBrand])

  const handlePrevImage = useCallback(() => {
    if (selectedBrand && selectedBrand.products) {
      const prevIndex = currentImageIndex === 0 
        ? selectedBrand.products.length - 1 
        : currentImageIndex - 1
      setCurrentImageIndex(prevIndex)
      setSelectedImage(selectedBrand.products[prevIndex])
    }
  }, [currentImageIndex, selectedBrand])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          handleCloseImageViewer()
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage()
        } else if (e.key === 'ArrowRight') {
          handleNextImage()
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, handleCloseImageViewer, handlePrevImage, handleNextImage])
  return (
    <>
      <Header />
      <div style={{ height: 74 }}></div>
      
      {/* Image Viewer Overlay */}
      {selectedImage && (
        <div 
          className="image-viewer-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={handleCloseImageViewer}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseImageViewer}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
              zIndex: 1002
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
          >
            ×
          </button>

          {/* Navigation Buttons */}
          {selectedBrand && selectedBrand.products.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevImage()
                }}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                  zIndex: 1002
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextImage()
                }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease',
                  zIndex: 1002
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                ›
              </button>
            </>
          )}

          {/* Main Image */}
          <img
            src={selectedImage}
            alt={`${selectedBrand?.name} Product ${currentImageIndex + 1}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'scaleIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          {selectedBrand && selectedBrand.products.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                zIndex: 1002
              }}
            >
              {currentImageIndex + 1} / {selectedBrand.products.length}
            </div>
          )}
        </div>
      )}

      {/* Background Overlay for Brand Popup */}
      {selectedBrand && !selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999,
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={handleClosePopup}
        />
      )}

      {/* Large Product Showcase Popup */}
      {selectedBrand && !selectedImage && (
        <div 
          className="product-showcase-popup"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: 1000,
            width: '90vw',
            maxWidth: '1000px',
            maxHeight: '85vh',
            overflow: 'hidden',
            animation: 'scaleIn 0.2s ease-out'
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '30px',
            color: 'white',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img 
                src={selectedBrand.logo} 
                alt={selectedBrand.name} 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  objectFit: 'contain', 
                  marginRight: '20px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '8px'
                }} 
              />
              <div>
                <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '700' }}>
                  {selectedBrand.name}
                </h2>
                <span style={{ 
                  fontSize: '14px', 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  padding: '6px 16px', 
                  borderRadius: '20px',
                  fontWeight: '500'
                }}>
                  {selectedBrand.category}
                </span>
              </div>
            </div>
            <p style={{ 
              margin: 0, 
              fontSize: '16px', 
              opacity: 0.9,
              lineHeight: '1.6' 
            }}>
              {selectedBrand.description}
            </p>
            <button
              onClick={handleClosePopup}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              ×
            </button>
          </div>

          {/* Product Gallery */}
          <div style={{
            padding: '30px',
            maxHeight: '60vh',
            overflowY: 'auto'
          }}>
            <h3 style={{ 
              marginBottom: '20px', 
              color: '#333', 
              fontSize: '22px',
              fontWeight: '600'
            }}>
              Featured Products
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {selectedBrand.products.map((product, index) => (
                <div 
                  key={index}
                  className="product-card"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                  }}
                >
                  <img 
                    src={product} 
                    alt={`${selectedBrand.name} Product ${index + 1}`}
                    className="product-image"
                    style={{
                      width: '100%',
                      height: '210px',
                      objectFit: 'cover',
                      display: 'block',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onClick={() => handleImageClick(product, index, selectedBrand)}
                  />
                  <div style={{
                    // padding: '12px',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <h5 style={{ 
                      margin: 0, 
                      color: '#333', 
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {/* {selectedBrand.name} Product {index + 1} */}
                    </h5>
                    <p style={{ 
                      margin: '6px 0 0 0', 
                      color: '#666', 
                      fontSize: '12px',
                      lineHeight: '1.3'
                    }}>
                      {/* Professional grade equipment */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Section id="products" title="Products we deal">
        <div className="row">
          {brands.map((b) => (
            <div key={b.name} className="col-lg-3 col-md-4 col-6 mb-4 d-flex align-items-stretch">
              <div 
                className="icon-box w-100 text-center" 
                style={{ 
                  padding: '24px 15px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease'
                }}
                onClick={() => handleBrandClick(b)}
              >
                <div style={{ height: 80 }} className="d-flex align-items-center justify-content-center">
                  <img 
                    src={b.logo} 
                    alt={b.name} 
                    className="img-fluid" 
                    style={{ 
                      maxHeight: '60px', 
                      objectFit: 'contain', 
                      filter: 'grayscale(0%)',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
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


