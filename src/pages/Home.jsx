import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { carouselImages } from '../config/carouselImages'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [carouselImages.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Powering India's Future with
                <span className="highlight"> Electric Mobility</span>
              </h1>
              <p className="hero-subtitle">
                Eco-friendly, affordable, and made for India. Join the electric revolution 
                with our premium electric rickshaws and EV solutions.
              </p>
              <div className="hero-cta">
                <Link to="/products" className="btn btn-primary">
                  View Products
                </Link>
                <Link to="/dealer" className="btn btn-secondary">
                  Become a Dealer
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <span className="ev-icon">🚗⚡</span>
                <p>Electric Rickshaw</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section">
        <div className="container">
          <h2 className="section-title">HABU EV INDUSTRY INTRODUCING INDIA’S FIRST BUSINESS ON WHEELS CONCEPT.</h2>
          <div className="highlights-grid">
            <div className="highlight-card card">
              <div className="highlight-icon">🌱</div>
              <h3>Zero Emission</h3>
              <p>100% eco-friendly with zero carbon footprint. Help reduce air pollution and contribute to a cleaner India.</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">💰</div>
              <h3>Low Running Cost</h3>
              <p>Save up to 80% on fuel costs compared to traditional vehicles. Charge at home or at charging stations.</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">🔋</div>
              <h3>High Mileage</h3>
              <p>Travel up to 120 km on a single charge. Perfect for daily commutes and commercial use.</p>
            </div>
            <div className="highlight-card card">
              <div className="highlight-icon">🛠️</div>
              <h3>Low Maintenance</h3>
              <p>Fewer moving parts mean lower maintenance costs. Built to last with quality components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section section bg-light">
        <div className="container">
          <h2 className="section-title">Our Electric Rickshaw Collection</h2>
          <p className="section-subtitle">
            Explore our range of premium electric rickshaws and customized solutions
          </p>
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious} aria-label="Previous slide">
                ‹
              </button>
              <div className="carousel-slides">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <div className="carousel-image-container">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="carousel-image"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.target.src = `https://via.placeholder.com/1200x600/00a859/ffffff?text=${encodeURIComponent(image.title)}`
                          e.target.onerror = null // Prevent infinite loop
                        }}
                      />
                      <div className="carousel-overlay">
                        <h3 className="carousel-title">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Next slide">
                ›
              </button>
            </div>
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="carousel-cta">
              <Link to="/products" className="btn btn-primary btn-large carousel-cta-btn">
                Show More Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="section-title">Built for Indian Roads</h2>
              <p className="section-subtitle">
                Our electric rickshaws are designed keeping Indian road conditions, 
                weather, and usage patterns in mind.
              </p>
              <ul className="features-list">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Robust Build Quality</strong>
                    <p>Withstand rough terrains and heavy-duty usage</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Government Subsidies</strong>
                    <p>Eligible for FAME II and state EV incentives</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Warranty & Support</strong>
                    <p>Comprehensive warranty with pan-India service network</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Easy Financing</strong>
                    <p>Flexible EMI options and loan assistance available</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="features-image">
              <div className="features-placeholder">
                <span className="ev-icon-large">🚛⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Go Electric?</h2>
            <p>Join thousands of satisfied customers who have made the switch to electric mobility</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary btn-large">
                Explore Our Products
              </Link>
              <Link to="/training" className="btn btn-secondary btn-large">
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
