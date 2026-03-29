"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

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

        .contact-page {
          min-height: 100vh;
          background-color: var(--cream);
          background-image:
            radial-gradient(ellipse at 5% 15%, rgba(181,129,60,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 95% 85%, rgba(58,107,74,0.05) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          padding-top: 88px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HEADER */
        .contact-hero {
          text-align: center;
          padding: 40px 24px 0;
          max-width: 560px;
        }

        .contact-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .contact-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 14px;
          line-height: 1.05;
          letter-spacing: -0.5px;
        }

        .contact-hero p {
          font-size: 0.88rem;
          color: var(--brown);
          line-height: 1.8;
          margin: 0;
        }

        /* INFO PILLS */
        .contact-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 28px 24px 0;
        }

        .contact-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 40px;
          font-size: 0.78rem;
          color: var(--brown);
        }

        .contact-pill span:first-child { font-size: 0.9rem; }

        /* FORM CARD */
        .contact-card {
          width: 100%;
          max-width: 560px;
          background: var(--warm-white);
          border: 1px solid var(--sand);
          border-radius: 24px;
          padding: 40px;
          margin: 36px 24px 0;
          box-shadow: 0 4px 40px rgba(44,32,24,0.06);
        }

        .contact-card-label {
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--taupe);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-card-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--sand);
        }

        /* FIELD ROW */
        .co-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .co-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .co-field:last-of-type { margin-bottom: 0; }

        .co-field label {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--taupe);
          font-weight: 500;
        }

        .co-input {
          padding: 12px 14px;
          border: 1px solid var(--sand);
          border-radius: 10px;
          background: var(--cream);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: var(--dark);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        .co-input::placeholder { color: var(--taupe); }

        .co-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(181,129,60,0.1);
        }

        .co-input.error {
          border-color: #c0392b;
          box-shadow: 0 0 0 3px rgba(192,57,43,0.08);
        }

        .co-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .co-error {
          font-size: 0.72rem;
          color: #c0392b;
          margin-top: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* SUBMIT */
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
          margin-top: 22px;
          transition: all 0.3s ease;
        }

        .co-submit:hover {
          background: var(--accent);
          box-shadow: 0 8px 24px rgba(181,129,60,0.3);
          transform: translateY(-1px);
        }

        /* SUCCESS TOAST */
        .co-success {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #eef6f0;
          border: 1px solid #a8d5b5;
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 0.83rem;
          color: #2d6a4f;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .contact-hero h1 { font-size: 2.2rem; }
          .co-row { grid-template-columns: 1fr; }
          .contact-card { padding: 28px 22px; }
        }
      `}</style>

      <div className="contact-page">
        {/* HERO */}
        <div className="contact-hero">
          <div className="contact-eyebrow">✦ Get in Touch</div>
          <h1>We're Here to Help</h1>
          <p>Have a question, concern, or just want to say hello? Send us a message and we'll get back to you shortly.</p>
        </div>

        {/* INFO PILLS */}
        <div className="contact-pills">
          <div className="contact-pill"><span>📧</span><span>support@store.co.ke</span></div>
          <div className="contact-pill"><span>📞</span><span>+254 700 000 000</span></div>
          <div className="contact-pill"><span>🕐</span><span>Mon–Sat, 8am–6pm</span></div>
        </div>

        {/* FORM */}
        <div className="contact-card">
          <div className="contact-card-label">Send a Message</div>

          {submitted && (
            <div className="co-success">
              <span>✓</span>
              <span>Your message was sent! We'll be in touch soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* NAME ROW */}
            <div className="co-row">
              <div className="co-field" style={{ marginBottom: 0 }}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className={`co-input ${errors.firstName ? 'error' : ''}`}
                  {...register("firstName", { required: "Required" })}
                />
                {errors.firstName && <span className="co-error">⚠ {errors.firstName.message}</span>}
              </div>

              <div className="co-field" style={{ marginBottom: 0 }}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Kamau"
                  className={`co-input ${errors.secondName ? 'error' : ''}`}
                  {...register("secondName", { required: "Required" })}
                />
                {errors.secondName && <span className="co-error">⚠ {errors.secondName.message}</span>}
              </div>
            </div>

            {/* EMAIL */}
            <div className="co-field" style={{ marginTop: 14 }}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@email.com"
                className={`co-input ${errors.email ? 'error' : ''}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
              />
              {errors.email && <span className="co-error">⚠ {errors.email.message}</span>}
            </div>

            {/* MESSAGE */}
            <div className="co-field">
              <label>Your Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you today?"
                className={`co-input co-textarea ${errors.message ? 'error' : ''}`}
                {...register("message", { required: "Please enter a message" })}
              />
              {errors.message && <span className="co-error">⚠ {errors.message.message}</span>}
            </div>

            <button type="submit" className="co-submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;