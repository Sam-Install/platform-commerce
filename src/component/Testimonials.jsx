import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "James Mwangi",
      role: "Verified Buyer",
      review: "Amazing quality and super fast delivery. The packaging was premium and the product was exactly as described. I highly recommend this store to anyone looking for genuine value.",
      item: "Nike Shoes"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Wanjiku",
      role: "Customer",
      review: "Customer service is genuinely top-notch. I had a question about sizing and they responded within minutes. The products are exactly as pictured — no surprises.",
      item: "Leather Handbag"
    },
    {
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
      name: "Brian Otieno",
      role: "Frequent Buyer",
      review: "Very smooth shopping experience from browsing to checkout. Delivery was faster than expected and the product quality is consistently excellent. Definitely coming back.",
      item: "Smart Watch"
    },
    {
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      name: "Faith Njeri",
      role: "Happy Customer",
      review: "Great prices for the level of quality you get. Everything arrived perfectly packed and in great condition. This is now my go-to store for accessories.",
      item: "Sunglasses"
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      name: "Kevin Kiptoo",
      role: "Verified Buyer",
      review: "The quality genuinely exceeded my expectations. I was skeptical ordering online but the product looks even better in person. Highly recommended to everyone.",
      item: "Casual Jacket"
    }
  ]

  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (index === current || animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % testimonials.length)
        setAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[current]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

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

        .testi-section {
          background-color: var(--dark);
          background-image:
            radial-gradient(ellipse at 15% 50%, rgba(181,129,60,0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(181,129,60,0.07) 0%, transparent 45%);
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* decorative quote mark */
        .testi-section::before {
          content: '\u201C';
          font-family: 'Cormorant Garamond', serif;
          font-size: 28rem;
          color: rgba(255,255,255,0.02);
          position: absolute;
          top: -60px;
          left: 40px;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .testi-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        /* HEADER */
        .testi-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 64px;
        }

        .testi-eyebrow {
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

        .testi-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .testi-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .testi-stats {
          display: flex;
          gap: 32px;
          flex-shrink: 0;
        }

        .testi-stat {
          text-align: right;
        }

        .testi-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--accent-light);
          line-height: 1;
          display: block;
        }

        .testi-stat-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: block;
          margin-top: 2px;
        }

        /* MAIN CARD */
        .testi-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 52px 56px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 48px;
          align-items: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .testi-card.fade {
          opacity: 0;
          transform: translateY(10px);
        }

        /* LEFT — avatar */
        .testi-avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .testi-avatar-wrap {
          position: relative;
        }

        .testi-avatar {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(181,129,60,0.4);
        }

        .testi-verified {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          border: 2px solid var(--dark);
        }

        .testi-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: #fff;
          text-align: center;
        }

        .testi-role {
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          text-align: center;
        }

        .testi-item-tag {
          padding: 3px 12px;
          border-radius: 20px;
          background: rgba(181,129,60,0.15);
          border: 1px solid rgba(181,129,60,0.25);
          font-size: 0.65rem;
          color: var(--accent-light);
          letter-spacing: 0.06em;
          text-align: center;
        }

        /* RIGHT — quote */
        .testi-quote-col {}

        .testi-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 20px;
        }

        .testi-stars svg {
          color: var(--accent);
          font-size: 0.85rem;
        }

        .testi-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-style: italic;
          font-weight: 400;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .testi-quote-mark {
          color: var(--accent);
          font-size: 2rem;
          line-height: 0;
          vertical-align: -0.3em;
          font-style: normal;
          margin-right: 2px;
        }

        /* DOTS */
        .testi-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .testi-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .testi-dot.active {
          background: var(--accent);
          width: 24px;
          border-radius: 4px;
        }

        /* MINI CARDS STRIP */
        .testi-strip {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
        }

        .testi-strip::-webkit-scrollbar { display: none; }

        .testi-mini {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: all 0.2s;
        }

        .testi-mini:hover,
        .testi-mini.active {
          background: rgba(181,129,60,0.12);
          border-color: rgba(181,129,60,0.3);
        }

        .testi-mini img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testi-mini-name {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
          white-space: nowrap;
          transition: color 0.2s;
        }

        .testi-mini.active .testi-mini-name { color: var(--accent-light); }

        @media (max-width: 768px) {
          .testi-inner { padding: 0 20px; }
          .testi-section { padding: 70px 0; }
          .testi-title { font-size: 2.2rem; }
          .testi-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .testi-stats { gap: 20px; }
          .testi-stat { text-align: left; }
          .testi-card { grid-template-columns: 1fr; gap: 28px; padding: 32px 24px; }
          .testi-avatar-col { flex-direction: row; align-items: center; gap: 16px; }
          .testi-name, .testi-role, .testi-item-tag { text-align: left; }
          .testi-quote { font-size: 1.25rem; }
        }
      `}</style>

      <section className="testi-section">
        <div className="testi-inner">

          {/* HEADER */}
          <div className="testi-header">
            <div>
              <div className="testi-eyebrow">Testimonials</div>
              <h2 className="testi-title">What Our<br />Customers Say</h2>
            </div>
            <div className="testi-stats">
              <div className="testi-stat">
                <span className="testi-stat-val">4.9</span>
                <span className="testi-stat-label">Avg Rating</span>
              </div>
              <div className="testi-stat">
                <span className="testi-stat-val">1.2k+</span>
                <span className="testi-stat-label">Reviews</span>
              </div>
              <div className="testi-stat">
                <span className="testi-stat-val">98%</span>
                <span className="testi-stat-label">Satisfied</span>
              </div>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className={`testi-card ${animating ? 'fade' : ''}`}>
            {/* AVATAR */}
            <div className="testi-avatar-col">
              <div className="testi-avatar-wrap">
                <img src={`${t.image}?auto=format&w=200&q=80`} alt={t.name} className="testi-avatar" />
                <span className="testi-verified">✓</span>
              </div>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
              <div className="testi-item-tag">Bought: {t.item}</div>
            </div>

            {/* QUOTE */}
            <div className="testi-quote-col">
              <div className="testi-stars">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="testi-quote">
                <span className="testi-quote-mark">"</span>
                {t.review}
                <span className="testi-quote-mark" style={{ marginLeft: 2 }}>"</span>
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testi-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
            ))}
          </div>

          {/* MINI AVATAR STRIP */}
          <div className="testi-strip">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`testi-mini ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                <img src={`${item.image}?auto=format&w=80&q=70`} alt={item.name} />
                <span className="testi-mini-name">{item.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonials