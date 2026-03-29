import React from 'react'
import { NavLink } from 'react-router-dom'
import sh from '../assets/shoes.jpg'
import tr from '../assets/trousers.jpg'
import shi from '../assets/shirts.jpg'
import ph from '../assets/phones.jpg'
import hn from '../assets/handbags.jpg'
import wa from '../assets/watch.jpg'

const categories = [
  { name: "Shoes",    slug: "shoes",    image: sh,  label: "Step into style" },
  { name: "Handbags", slug: "handbags", image: hn,  label: "Carry it with grace" },
  { name: "Trousers", slug: "trousers", image: tr,  label: "Tailored for you" },
  { name: "Shirts",   slug: "shirts",   image: shi, label: "Effortless layers" },
  { name: "Watches",  slug: "watches",  image: wa,  label: "Time, refined" },
  { name: "Phones",   slug: "phones",   image: ph,  label: "Always connected" },
]

const Categories = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=DM+Sans:wght@300;400&display=swap');

        .cat-section {
          background: #f7f3ed;
          padding: 100px 40px;
          font-family: 'DM Sans', sans-serif;
        }

        .cat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto 56px;
          gap: 24px;
          flex-wrap: wrap;
        }

        .cat-header-left {}

        .cat-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b5813c;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .cat-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 300;
          line-height: 1.05;
          color: #2c2018;
          margin: 0;
        }

        .cat-title em {
          font-style: italic;
          color: #8a6f5e;
        }

        .cat-desc {
          font-size: 0.85rem;
          color: #9a8880;
          font-weight: 300;
          max-width: 260px;
          line-height: 1.7;
          text-align: right;
        }

        /* GRID */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* CARD */
        .cat-card {
          display: block;
          text-decoration: none;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          background: #e8ddd0;
        }

        .cat-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      filter 0.65s ease;
          filter: brightness(0.88) saturate(0.9);
        }

        .cat-card:hover .cat-card-img {
          transform: scale(1.06);
          filter: brightness(0.72) saturate(1.1);
        }

        /* Overlay — always present, darkens on hover */
        .cat-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(28, 18, 10, 0.78) 0%,
            rgba(28, 18, 10, 0.12) 50%,
            transparent 100%
          );
          transition: opacity 0.4s ease;
        }

        /* Text block */
        .cat-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 16px 18px;
        }

        .cat-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          display: block;
          letter-spacing: 0.01em;
          line-height: 1;
          margin-bottom: 5px;
          transition: transform 0.35s ease;
        }

        .cat-card-sub {
          font-size: 0.68rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0);
          text-transform: uppercase;
          display: block;
          transition: color 0.3s ease 0.05s, transform 0.35s ease;
          transform: translateY(4px);
        }

        .cat-card:hover .cat-card-sub {
          color: rgba(255, 220, 160, 0.85);
          transform: translateY(0);
        }

        .cat-card:hover .cat-card-name {
          transform: translateY(-2px);
        }

        /* Arrow */
        .cat-card-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,255,255,0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0);
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .cat-card:hover .cat-card-arrow {
          border-color: rgba(255,255,255,0.5);
          color: rgba(255,255,255,0.85);
        }

        /* Staggered entrance */
        .cat-card {
          opacity: 0;
          transform: translateY(20px);
          animation: catFadeUp 0.55s ease forwards;
        }

        .cat-card:nth-child(1) { animation-delay: 0.05s; }
        .cat-card:nth-child(2) { animation-delay: 0.12s; }
        .cat-card:nth-child(3) { animation-delay: 0.19s; }
        .cat-card:nth-child(4) { animation-delay: 0.26s; }
        .cat-card:nth-child(5) { animation-delay: 0.33s; }
        .cat-card:nth-child(6) { animation-delay: 0.40s; }

        @keyframes catFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 640px) {
          .cat-section { padding: 72px 20px; }
          .cat-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .cat-desc { display: none; }
          .cat-header { margin-bottom: 36px; }
        }
      `}</style>

      <section className="cat-section">

        {/* Header */}
        <div className="cat-header">
          <div className="cat-header-left">
            <p className="cat-eyebrow">Curated Collections</p>
            <h2 className="cat-title">
              Shop by <em>Category</em>
            </h2>
          </div>
          <p className="cat-desc">
            Discover pieces across every style — from everyday essentials to statement finds.
          </p>
        </div>

        {/* Grid */}
        <div className="cat-grid">
          {categories.map((cat, i) => (
            <NavLink key={i} to={`/products/${cat.slug}`} className="cat-card">

              <img src={cat.image} alt={cat.name} className="cat-card-img" />

              <div className="cat-card-overlay" />

              {/* Arrow icon top-right */}
              <div className="cat-card-arrow">↗</div>

              <div className="cat-card-body">
                <span className="cat-card-sub">{cat.label}</span>
                <span className="cat-card-name">{cat.name}</span>
              </div>

            </NavLink>
          ))}
        </div>

      </section>
    </>
  )
}

export default Categories