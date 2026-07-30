import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { carouselImages } from '../config/carouselImages'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    const timer2 = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    )
  }

  const goToNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % carouselImages.length
    )
  }

  return (
    <main>
      {/* Hero Banner */}
      <img
        src="/images/banner/b.jpeg"
        alt="Banner"
        className="hero-banner"
        style={{
          width: '100%',
          display: 'block'
        }}
      />

      {/* FIRST CAROUSEL */}
      <section className="carousel-section section bg-light">
        <div className="container">
          <h2 className="section-title">
            HABU EV INDUSTRY INTRODUCING INDIA'S FIRST BUSINESS ON WHEELS CONCEPT
          </h2>

          <p className="section-subtitle">
            Explore our range of premium electric rickshaws and customized solutions
          </p>

          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={goToPrevious}
                aria-label="Previous slide"
              >
                ‹
              </button>

              <div className="carousel-slides">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`carousel-slide ${
                      index === currentSlide ? 'active' : ''
                    }`}
                  >
                    <div className="carousel-image-container">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="carousel-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/1200x600/00a859/ffffff?text=${encodeURIComponent(
                            image.title
                          )}`
                          e.target.onerror = null
                        }}
                      />

                      <div className="carousel-overlay">
                        <h3 className="carousel-title">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-btn carousel-btn-next"
                onClick={goToNext}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${
                    index === currentSlide ? 'active' : ''
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-cta">
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CAROUSEL */}
      <section className="carousel-section section">
        <div className="container">
            <div className="carousel-container">
            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={() =>
                  setCurrentSlide2(
                    (prev) =>
                      (prev - 1 + carouselImages.length) %
                      carouselImages.length
                  )
                }
              >
                ‹
              </button>

              <div className="carousel-slides">
                {carouselImages.map((image, index) => (
                  <div
                    key={`second-${image.id}`}
                    className={`carousel-slide ${
                      index === currentSlide2 ? 'active' : ''
                    }`}
                  >
                    <div className="carousel-image-container">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="carousel-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/1200x600/00a859/ffffff?text=${encodeURIComponent(
                            image.title
                          )}`
                          e.target.onerror = null
                        }}
                      />

                      <div className="carousel-overlay">
                        <h3 className="carousel-title">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-btn carousel-btn-next"
                onClick={() =>
                  setCurrentSlide2(
                    (prev) => (prev + 1) % carouselImages.length
                  )
                }
              >
                ›
              </button>
            </div>

            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${
                    index === currentSlide2 ? 'active' : ''
                  }`}
                  onClick={() => setCurrentSlide2(index)}
                />
              ))}
            </div>

            <div className="carousel-cta">
              <Link
                to="/products"
                className="btn btn-primary btn-large carousel-cta-btn"
              >
                View Products→
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
<section className="process-section section">
  <div className="container">

    <span className="process-badge">
      HOW IT WORKS
    </span>

    <h2 className="section-title">
      Our 4-Step Process
    </h2>

    <p className="section-subtitle">
      From concept to delivery, we help you launch your business on wheels
      with a streamlined process.
    </p>

    <div className="process-grid">

      <div className="process-card">
        <div className="process-icon">
          💬
        </div>

        <span className="process-number">
          01
        </span>

        <h3>
          Consultation
        </h3>

        <p>
          We understand your business idea, requirements and budget before
          starting the project.
        </p>
      </div>

      <div className="process-card">
        <div className="process-icon">
          📐
        </div>

        <span className="process-number">
          02
        </span>

        <h3>
          Design & Planning
        </h3>

        <p>
          Our experts prepare the layout, dimensions and customization plan
          according to your business.
        </p>
      </div>

      <div className="process-card">
        <div className="process-icon">
          🛠️
        </div>

        <span className="process-number">
          03
        </span>

        <h3>
          Manufacturing
        </h3>

        <p>
          Skilled engineers manufacture your vehicle using premium materials
          with strict quality checks.
        </p>
      </div>

      <div className="process-card">
        <div className="process-icon">
          🚚
        </div>

        <span className="process-number">
          04
        </span>

        <h3>
          Delivery & Support
        </h3>

        <p>
          We deliver your customized vehicle and provide after-sales support
          whenever required.
        </p>
      </div>

    </div>

    <div className="process-cta">

      <h3>
        Ready to Bring Your Ideal Cart to Life?
      </h3>

      <p>
        Contact our team today and take the first step towards your custom
        business cart.
      </p>

      <Link
        to="/contact"
        className="btn btn-primary btn-large"
      >
        Schedule Your Consultation →
      </Link>

    </div>

  </div>
</section>

{/* CTA SECTION */}

      {/* CTA SECTION */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Go Electric?</h2>

            <p>
              Join thousands of satisfied customers who have made the switch
              to electric mobility
            </p>

            <div className="cta-buttons">
              <Link
                to="/products"
                className="btn btn-primary btn-large"
              >
                Explore Our Products
              </Link>

              <Link
                to="/training"
                className="btn btn-secondary btn-large"
              >
                Learn EV Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home