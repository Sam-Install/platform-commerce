import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import {
  FiSmartphone,
  FiCreditCard,
  FiDollarSign,
  FiLock,
  FiCheck,
  FiStar
} from 'react-icons/fi'

const paymentOptions = [
  {
    value: "mpesa",
    icon: <FiSmartphone size={18} />,
    name: "M-Pesa",
    desc: "Pay via Safaricom M-Pesa"
  },
  {
    value: "card",
    icon: <FiCreditCard size={18} />,
    name: "Debit / Credit Card",
    desc: "Visa, Mastercard accepted"
  },
  {
    value: "cod",
    icon: <FiDollarSign size={18} />,
    name: "Cash on Delivery",
    desc: "Pay when your order arrives"
  },
]

const Checkout = () => {
  const { cart } = useCart()

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", town: "",
    payment: "mpesa"
  })

  const [submitted, setSubmitted] = useState(false)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const delivery = total > 5000 ? 0 : 200
  const grandTotal = total + delivery

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Order placed:", form, cart)
    setSubmitted(true)
  }

  if (submitted) return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        :root { --cream:#f7f3ed;--warm-white:#faf8f5;--sand:#e8ddd0;--taupe:#c9bdb0;--brown:#8a6f5e;--dark:#2c2018;--accent:#b5813c;--green:#3a6b4a; }
        .success-page { min-height:100vh; background:var(--cream); display:flex; align-items:center; justify-content:center; font-family:'DM Sans',sans-serif; }
        .success-card { background:var(--warm-white); border:1px solid var(--sand); border-radius:24px; padding:60px 48px; text-align:center; max-width:440px; }
        .success-icon { display:flex; align-items:center; justify-content:center; margin-bottom:20px; color:var(--accent); }
        .success-card h2 { font-family:'Cormorant Garamond',serif; font-size:2.2rem; color:var(--dark); margin:0 0 10px; }
        .success-card p { font-size:0.85rem; color:var(--brown); line-height:1.7; margin:0 0 28px; }
        .success-card a { display:inline-block; padding:12px 28px; background:var(--dark); color:#fff; border-radius:12px; text-decoration:none; font-size:0.8rem; letter-spacing:0.08em; text-transform:uppercase; transition:background 0.2s; }
        .success-card a:hover { background:var(--accent); }
      `}</style>
      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">
            <FiStar size={40} />
          </div>
          <h2>Order Placed!</h2>
          <p>Thank you, {form.name}. Your order has been received and is being processed. We'll reach you at {form.phone}.</p>
          <a href="/products">Continue Shopping</a>
        </div>
      </div>
    </>
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
          --green: #3a6b4a;
        }

        .co-page {
          min-height: 100vh;
          background-color: var(--cream);
          background-image:
            radial-gradient(ellipse at 5% 15%, rgba(181,129,60,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 95% 85%, rgba(58,107,74,0.05) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding-top: 88px;
          padding-bottom: 80px;
        }

        .co-header {
          padding: 28px 48px 20px;
          border-bottom: 1px solid var(--sand);
        }

        .co-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 2px;
          letter-spacing: -0.5px;
        }

        .co-header p {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--taupe);
          margin: 0;
        }

        .co-steps {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 20px 48px 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .co-step {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--taupe);
        }

        .co-step.active { color: var(--dark); }

        .co-step-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1px solid var(--taupe);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .co-step.active .co-step-dot {
          background: var(--dark);
          border-color: var(--dark);
          color: #fff;
        }

        .co-step-line {
          flex: 1;
          height: 1px;
          background: var(--sand);
          margin: 0 12px;
        }

        .co-container {
          max-width: 1200px;
          margin: 32px auto 0;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
        }

        .co-form-card {
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 20px;
          overflow: hidden;
        }

        .co-section {
          padding: 28px 28px 0;
        }

        .co-section:last-of-type { padding-bottom: 28px; }

        .co-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .co-section-title span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--dark);
          color: #fff;
          font-size: 0.68rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          flex-shrink: 0;
        }

        .co-divider {
          height: 1px;
          background: var(--sand);
          margin: 24px 0;
        }

        .co-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .co-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .co-field.full { grid-column: 1 / -1; }

        .co-field label {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
          font-weight: 500;
        }

        .co-input {
          padding: 11px 14px;
          border: 1px solid var(--sand);
          border-radius: 10px;
          background: var(--cream);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: var(--dark);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .co-input::placeholder { color: var(--taupe); }

        .co-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(181,129,60,0.1);
        }

        .co-payment-opts {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .co-pay-opt {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border: 1px solid var(--sand);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          background: var(--cream);
        }

        .co-pay-opt:hover { border-color: var(--taupe); }

        .co-pay-opt.selected {
          border-color: var(--dark);
          background: var(--warm-white);
        }

        .co-pay-radio {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid var(--taupe);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s;
        }

        .co-pay-opt.selected .co-pay-radio {
          border-color: var(--dark);
        }

        .co-pay-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--dark);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .co-pay-opt.selected .co-pay-dot { opacity: 1; }

        .co-pay-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
        }

        .co-pay-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--dark);
        }

        .co-pay-desc {
          font-size: 0.72rem;
          color: var(--taupe);
          margin-top: 1px;
        }

        .co-submit {
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
          margin-top: 24px;
          transition: all 0.3s ease;
        }

        .co-submit:hover {
          background: var(--accent);
          box-shadow: 0 8px 24px rgba(181,129,60,0.3);
          transform: translateY(-1px);
        }

        .co-summary {
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 20px;
          padding: 28px;
          position: sticky;
          top: 104px;
        }

        .co-summary-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 20px;
        }

        .co-summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .co-summary-item-img {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid var(--sand);
          flex-shrink: 0;
        }

        .co-summary-item-name {
          flex: 1;
          font-size: 0.82rem;
          color: var(--dark);
          font-weight: 500;
          line-height: 1.3;
        }

        .co-summary-item-qty {
          font-size: 0.72rem;
          color: var(--taupe);
        }

        .co-summary-item-price {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
          white-space: nowrap;
        }

        .co-sum-divider {
          height: 1px;
          background: var(--sand);
          margin: 16px 0;
        }

        .co-sum-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .co-sum-row span:first-child {
          font-size: 0.82rem;
          color: var(--brown);
        }

        .co-sum-row span:last-child {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--dark);
        }

        .co-sum-row.free span:last-child {
          color: var(--green);
          font-weight: 600;
        }

        .co-free-delivery {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--green);
          font-weight: 600;
          font-size: 0.82rem;
        }

        .co-sum-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 6px;
        }

        .co-sum-total span:first-child {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
        }

        .co-sum-total-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--dark);
        }

        .co-secure-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 18px;
          font-size: 0.7rem;
          color: var(--taupe);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .co-header { padding: 20px 20px 16px; }
          .co-header h1 { font-size: 1.8rem; }
          .co-steps { padding: 16px 20px 0; }
          .co-container { grid-template-columns: 1fr; padding: 0 20px; }
          .co-summary { position: static; }
          .co-fields { grid-template-columns: 1fr; }
          .co-field.full { grid-column: 1; }
        }
      `}</style>

      <div className="co-page">
        <div className="co-header">
          <h1>Checkout</h1>
          <p>Secure · Encrypted · Fast</p>
        </div>

        {/* STEPS */}
        <div className="co-steps">
          <div className="co-step active">
            <div className="co-step-dot">1</div>
            Details
          </div>
          <div className="co-step-line" />
          <div className="co-step">
            <div className="co-step-dot">2</div>
            Payment
          </div>
          <div className="co-step-line" />
          <div className="co-step">
            <div className="co-step-dot">3</div>
            Confirm
          </div>
        </div>

        <div className="co-container">
          {/* FORM */}
          <form className="co-form-card" onSubmit={handleSubmit}>

            {/* BILLING DETAILS */}
            <div className="co-section">
              <div className="co-section-title">
                <span>1</span>
                Billing Details
              </div>

              <div className="co-fields">
                <div className="co-field">
                  <label>Full Name</label>
                  <input name="name" className="co-input" placeholder="John Kamau" onChange={handleChange} required />
                </div>
                <div className="co-field">
                  <label>Email Address</label>
                  <input name="email" type="email" className="co-input" placeholder="john@email.com" onChange={handleChange} required />
                </div>
                <div className="co-field">
                  <label>Phone Number</label>
                  <input name="phone" className="co-input" placeholder="+254 7XX XXX XXX" onChange={handleChange} required />
                </div>
                <div className="co-field">
                  <label>Street Address</label>
                  <input name="address" className="co-input" placeholder="House No. / Street" onChange={handleChange} required />
                </div>
                <div className="co-field">
                  <label>City</label>
                  <input name="city" className="co-input" placeholder="e.g. Nairobi" onChange={handleChange} required />
                </div>
                <div className="co-field">
                  <label>Town / Area</label>
                  <input name="town" className="co-input" placeholder="e.g. Westlands" onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="co-divider" style={{ margin: '24px 28px 0' }} />

            {/* PAYMENT */}
            <div className="co-section">
              <div className="co-section-title">
                <span>2</span>
                Payment Method
              </div>

              <div className="co-payment-opts">
                {paymentOptions.map(opt => (
                  <div
                    key={opt.value}
                    className={`co-pay-opt ${form.payment === opt.value ? 'selected' : ''}`}
                    onClick={() => setForm({ ...form, payment: opt.value })}
                  >
                    <div className="co-pay-radio">
                      <div className="co-pay-dot" />
                    </div>
                    <div className="co-pay-icon">{opt.icon}</div>
                    <div className="co-pay-info">
                      <div className="co-pay-name">{opt.name}</div>
                      <div className="co-pay-desc">{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="co-submit">
                Place Order · Ksh {grandTotal.toLocaleString()}
              </button>
            </div>

          </form>

          {/* ORDER SUMMARY */}
          <div className="co-summary">
            <h2 className="co-summary-title">Your Order</h2>

            {cart.map(item => (
              <div key={item.id} className="co-summary-item">
                <img src={`${item.image}?auto=format&w=100&q=70`} alt={item.name} className="co-summary-item-img" />
                <div className="co-summary-item-name">
                  {item.name}
                  <div className="co-summary-item-qty">Qty: {item.quantity}</div>
                </div>
                <div className="co-summary-item-price">Ksh {(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))}

            <div className="co-sum-divider" />

            <div className="co-sum-row">
              <span>Subtotal</span>
              <span>Ksh {total.toLocaleString()}</span>
            </div>
            <div className="co-sum-row">
              <span>Delivery</span>
              {delivery === 0
                ? (
                  <span className="co-free-delivery">
                    <FiCheck size={13} /> Free
                  </span>
                )
                : <span>Ksh {delivery}</span>
              }
            </div>

            <div className="co-sum-divider" />

            <div className="co-sum-total">
              <span>Total</span>
              <span className="co-sum-total-val">Ksh {grandTotal.toLocaleString()}</span>
            </div>

            <div className="co-secure-note">
              <FiLock size={12} />
              Payments are encrypted &amp; secure
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout