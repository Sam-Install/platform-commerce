import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart()
  const [region, setRegion] = useState("Nairobi")

  const deliveryPrices = { Nairobi: 200, Mombasa: 300, Kisumu: 350 }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const delivery = total > 5000 ? 0 : deliveryPrices[region]
  const grandTotal = total + delivery
  const remaining = 5000 - total
  const progress = Math.min((total / 5000) * 100, 100)

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

        .cart-page {
          min-height: 100vh;
          background-color: var(--cream);
          background-image:
            radial-gradient(ellipse at 5% 15%, rgba(181,129,60,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 95% 85%, rgba(58,107,74,0.05) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding-top: 88px;
          padding-bottom: 80px;
        }

        .cart-header {
          padding: 28px 48px 20px;
          border-bottom: 1px solid var(--sand);
        }

        .cart-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 2px;
          letter-spacing: -0.5px;
        }

        .cart-header p {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--taupe);
          margin: 0;
        }

        .cart-container {
          max-width: 1200px;
          margin: 36px auto 0;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
        }

        /* EMPTY STATE */
        .cart-empty {
          grid-column: 1/-1;
          text-align: center;
          padding: 100px 20px;
        }

        .cart-empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          opacity: 0.4;
        }

        .cart-empty h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: var(--brown);
          margin: 0 0 8px;
        }

        .cart-empty p {
          font-size: 0.85rem;
          color: var(--taupe);
          margin: 0 0 24px;
        }

        .cart-empty a {
          display: inline-block;
          padding: 12px 28px;
          background: var(--dark);
          color: #fff;
          border-radius: 12px;
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s;
        }

        .cart-empty a:hover { background: var(--accent); }

        /* ITEMS LIST */
        .cart-items { display: flex; flex-direction: column; gap: 14px; }

        .cart-item {
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 18px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .cart-item:hover {
          border-color: var(--taupe);
          box-shadow: 0 4px 20px rgba(44,32,24,0.07);
        }

        .cart-item-img {
          width: 88px;
          height: 88px;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid var(--sand);
        }

        .cart-item-info { flex: 1; }

        .cart-item-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 2px;
        }

        .cart-item-price {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
          margin: 0 0 12px;
        }

        .cart-qty {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--sand);
          border-radius: 10px;
          overflow: hidden;
          background: var(--cream);
        }

        .cart-qty-btn {
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }

        .cart-qty-btn:hover { background: var(--sand); }

        .cart-qty-val {
          width: 36px;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark);
          border-left: 1px solid var(--sand);
          border-right: 1px solid var(--sand);
          line-height: 32px;
        }

        .cart-item-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .cart-item-total {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--dark);
        }

        .cart-remove-btn {
          background: none;
          border: 1px solid var(--sand);
          border-radius: 8px;
          padding: 4px 12px;
          font-size: 0.7rem;
          color: var(--taupe);
          cursor: pointer;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: all 0.2s;
        }

        .cart-remove-btn:hover {
          border-color: #c0392b;
          color: #c0392b;
          background: rgba(192,57,43,0.05);
        }

        /* SUMMARY */
        .cart-summary {
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 20px;
          padding: 28px;
          position: sticky;
          top: 104px;
        }

        .summary-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 20px;
        }

        .summary-divider {
          height: 1px;
          background: var(--sand);
          margin: 16px 0;
        }

        .region-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
          margin-bottom: 8px;
          display: block;
        }

        .region-select {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--sand);
          border-radius: 10px;
          background: var(--cream);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: var(--dark);
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a6f5e' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 34px;
        }

        .region-select:focus { border-color: var(--accent); }

        /* FREE DELIVERY PROGRESS */
        .free-delivery-bar {
          margin-top: 14px;
          background: var(--cream);
          border: 1px solid var(--sand);
          border-radius: 10px;
          padding: 12px 14px;
        }

        .free-delivery-bar p {
          font-size: 0.75rem;
          color: var(--brown);
          margin: 0 0 8px;
        }

        .free-delivery-bar p span {
          font-weight: 600;
          color: var(--accent);
        }

        .progress-track {
          height: 5px;
          background: var(--sand);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent-light));
          border-radius: 10px;
          transition: width 0.4s ease;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .summary-row span:first-child {
          font-size: 0.82rem;
          color: var(--brown);
        }

        .summary-row span:last-child {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark);
        }

        .summary-row.free span:last-child {
          color: var(--green);
          font-weight: 600;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 4px;
        }

        .summary-total span:first-child {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
        }

        .summary-total-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--dark);
        }

        .checkout-btn {
          width: 100%;
          padding: 15px;
          background: var(--dark);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          display: block;
          text-align: center;
          text-decoration: none;
        }

        .checkout-btn:hover {
          background: var(--accent);
          box-shadow: 0 8px 24px rgba(181,129,60,0.3);
          transform: translateY(-1px);
        }

        .continue-link {
          display: block;
          text-align: center;
          margin-top: 12px;
          font-size: 0.75rem;
          color: var(--taupe);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .continue-link:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .cart-header { padding: 20px 20px 16px; }
          .cart-header h1 { font-size: 1.8rem; }
          .cart-container { grid-template-columns: 1fr; padding: 0 20px; }
          .cart-summary { position: static; }
        }
      `}</style>

      <div className="cart-page">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} · Ready to checkout</p>
        </div>

        <div className="cart-container">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛍️</div>
              <h2>Your cart is empty</h2>
              <p>Discover something you'll love</p>
              <Link to="/products">Browse Products</Link>
            </div>
          ) : (
            <>
              {/* ITEMS */}
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={`${item.image}?auto=format&w=200&q=75`} alt={item.name} className="cart-item-img" />

                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">Ksh {item.price.toLocaleString()} each</p>
                      <div className="cart-qty">
                        <button className="cart-qty-btn" onClick={() => decreaseQty(item.id)}>−</button>
                        <div className="cart-qty-val">{item.quantity}</div>
                        <button className="cart-qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </div>

                    <div className="cart-item-right">
                      <div className="cart-item-total">Ksh {(item.price * item.quantity).toLocaleString()}</div>
                      <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* SUMMARY */}
              <div className="cart-summary">
                <h2 className="summary-title">Order Summary</h2>

                {/* REGION */}
                <span className="region-label">Delivery Region</span>
                <select className="region-select" value={region} onChange={e => setRegion(e.target.value)}>
                  <option>Nairobi</option>
                  <option>Mombasa</option>
                  <option>Kisumu</option>
                </select>

                {/* FREE DELIVERY PROGRESS */}
                {total < 5000 && (
                  <div className="free-delivery-bar">
                    <p>Add <span>Ksh {remaining.toLocaleString()}</span> more for free delivery</p>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                )}

                <div className="summary-divider" />

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>Ksh {total.toLocaleString()}</span>
                </div>

                <div className={`summary-row ${delivery === 0 ? 'free' : ''}`}>
                  <span>Delivery · {region}</span>
                  <span>{delivery === 0 ? '✓ Free' : `Ksh ${delivery}`}</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <span>Total</span>
                  <span className="summary-total-val">Ksh {grandTotal.toLocaleString()}</span>
                </div>

                <Link to="/checkout" className="checkout-btn">
                  Proceed to Checkout →
                </Link>
                <Link to="/products" className="continue-link">← Continue Shopping</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart