import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import sm from '../assets/smartwatch.jpg'

const Promo = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .promo-section {
          background: #f7f3ed;
          padding: 0 40px 100px;
          font-family: 'DM Sans', sans-serif;
        }

        .promo-wrap {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          isolation: isolate;
        }

        /* Image */
        .promo-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          transition: transform 8s ease;
        }

        .promo-wrap:hover .promo-img {
          transform: scale(1.04);
        }

        /* Overlays */
        .promo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(20, 12, 6, 0.82) 0%,
            rgba(20, 12, 6, 0.55) 50%,
            rgba(20, 12, 6, 0.25) 100%
          );
        }

        /* Decorative grain */
        .promo-grain {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }

        /* Accent line — left edge */
        .promo-accent-line {
          position: absolute;
          left: 48px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(181,129,60,0.6), transparent);
        }

        /* Content */
        .promo-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 72px;
          max-width: 620px;
        }

        .promo-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(181,129,60,0.18);
          border: 1px solid rgba(181,129,60,0.4);
          border-radius: 2px;
          padding: 5px 14px;
          margin-bottom: 22px;
          width: fit-content;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s;
        }

        .promo-badge.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b5813c;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .promo-badge-text {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4a55a;
          font-weight: 400;
        }

        .promo-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          line-height: 1.0;
          color: #fff;
          margin: 0 0 6px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease 0.22s, transform 0.6s ease 0.22s;
        }

        .promo-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-title em {
          font-style: italic;
          color: #d4a55a;
        }

        .promo-discount {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 8vw, 7rem);
          font-weight: 600;
          line-height: 0.9;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease 0.34s, transform 0.6s ease 0.34s;
        }

        .promo-discount.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-discount span {
          font-size: 0.38em;
          font-weight: 300;
          vertical-align: super;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.05em;
        }

        .promo-sub {
          font-size: 0.88rem;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 340px;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.55s ease 0.46s, transform 0.55s ease 0.46s;
        }

        .promo-sub.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease 0.56s, transform 0.5s ease 0.56s;
        }

        .promo-actions.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-btn-primary {
          background: #b5813c;
          color: #fff;
          border: none;
          padding: 0.9rem 2.2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
        }

        .promo-btn-primary:hover {
          background: #c9923f;
          transform: translateY(-1px);
        }

        .promo-btn-secondary {
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }

        .promo-btn-secondary:hover {
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.6);
        }

        /* Right-side stat pills */
        .promo-stats {
          position: absolute;
          right: 48px;
          bottom: 44px;
          display: flex;
          gap: 12px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease 0.65s, transform 0.5s ease 0.65s;
        }

        .promo-stats.show {
          opacity: 1;
          transform: translateY(0);
        }

        .promo-stat {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 2px;
          padding: 10px 18px;
          text-align: center;
          backdrop-filter: blur(6px);
        }

        .promo-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          display: block;
          line-height: 1;
        }

        .promo-stat-label {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: block;
          margin-top: 4px;
        }

        /* Countdown */
        .promo-timer {
          position: absolute;
          right: 48px;
          top: 44px;
          display: flex;
          gap: 6px;
          align-items: center;
          opacity: 0;
          transition: opacity 0.5s ease 0.7s;
        }

        .promo-timer.show { opacity: 1; }

        .promo-timer-label {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-right: 4px;
        }

        .promo-timer-unit {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          padding: 4px 8px;
          text-align: center;
          min-width: 38px;
        }

        .promo-timer-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: #fff;
          font-weight: 600;
          display: block;
          line-height: 1;
        }

        .promo-timer-sub {
          font-size: 0.5rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: block;
        }

        @media (max-width: 768px) {
          .promo-section { padding: 0 20px 72px; }
          .promo-img { height: 520px; object-position: 70% center; }
          .promo-content { padding: 0 28px; max-width: 100%; }
          .promo-stats { display: none; }
          .promo-timer { display: none; }
          .promo-accent-line { display: none; }
        }
      `}</style>

      <section className="promo-section">
        <div className="promo-wrap" ref={ref}>

          <img src={sm} alt="Promo Banner" className="promo-img" />
          <div className="promo-overlay" />
          <div className="promo-grain" />
          <div className="promo-accent-line" />

          {/* Content */}
          <div className="promo-content">

            <div className={`promo-badge ${visible ? 'show' : ''}`}>
              <span className="promo-badge-dot" />
              <span className="promo-badge-text">Limited Time Offer</span>
            </div>

            <h2 className={`promo-title ${visible ? 'show' : ''}`}>
              Exclusive <em>deals</em>
            </h2>

            <div className={`promo-discount ${visible ? 'show' : ''}`}>
              30<span>% off</span>
            </div>

            <p className={`promo-sub ${visible ? 'show' : ''}`}>
              Shop selected items before the offer ends. Premium products at prices that won't last.
            </p>

            <div className={`promo-actions ${visible ? 'show' : ''}`}>
              <NavLink to="/products" className="promo-btn-primary">
                Shop Now
              </NavLink>
              <NavLink to="/products" className="promo-btn-secondary">
                View all deals
              </NavLink>
            </div>

          </div>

          {/* Countdown timer — top right */}
          <div className={`promo-timer ${visible ? 'show' : ''}`}>
            <span className="promo-timer-label">Ends in</span>
            {[['02', 'Days'], ['14', 'Hrs'], ['38', 'Min']].map(([num, label]) => (
              <div key={label} className="promo-timer-unit">
                <span className="promo-timer-num">{num}</span>
                <span className="promo-timer-sub">{label}</span>
              </div>
            ))}
          </div>

          {/* Stats — bottom right */}
          <div className={`promo-stats ${visible ? 'show' : ''}`}>
            {[['200+', 'Items'], ['30%', 'Max Save'], ['48h', 'Left']].map(({ 0: num, 1: label }) => (
              <div key={label} className="promo-stat">
                <span className="promo-stat-num">{num}</span>
                <span className="promo-stat-label">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Promo