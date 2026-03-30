import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FiGrid, FiArrowRight
} from 'react-icons/fi'
import {
  GiRunningShoe, GiHanger, GiWatch, GiSmartphone, GiHandBag
} from 'react-icons/gi'
import { PiPants } from 'react-icons/pi'

const Products = () => {
  const { category } = useParams()

  const allProducts = [
    { id: 1, name: "Nike Shoes", category: "shoes", price: "Ksh 5,500", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 2, name: "Leather Handbag", category: "handbags", price: "Ksh 3,200", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { id: 3, name: "Denim Trousers", category: "trousers", price: "Ksh 2,800", image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab" },
    { id: 4, name: "Casual Shirt", category: "shirts", price: "Ksh 1,800", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" },
    { id: 5, name: "Luxury Watch", category: "watches", price: "Ksh 12,000", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
    { id: 6, name: "iPhone 14", category: "phones", price: "Ksh 95,000", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 7, name: "Running Shoes", category: "shoes", price: "Ksh 4,800", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
    { id: 8, name: "Smart Watch", category: "watches", price: "Ksh 6,500", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
  ]

  const filteredProducts = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts

  const categories = ["all", "shoes", "handbags", "trousers", "shirts", "watches", "phones"]

  const categoryIcons = {
    all: <FiGrid size={15} />,
    shoes: <GiRunningShoe size={15} />,
    handbags: <GiHandBag size={15} />,
    trousers: <PiPants size={15} />,
    shirts: <GiHanger size={15} />,
    watches: <GiWatch size={15} />,
    phones: <GiSmartphone size={15} />,
  }

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
          --green: #3a6b4a;
        }

        .products-page {
          min-height: 100vh;
          background-color: var(--cream);
          background-image:
            radial-gradient(ellipse at 10% 20%, rgba(181,129,60,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(58,107,74,0.06) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding-top: 88px;
          padding-bottom: 80px;
        }

        .page-header {
          padding: 32px 48px 20px;
          border-bottom: 1px solid var(--sand);
          margin-bottom: 0;
        }

        .page-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--dark);
          letter-spacing: -0.5px;
          line-height: 1;
          margin: 0 0 4px;
        }

        .page-header p {
          font-size: 0.82rem;
          color: var(--brown);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0;
          font-weight: 400;
        }

        .layout {
          display: flex;
          gap: 0;
          padding: 0 0 0 0;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* SIDEBAR */
        .sidebar {
          width: 220px;
          min-width: 220px;
          padding: 36px 28px;
          border-right: 1px solid var(--sand);
          position: sticky;
          top: 88px;
          height: calc(100vh - 88px);
          overflow-y: auto;
        }

        .sidebar-label {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--taupe);
          font-weight: 500;
          margin-bottom: 18px;
        }

        .cat-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--dark);
          margin-bottom: 4px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .cat-btn:hover {
          background: rgba(181,129,60,0.08);
          border-color: rgba(181,129,60,0.2);
          color: var(--accent);
        }

        .cat-btn.active {
          background: var(--dark);
          color: #fff;
          border-color: var(--dark);
          font-weight: 500;
        }

        .cat-btn .icon {
          font-size: 0.9rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
        }

        .cat-btn .cat-name {
          text-transform: capitalize;
          flex: 1;
        }

        .cat-btn .count-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--taupe);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cat-btn.active .count-dot {
          background: var(--accent-light);
          opacity: 1;
        }

        .divider {
          height: 1px;
          background: var(--sand);
          margin: 18px 0;
        }

        /* PRODUCTS AREA */
        .products-area {
          flex: 1;
          padding: 36px 40px;
        }

        .results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .results-bar span {
          font-size: 0.78rem;
          color: var(--brown);
          letter-spacing: 0.05em;
        }

        .results-bar strong {
          color: var(--dark);
          font-weight: 600;
        }

        .active-filter-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: var(--dark);
          color: #fff;
          border-radius: 20px;
          font-size: 0.75rem;
          text-transform: capitalize;
          letter-spacing: 0.05em;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        /* CARD */
        .card {
          background: var(--warm-white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--sand);
          transition: all 0.3s ease;
          position: relative;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(44,32,24,0.1);
          border-color: var(--taupe);
        }

        .card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 200px;
          background: var(--sand);
        }

        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover .card-img-wrap img {
          transform: scale(1.07);
        }

        .card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--brown);
          font-weight: 500;
        }

        .card-body {
          padding: 16px 18px 18px;
        }

        .card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 4px;
          line-height: 1.2;
        }

        .card-price {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--accent);
          margin: 0 0 14px;
          letter-spacing: 0.02em;
        }

        .card-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .view-btn {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--dark);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--dark);
          padding-bottom: 1px;
          transition: all 0.2s;
        }

        .view-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .card-arrow {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--cream);
          border: 1px solid var(--sand);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--brown);
          transition: all 0.2s;
        }

        .card:hover .card-arrow {
          background: var(--dark);
          color: #fff;
          border-color: var(--dark);
        }

        .empty-state {
          grid-column: 1/-1;
          text-align: center;
          padding: 80px 20px;
          color: var(--taupe);
        }

        .empty-state h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: var(--brown);
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .page-header { padding: 24px 20px 16px; }
          .page-header h1 { font-size: 1.8rem; }
          .layout { flex-direction: column; }
          .sidebar {
            width: 100%;
            min-width: unset;
            border-right: none;
            border-bottom: 1px solid var(--sand);
            position: static;
            height: auto;
            padding: 20px;
          }
          .sidebar-cats { display: flex; flex-wrap: wrap; gap: 8px; }
          .cat-btn { width: auto; padding: 8px 14px; }
          .products-area { padding: 24px 20px; }
          .grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
      `}</style>

      <div className="products-page">
        {/* PAGE HEADER */}
        <div className="page-header">
          <h1>{category ? category : "All Products"}</h1>
          <p>Curated Collection · {filteredProducts.length} items</p>
        </div>

        <div className="layout">
          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-label">Browse by</div>
            <div className="sidebar-cats">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={cat === "all" ? "/products" : `/products/${cat}`}
                  className={`cat-btn ${(cat === "all" && !category) || category === cat ? "active" : ""}`}
                >
                  <span className="icon">{categoryIcons[cat]}</span>
                  <span className="cat-name">{cat}</span>
                  <span className="count-dot" />
                </Link>
              ))}
            </div>

            <div className="divider" />
            <div className="sidebar-label">Price Range</div>
            <div style={{ fontSize: "0.8rem", color: "var(--brown)", lineHeight: 1.7 }}>
              <div>Under Ksh 3,000</div>
              <div>Ksh 3,000 – 10,000</div>
              <div>Above Ksh 10,000</div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="products-area">
            <div className="results-bar">
              <span>
                Showing <strong>{filteredProducts.length}</strong> of {allProducts.length} products
              </span>
              {category && (
                <span className="active-filter-tag">
                  {categoryIcons[category]} {category}
                </span>
              )}
            </div>

            <div className="grid">
              {filteredProducts.length === 0 ? (
                <div className="empty-state">
                  <h3>No products found</h3>
                  <p>Try a different category</p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div key={product.id} className="card">
                    <div className="card-img-wrap">
                      <img src={`${product.image}?auto=format&w=400&q=80`} alt={product.name} />
                      <span className="card-badge">{product.category}</span>
                    </div>
                    <div className="card-body">
                      <h3 className="card-name">{product.name}</h3>
                      <p className="card-price">{product.price}</p>
                      <div className="card-cta">
                        <Link to={`/product/${product.id}`} className="view-btn">
                          View Details
                        </Link>
                        <Link to={`/product/${product.id}`} className="card-arrow">
                          <FiArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Products