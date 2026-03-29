import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream: #f7f3ed;
          --warm-white: #faf8f5;
          --sand: #e8ddd0;
          --taupe: #c9bdb0;
          --brown: #8a6f5e;
          --dark: #2c2018;
          --accent: #b5813c;
          --accent-light: #d4a55a;
        }

        .footer {
          background: var(--cream);
          border-top: 1px solid var(--sand);
          font-family: 'DM Sans', sans-serif;
          margin-top: 0;
        }

        /* SPACER BRIDGE — creates breathing room between Testimonials (dark) and Footer (cream) */
        .footer-bridge {
          background: var(--dark);
          padding-bottom: 72px;
        }

        .footer-bridge-inner {
          background: var(--cream);
          border-radius: 32px 32px 0 0;
          overflow: hidden;
        }

        /* NEWSLETTER BAND */
        .footer-newsletter {
          background: var(--dark);
          padding: 52px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-newsletter-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
        }

        .footer-newsletter-text p {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        .footer-newsletter-form {
          display: flex;
          gap: 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          flex-shrink: 0;
        }

        .footer-newsletter-form input {
          padding: 13px 20px;
          background: rgba(255,255,255,0.06);
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: #fff;
          width: 240px;
        }

        .footer-newsletter-form input::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .footer-newsletter-form button {
          padding: 13px 22px;
          background: var(--accent);
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .footer-newsletter-form button:hover {
          background: var(--accent-light);
        }

        /* MAIN FOOTER */
        .footer-main {
          padding: 64px 64px 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--sand);
        }

        /* BRAND COL */
        .footer-brand-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark);
          letter-spacing: -0.3px;
          margin: 0 0 4px;
          display: block;
          text-decoration: none;
        }

        .footer-brand-tagline {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
          display: block;
        }

        .footer-brand-desc {
          font-size: 0.83rem;
          color: var(--brown);
          line-height: 1.8;
          margin: 0 0 24px;
          max-width: 260px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid var(--sand);
          background: var(--warm-white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .footer-social-btn:hover {
          background: var(--dark);
          color: #fff;
          border-color: var(--dark);
        }

        /* LINK COLS */
        .footer-col-title {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--dark);
          font-weight: 600;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--sand);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a,
        .footer-links span {
          font-size: 0.83rem;
          color: var(--brown);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
          display: block;
        }

        .footer-links a:hover,
        .footer-links span:hover {
          color: var(--accent);
        }

        /* CONTACT COL */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .footer-contact-icon {
          font-size: 0.75rem;
          color: var(--accent);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .footer-contact-text {
          font-size: 0.83rem;
          color: var(--brown);
          line-height: 1.5;
        }

        .footer-trust {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footer-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--taupe);
        }

        /* BOTTOM BAR */
        .footer-bottom {
          padding: 24px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-bottom-copy {
          font-size: 0.75rem;
          color: var(--taupe);
        }

        .footer-bottom-copy span {
          color: var(--accent);
          font-style: italic;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-links a {
          font-size: 0.72rem;
          color: var(--taupe);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover { color: var(--accent); }

        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: var(--taupe);
          padding: 5px 12px;
          border: 1px solid var(--sand);
          border-radius: 20px;
          background: var(--warm-white);
        }

        @media (max-width: 900px) {
          .footer-newsletter { padding: 36px 28px; }
          .footer-newsletter-form input { width: 180px; }
          .footer-main { padding: 48px 28px 0; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-bottom { padding: 20px 28px; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-newsletter { flex-direction: column; gap: 20px; }
          .footer-newsletter-form { width: 100%; }
          .footer-newsletter-form input { flex: 1; width: auto; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
          .footer-bottom-badge { display: none; }
        }
      `}</style>

      {/* BRIDGE — rounds footer up from dark testimonials section */}
      <div className="footer-bridge">
        <div className="footer-bridge-inner">

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-text">
              <h3>Stay in the Loop</h3>
              <p>New arrivals, exclusive deals, and style tips — straight to your inbox.</p>
            </div>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="footer-main">
            <div className="footer-grid">

              {/* BRAND */}
              <div>
                <NavLink to="/" className="footer-brand-logo">PabloStore</NavLink>
                <span className="footer-brand-tagline">Premium Collection · Kenya</span>
                <p className="footer-brand-desc">
                  Your trusted destination for quality products, great prices, and a seamless shopping experience — delivered to your door.
                </p>
                <div className="footer-socials">
                  <a className="footer-social-btn" href="#"><FaFacebook /></a>
                  <a className="footer-social-btn" href="#"><FaInstagram /></a>
                  <a className="footer-social-btn" href="#"><FaTwitter /></a>
                </div>
              </div>

              {/* SHOP */}
              <div>
                <div className="footer-col-title">Shop</div>
                <ul className="footer-links">
                  <li><NavLink to="/products">All Products</NavLink></li>
                  <li><NavLink to="/products/shoes">Shoes</NavLink></li>
                  <li><NavLink to="/products/watches">Watches</NavLink></li>
                  <li><NavLink to="/products/handbags">Handbags</NavLink></li>
                  <li><NavLink to="/products/phones">Phones</NavLink></li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div>
                <div className="footer-col-title">Support</div>
                <ul className="footer-links">
                  <li><NavLink to="/contacts">Contact Us</NavLink></li>
                  <li><span>FAQs</span></li>
                  <li><span>Shipping Info</span></li>
                  <li><span>Returns</span></li>
                  <li><span>Track Order</span></li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <div className="footer-col-title">Contact</div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉</span>
                  <span className="footer-contact-text">support@pablostore.co.ke</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✆</span>
                  <span className="footer-contact-text">+254 712 345 678</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">◷</span>
                  <span className="footer-contact-text">Mon – Sat · 8am to 6pm</span>
                </div>
                <div className="footer-trust">
                  <div className="footer-trust-item"><span>🔒</span> Secure Checkout</div>
                  <div className="footer-trust-item"><span>🚚</span> Free Delivery over Ksh 5,000</div>
                  <div className="footer-trust-item"><span>↩</span> 14-Day Returns</div>
                </div>
              </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
              <p className="footer-bottom-copy">
                © {new Date().getFullYear()} PabloStore. Made with <span>love</span> in Kenya.
              </p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
              <div className="footer-bottom-badge">
                🇰🇪 Delivering across Kenya
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer