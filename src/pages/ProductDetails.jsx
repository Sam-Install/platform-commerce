import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FiTruck, FiRefreshCw, FiLock, FiHeart, FiCheckCircle, FiShoppingBag } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      category: "Shoes",
      price: 5500,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        "https://images.unsplash.com/photo-1528701800489-20be9c4f63c8"
      ],
      desc: "High quality running shoes for comfort and performance.",
      tags: ["Comfort", "Durable", "Lightweight"]
    },
    {
      id: 2,
      name: "Leather Handbag",
      category: "Handbags",
      price: 3200,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        "https://images.unsplash.com/photo-1591561954557-26941169b49e"
      ],
      desc: "Stylish handbag made with premium leather.",
      tags: ["Premium", "Handcrafted", "Elegant"]
    }
  ]

  const product = products.find(p => p.id === parseInt(id))

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (!product) return (
    <div style={{ paddingTop: 120, textAlign: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#8a6f5e' }}>
      Product not found
    </div>
  )

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

        .pd-page {
          min-height: 100vh;
          background-color: var(--cream);
          background-image:
            radial-gradient(ellipse at 5% 15%, rgba(181,129,60,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 95% 85%, rgba(58,107,74,0.05) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding-top: 88px;
          padding-bottom: 80px;
        }

        .pd-breadcrumb {
          padding: 20px 48px 0;
          font-size: 0.75rem;
          color: var(--taupe);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pd-breadcrumb a {
          color: var(--brown);
          text-decoration: none;
          transition: color 0.2s;
        }

        .pd-breadcrumb a:hover { color: var(--accent); }

        .pd-container {
          max-width: 1200px;
          margin: 32px auto 0;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* IMAGE COLUMN */
        .pd-images {}

        .pd-main-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          background: var(--sand);
          aspect-ratio: 4/3;
          position: relative;
          border: 1px solid var(--sand);
        }

        .pd-main-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .pd-main-img-wrap:hover img {
          transform: scale(1.04);
        }

        .pd-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(250,248,245,0.88);
          backdrop-filter: blur(10px);
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--brown);
          font-weight: 500;
          border: 1px solid rgba(201,189,176,0.4);
        }

        .pd-thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .pd-thumb {
          width: 76px;
          height: 76px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s ease;
          background: var(--sand);
        }

        .pd-thumb:hover {
          border-color: var(--taupe);
          transform: translateY(-2px);
        }

        .pd-thumb.active {
          border-color: var(--dark);
        }

        .pd-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* INFO COLUMN */
        .pd-info {
          padding-top: 8px;
        }

        .pd-cat-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pd-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--dark);
          line-height: 1.05;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
        }

        .pd-divider {
          height: 1px;
          background: var(--sand);
          margin: 20px 0;
        }

        .pd-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 4px;
        }

        .pd-price-note {
          font-size: 0.75rem;
          color: var(--taupe);
          letter-spacing: 0.05em;
        }

        .pd-desc {
          font-size: 0.9rem;
          color: var(--brown);
          line-height: 1.8;
          margin: 20px 0;
        }

        .pd-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .pd-tag {
          padding: 5px 14px;
          border-radius: 20px;
          background: var(--warm-white);
          border: 1px solid var(--sand);
          font-size: 0.72rem;
          color: var(--brown);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pd-qty-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .pd-qty-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
        }

        .pd-qty-control {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid var(--sand);
          border-radius: 10px;
          overflow: hidden;
          background: var(--warm-white);
        }

        .pd-qty-btn {
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .pd-qty-btn:hover { background: var(--sand); }

        .pd-qty-val {
          width: 40px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--dark);
          border-left: 1px solid var(--sand);
          border-right: 1px solid var(--sand);
          height: 36px;
          line-height: 36px;
        }

        .pd-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .pd-add-btn {
          flex: 1;
          padding: 14px 28px;
          background: var(--dark);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .pd-add-btn:hover {
          background: var(--accent);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(181,129,60,0.3);
        }

        .pd-add-btn.added {
          background: #3a6b4a;
        }

        .pd-wish-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid var(--sand);
          background: var(--warm-white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.2s;
          color: var(--brown);
        }

        .pd-wish-btn:hover {
          border-color: var(--accent);
          background: rgba(181,129,60,0.08);
          color: var(--accent);
        }

        .pd-meta {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid var(--sand);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }

        .pd-meta-item {
          text-align: center;
          padding: 12px 8px;
          border-radius: 12px;
          background: var(--warm-white);
          border: 1px solid var(--sand);
        }

        .pd-meta-icon {
          font-size: 1.2rem;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
        }

        .pd-meta-label {
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--taupe);
          display: block;
        }

        .pd-meta-val {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--dark);
          display: block;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .pd-breadcrumb { padding: 16px 20px 0; }
          .pd-container { grid-template-columns: 1fr; gap: 32px; padding: 0 20px; }
          .pd-title { font-size: 2rem; }
          .pd-meta { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="pd-page">
        {/* BREADCRUMB */}
        <div className="pd-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/products">Products</Link>
          <span>›</span>
          <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link>
          <span>›</span>
          <span style={{ color: 'var(--dark)' }}>{product.name}</span>
        </div>

        <div className="pd-container">
          {/* IMAGE COLUMN */}
          <div className="pd-images">
            <div className="pd-main-img-wrap">
              <img
                src={`${product.images[activeImg]}?auto=format&w=700&q=85`}
                alt={product.name}
              />
              <span className="pd-category-badge">{product.category}</span>
            </div>

            <div className="pd-thumbnails">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`pd-thumb ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={`${img}?auto=format&w=160&q=70`} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* INFO COLUMN */}
          <div className="pd-info">
            <div className="pd-cat-label">
              <FaStar size={10} />
              {product.category}
            </div>
            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-divider" />

            <div className="pd-price">Ksh {product.price.toLocaleString()}</div>
            <div className="pd-price-note">Inclusive of all taxes · Free delivery</div>

            <p className="pd-desc">{product.desc}</p>

            {product.tags && (
              <div className="pd-tags">
                {product.tags.map((tag, i) => (
                  <span key={i} className="pd-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* QTY */}
            <div className="pd-qty-row">
              <span className="pd-qty-label">Qty</span>
              <div className="pd-qty-control">
                <button className="pd-qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <div className="pd-qty-val">{qty}</div>
                <button className="pd-qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="pd-actions">
              <button
                className={`pd-add-btn ${added ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {added
                  ? <><FiCheckCircle size={15} /> Added to Cart</>
                  : <><FiShoppingBag size={15} /> Add to Cart</>
                }
              </button>
              <button className="pd-wish-btn" title="Save">
                <FiHeart size={18} />
              </button>
            </div>

            {/* META */}
            <div className="pd-meta">
              <div className="pd-meta-item">
                <div className="pd-meta-icon"><FiTruck size={18} /></div>
                <span className="pd-meta-label">Delivery</span>
                <span className="pd-meta-val">2–4 Days</span>
              </div>
              <div className="pd-meta-item">
                <div className="pd-meta-icon"><FiRefreshCw size={18} /></div>
                <span className="pd-meta-label">Returns</span>
                <span className="pd-meta-val">14 Days</span>
              </div>
              <div className="pd-meta-item">
                <div className="pd-meta-icon"><FiLock size={18} /></div>
                <span className="pd-meta-label">Payment</span>
                <span className="pd-meta-val">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails