import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img
              src={logo}
              alt="HABU Logo"
              className="navbar-logo-img"
            />
          </Link>

          <button
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={isActive('/products') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/dealer"
                className={isActive('/dealer') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Dealer
              </Link>
            </li>
            <li>
              <Link
                to="/training"
                className={isActive('/training') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                EV Training
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
