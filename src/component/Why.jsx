import React from 'react'
import { FaTruck, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa'

const Why = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "Get your orders delivered quickly and safely to your doorstep."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payments",
      desc: "Your transactions are protected with top-level security systems."
    },
    {
      icon: <FaTags />,
      title: "Best Prices",
      desc: "We offer competitive prices without compromising on quality."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our team is always ready to help you anytime you need us."
    }
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-white">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide the best shopping experience with quality products,
          fast delivery, and excellent customer service.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition"
          >
            {/* ICON */}
            <div className="text-3xl text-green-500 mb-4 flex justify-center">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Why