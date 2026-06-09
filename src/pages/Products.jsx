import '../styles/Products.css'
import { productImages } from '../config/productImages'

const Products = () => {
  const twoWheelers = productImages.twoWheelers
  const twoWheelersSection = productImages.twoWheelersSection
  const batteries = productImages.batteries

  return (
    <main>
      {/* Hero Section */}
      <section className="products-hero section">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Explore our range of electric rickshaws, customized solutions, and battery options
          </p>
        </div>
      </section>

      {/* Two Wheelers Section */}
      <section className="products-section section">
        <div className="container">
          <h2 className="section-title">Electric Rickshaws</h2>
          <p className="section-subtitle">
            High-performance electric rickshaws designed for Indian roads and weather conditions
          </p>
          <div className="products-grid">
            {twoWheelers.map((vehicle, index) => (
              <div key={index} className="product-card-simple card">
                <div className="product-image-simple">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="product-img-simple"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/00a859/ffffff?text=${encodeURIComponent(vehicle.name)}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Wheelers Section */}
      <section className="products-section section bg-light">
        <div className="container">
          <h2 className="section-title">Two Wheelers</h2>
          <p className="section-subtitle">
            Explore our range of electric two wheelers
          </p>
          <div className="products-grid">
            {twoWheelersSection.map((item, index) => (
              <div key={index} className="product-card-simple card">
                <div className="product-image-simple">
                  <img
                    src={item.image}
                    alt={`Two Wheeler ${index + 1}`}
                    className="product-img-simple"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/00a859/ffffff?text=Two+Wheeler+${index + 1}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batteries Section */}
      <section className="products-section section">
        <div className="container">
          <h2 className="section-title">Batteries & Charging Solutions</h2>
          <p className="section-subtitle">
            Choose from our range of high-quality batteries with warranty and support
          </p>
          <div className="batteries-grid">
            {batteries.map((battery, index) => (
              <div key={index} className="product-card-simple card">
                <div className="product-image-simple">
                  <img
                    src={battery.image}
                    alt={battery.type}
                    className="product-img-simple"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/00a859/ffffff?text=${encodeURIComponent(battery.type)}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta section bg-light">
        <div className="container">
          <div className="products-cta-content">
            <h2>Need Help Choosing?</h2>
            <p>Our experts are here to help you find the perfect electric vehicle solution for your needs</p>
            <button className="btn btn-primary btn-large">Contact Sales Team</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products
