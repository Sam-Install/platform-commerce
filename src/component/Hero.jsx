import React, { useEffect, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import st from '../assets/smartwatch.jpg'
import js from '../assets/jeans.jpeg'
import ip from '../assets/ips.jpeg'

const slides = [
  {
    image: js,
    label: 'New Season',
    headline: 'Dress for\nthe Moment',
    sub: 'Curated fashion, delivered to your door.',
  },
  {
    image: st,
    label: 'Tech Picks',
    headline: 'Time Moves\nDifferently',
    sub: 'Smart wearables for the modern lifestyle.',
  },
  {
    image: ip,
    label: 'Top Deals',
    headline: 'Power in\nYour Hands',
    sub: 'Flagship devices at unbeatable prices.',
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return
      setAnimating(true)
      setTimeout(() => {
        setCurrent(index)
        setAnimating(false)
      }, 600)
    },
    [animating, current]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [current, goTo])

  const slide = slides[current]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=DM+Sans:wght@300;400&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.8s ease, transform 0.8s ease;
          transform: scale(1.04);
        }
        .hero-bg.visible {
          opacity: 1;
          transform: scale(1);
        }
        .hero-bg.hidden {
          opacity: 0;
          transform: scale(1.04);
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.38) 55%,
            rgba(0,0,0,0.12) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 5vw 6vw;
          padding-bottom: 8vh;
          max-width: 760px;
        }

        .hero-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.6s 0.1s forwards;
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1.05;
          color: #fff;
          white-space: pre-line;
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.65s 0.22s forwards;
        }

        .hero-sub {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.65s 0.38s forwards;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.65s 0.5s forwards;
        }

        .btn-primary {
          background: #fff;
          color: #000;
          border: none;
          padding: 0.85rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-primary:hover {
          background: #e0e0e0;
        }

        .btn-secondary {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.45);
          padding: 0.85rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-secondary:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.08);
        }

        /* Slide indicators */
        .hero-indicators {
          position: absolute;
          bottom: 8vh;
          right: 6vw;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          align-items: flex-end;
        }

        .indicator-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .indicator-row.active {
          opacity: 1;
        }
        .indicator-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          font-weight: 300;
        }
        .indicator-line {
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.4);
          position: relative;
          overflow: hidden;
        }
        .indicator-row.active .indicator-line::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #fff;
          animation: lineGrow 5s linear forwards;
        }

        /* Store name — top left */
        .hero-brand {
          position: absolute;
          top: 2.5rem;
          left: 6vw;
          z-index: 10;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #fff;
        }

        /* Slide counter — top right */
        .hero-counter {
          position: absolute;
          top: 2.5rem;
          right: 6vw;
          z-index: 10;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>

      <div className="hero-root">
        {/* Background images */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-bg ${i === current ? 'visible' : 'hidden'}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="hero-gradient" />

       

        {/* Counter */}
        <div className="hero-counter">
          0{current + 1} / 0{slides.length}
        </div>

        {/* Main content — re-mounts on slide change to trigger animations */}
        <div className="hero-content" key={current}>
          <div className="hero-label">{slide.label}</div>
          <h1 className="hero-headline">{slide.headline}</h1>
          <p className="hero-sub">{slide.sub}</p>
          <div className="hero-actions">
            <NavLink to="/products">
              <button className="btn-primary">Shop Now</button>
            </NavLink>
            <NavLink to="/contacts">
              <button className="btn-secondary">Contact Us</button>
            </NavLink>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="hero-indicators">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`indicator-row ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            >
              <span className="indicator-label">{s.label}</span>
              <span className="indicator-line" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero