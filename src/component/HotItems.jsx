import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiTruck, FiRefreshCw, FiLock, FiArrowRight } from 'react-icons/fi'
import gl from '../assets/sunglasses.jpg'
import snk from '../assets/sneakers.jpg'
import lth from '../assets/leather.jpg'
import hd from '../assets/headphone.jpg'
import hnb from '../assets/handbags.jpg'
import smrt from '../assets/smartwatch.jpg'

const HotItems = () => {
  const items = [
    {
      image: snk,
      title: "Classic Sneakers",
      desc: "Crafted for all-day comfort with a clean silhouette that pairs effortlessly with any outfit — from morning runs to evening strolls.",
      tag: "Footwear",
      id: 1
    },
    {
      image: smrt,
      title: "Smart Watch",
      desc: "Stay ahead of your day. Track fitness metrics, receive notifications, and monitor your health — all from an elegant wrist companion.",
      tag: "Wearables",
      id: 8
    },
    {
      image: hnb,
      title: "Leather Bag",
      desc: "Full-grain leather, refined stitching, and a structured silhouette. A timeless piece designed to age beautifully with you.",
      tag: "Accessories",
      id: 2
    },
    {
      image: hd,
      title: "Headphones",
      desc: "Studio-grade audio wrapped in a premium build. Lose yourself in sound that's as rich and detailed as the music deserves.",
      tag: "Audio",
      id: 4
    },
    {
      image: lth,
      title: "Casual Jacket",
      desc: "A wardrobe essential. Lightweight yet warm, with a relaxed cut that moves with you through every season and occasion.",
      tag: "Outerwear",
      id: 3
    },
    {
      image: gl,
      title: "Sunglasses",
      desc: "UV-protective lenses in a frame sculpted for modern faces. Where eye care meets effortless style, every single day.",
      tag: "Eyewear",
      id: 5
    }
  ]

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

        .hot-section {
          background-color: var(--warm-white);
          background-image:
            radial-gradient(ellipse at 90% 10%, rgba(181,129,60,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 90%, rgba(44,32,24,0.04) 0%, transparent 55%);
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .hot-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* HEADER */
        .hot-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 24px;
          margin-bottom: 56px;
        }

        .hot-header-left {}

        .hot-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hot-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .hot-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.2rem;
          font-weight: 600;
          color: var(--dark);
          line-height: 1;
          letter-spacing: -0.5px;
          margin: 0 0 14px;
        }

        .hot-subtitle {
          font-size: 0.88rem;
          color: var(--brown);
          line-height: 1.75;
          max-width: 420px;
          margin: 0;
        }

        .hot-header-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border: 1px solid var(--sand);
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--dark);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
          background: var(--cream);
        }

        .hot-header-cta:hover {
          background: var(--dark);
          color: #fff;
          border-color: var(--dark);
          transform: translateX(2px);
        }

        /* GRID */
        .hot-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* CARD */
        .hot-card {
          border-radius: 20px;
          overflow: hidden;
          background: var(--cream);
          border: 1px solid var(--sand);
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .hot-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(44,32,24,0.1);
          border-color: var(--taupe);
        }

        /* LARGE CARDS (first 2) */
        .hot-card.large {
          grid-row: span 1;
        }

        .hot-card.large .hot-card-img {
          height: 280px;
        }

        .hot-card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .hot-card:hover .hot-card-img {
          transform: scale(1.05);
        }

        .hot-card-img-wrap {
          overflow: hidden;
          position: relative;
        }

        .hot-card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 4px 12px;
          background: rgba(250,248,245,0.88);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brown);
          font-weight: 500;
          border: 1px solid rgba(201,189,176,0.35);
        }

        .hot-card-body {
          padding: 20px 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .hot-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 8px;
          line-height: 1.15;
        }

        .hot-card-desc {
          font-size: 0.82rem;
          color: var(--brown);
          line-height: 1.75;
          margin: 0;
          flex: 1;
        }

        .hot-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--sand);
        }

        .hot-card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: var(--sand);
          line-height: 1;
        }

        .hot-card-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--warm-white);
          border: 1px solid var(--sand);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--brown);
          transition: all 0.25s;
          text-decoration: none;
        }

        .hot-card:hover .hot-card-arrow {
          background: var(--dark);
          border-color: var(--dark);
          color: #fff;
        }

        /* BOTTOM STRIP */
        .hot-strip {
          margin-top: 56px;
          padding: 24px 32px;
          background: var(--cream);
          border: 1px solid var(--sand);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .hot-strip-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: var(--dark);
          font-weight: 400;
        }

        .hot-strip-text span { color: var(--accent); font-style: italic; }

        .hot-strip-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .hot-strip-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: 1px solid var(--sand);
          border-radius: 20px;
          font-size: 0.73rem;
          color: var(--brown);
          background: var(--warm-white);
        }

        @media (max-width: 900px) {
          .hot-grid { grid-template-columns: repeat(2, 1fr); }
          .hot-title { font-size: 2.4rem; }
        }

        @media (max-width: 600px) {
          .hot-inner { padding: 0 20px; }
          .hot-section { padding: 70px 0; }
          .hot-grid { grid-template-columns: 1fr; }
          .hot-header { grid-template-columns: 1fr; }
          .hot-header-cta { display: none; }
          .hot-title { font-size: 2rem; }
          .hot-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="hot-section">
        <div className="hot-inner">

          {/* HEADER */}
          <div className="hot-header">
            <div className="hot-header-left">
              <div className="hot-eyebrow">Best Sellers</div>
              <h2 className="hot-title">Most Loved by<br />Our Customers</h2>
              <p className="hot-subtitle">
                A handpicked selection of products our community keeps coming back to — for their quality, design, and lasting value.
              </p>
            </div>
            <NavLink to="/products" className="hot-header-cta">
              View All Products <FiArrowRight size={13} />
            </NavLink>
          </div>

          {/* GRID */}
          <div className="hot-grid">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={`/product/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="hot-card">
                  <div className="hot-card-img-wrap">
                    <img src={item.image} alt={item.title} className="hot-card-img" />
                    <span className="hot-card-tag">{item.tag}</span>
                  </div>
                  <div className="hot-card-body">
                    <h3 className="hot-card-title">{item.title}</h3>
                    <p className="hot-card-desc">{item.desc}</p>
                    <div className="hot-card-footer">
                      <span className="hot-card-number">0{index + 1}</span>
                      <span className="hot-card-arrow"><FiArrowRight size={15} /></span>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          {/* BOTTOM STRIP */}
          <div className="hot-strip">
            <div className="hot-strip-text">
              Everything you need, <span>curated for you</span>
            </div>
            <div className="hot-strip-pills">
              <div className="hot-strip-pill"><FiTruck size={13} /> Free delivery over Ksh 5,000</div>
              <div className="hot-strip-pill"><FiRefreshCw size={13} /> 14-day returns</div>
              <div className="hot-strip-pill"><FiLock size={13} /> Secure checkout</div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default HotItems