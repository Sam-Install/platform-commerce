import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useCart } from '../context/CartContext.jsx'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { cart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const lightPages = ['/cart', '/checkout', '/contacts', '/products', '/admin', '/user']
  const isLightPage = lightPages.some(p => location.pathname.startsWith(p))

  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contacts', path: '/contacts' },
  ]

  const isSolid = scrolled || isLightPage || menuOpen

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --cream: #f7f3ed;
          --sand: #e8ddd0;
          --taupe: #c9bdb0;
          --brown: #8a6f5e;
          --dark: #2c2018;
          --accent: #b5813c;
          --accent-light: #d4a55a;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .navbar.transparent {
          background: transparent;
          border-bottom: none;
          box-shadow: none;
        }

        .navbar.solid {
          background: var(--cream);
          border-bottom: 1px solid var(--sand);
          box-shadow: 0 2px 20px rgba(44,32,24,0.07);
        }

        .navbar-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.3px;
          text-decoration: none;
          transition: color 0.3s;
          line-height: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .navbar.transparent .nav-logo { color: #fff; }
        .navbar.solid .nav-logo { color: var(--dark); }

        .nav-logo-sub {
          font-size: 0.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          opacity: 0.6;
          margin-top: -2px;
        }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }

        .navbar.transparent .nav-link { color: rgba(255,255,255,0.82); }
        .navbar.transparent .nav-link:hover { color: #fff; }
        .navbar.transparent .nav-link.active { color: #fff; }
        .navbar.transparent .nav-link::after { background: rgba(255,255,255,0.7); }

        .navbar.solid .nav-link { color: var(--brown); }
        .navbar.solid .nav-link:hover { color: var(--dark); }
        .navbar.solid .nav-link.active { color: var(--dark); }
        .navbar.solid .nav-link::after { background: var(--accent); }

        .nav-icons {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: color 0.2s, transform 0.2s;
        }

        .nav-icon-btn:hover { transform: scale(1.1); }

        .navbar.transparent .nav-icon-btn { color: rgba(255,255,255,0.85); }
        .navbar.transparent .nav-icon-btn:hover { color: #fff; }
        .navbar.solid .nav-icon-btn { color: var(--brown); }
        .navbar.solid .nav-icon-btn:hover { color: var(--dark); }

        .nav-icon-btn svg { font-size: 1.1rem; }

        .cart-badge {
          position: absolute;
          top: -7px;
          right: -8px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          font-size: 0.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }

        .navbar.solid .cart-badge { border-color: var(--cream); }

        .profile-wrap { position: relative; }

        .profile-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          right: 0;
          width: 160px;
          background: var(--cream);
          border: 1px solid var(--sand);
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 12px 32px rgba(44,32,24,0.12);
          animation: dropIn 0.18s ease;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .profile-dropdown a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 0.82rem;
          color: var(--dark);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          font-weight: 400;
        }

        .profile-dropdown a:hover {
          background: var(--sand);
          color: var(--accent);
        }

        .profile-dropdown-divider {
          height: 1px;
          background: var(--sand);
          margin: 4px 0;
        }

        .hamburger { display: none; }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          width: 100%;
          background: var(--cream);
          border-bottom: 1px solid var(--sand);
          padding: 24px 32px 32px;
          box-shadow: 0 8px 32px rgba(44,32,24,0.1);
          animation: slideDown 0.22s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-menu.open { display: block; }

        .mobile-menu-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--taupe);
          margin-bottom: 14px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 20px;
        }

        .mobile-link {
          display: block;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--dark);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          letter-spacing: 0.02em;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: var(--sand);
          color: var(--accent);
        }

        .mobile-divider {
          height: 1px;
          background: var(--sand);
          margin: 14px 0;
        }

        .mobile-secondary {
          display: flex;
          gap: 10px;
        }

        .mobile-secondary a {
          flex: 1;
          padding: 10px;
          text-align: center;
          border: 1px solid var(--sand);
          border-radius: 10px;
          font-size: 0.78rem;
          color: var(--brown);
          text-decoration: none;
          transition: all 0.15s;
        }

        .mobile-secondary a:hover {
          background: var(--sand);
          color: var(--dark);
          border-color: var(--taupe);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .navbar-inner { padding: 0 20px; }
        }
      `}</style>

      <nav className={`navbar ${isSolid ? 'solid' : 'transparent'}`}>
        <div className="navbar-inner">

          <NavLink to="/" className="nav-logo">
            PabloStore
            <span className="nav-logo-sub">Premium Collection</span>
          </NavLink>

          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          <div className="nav-icons">

            <button className="nav-icon-btn" onClick={() => navigate('/cart')} aria-label="Cart">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <div
              className="profile-wrap"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <button className="nav-icon-btn" aria-label="Profile">
                <FaUser />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <NavLink to="/admin">⚙ Admin</NavLink>
                  <div className="profile-dropdown-divider" />
                  <NavLink to="/user">👤 My Account</NavLink>
                </div>
              )}
            </div>

            <button
              className="nav-icon-btn hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
            >
              {menuOpen ? <FaTimes style={{ fontSize: '1.1rem' }} /> : <FaBars style={{ fontSize: '1.1rem' }} />}
            </button>

          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-eyebrow">Navigation</div>
          <div className="mobile-links">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="mobile-divider" />
          <div className="mobile-secondary">
            <NavLink to="/admin" onClick={() => setMenuOpen(false)}>⚙ Admin</NavLink>
            <NavLink to="/user" onClick={() => setMenuOpen(false)}>👤 My Account</NavLink>
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>🛒 Cart {cartCount > 0 && `(${cartCount})`}</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar