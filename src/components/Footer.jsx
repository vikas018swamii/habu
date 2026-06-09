import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <div className="footer-logo-container">
                <div className="footer-logo-icon-wrapper">
                  <span className="logo-icon">⚡</span>
                  <div className="logo-icon-glow"></div>
                </div>
                <div className="footer-logo-text-wrapper">
                  <span className="logo-text">HABU</span>
                  <span className="logo-subtext">EV INDUSTRY</span>
                </div>
              </div>
            </h3>
            <p className="footer-description">
              Leading the electric mobility revolution in India with sustainable, 
              affordable, and reliable EV solutions.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/dealer">Become a Dealer</Link></li>
              <li><Link to="/training">EV Training</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">Electric Rickshaws</Link></li>
              <li><Link to="/products">Customized EVs</Link></li>
              <li><Link to="/products">Batteries</Link></li>
              <li><Link to="/products">Charging Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 +91 1800-XXX-XXXX</li>
              <li>✉️ info@habuev.in</li>
              <li>📍 New Delhi, India</li>
              <li>🕒 Mon-Sat: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 HABU EV INDUSTRY. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
