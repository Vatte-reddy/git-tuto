import React from "react";

import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-gray-100 min-h-screen">

      <button onClick={() => navigate("/")} className="fixed top-4 left-4 z-50 bg-violet-700 text-white py-2 px-4 rounded shadow-lg hover:bg-violet-800">
        Back to Home
      </button>

      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">About Us</h1>
            <p className="text-xl mt-4">
              Creating unforgettable celebrations with elegance and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900"
          alt="Function Hall"
          className="rounded-2xl shadow-2xl"
        />

        {/* Content */}
        <div>
          <h2 className="text-5xl font-bold text-violet-700">
            Welcome to Royal Celestia
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-8">
            Royal Celestia Function Hall is the perfect destination for
            weddings, receptions, engagements, birthdays, anniversaries,
            corporate meetings, and every memorable occasion.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            Our luxurious banquet halls, premium interiors, spacious parking,
            experienced event planners, and exceptional hospitality ensure
            every celebration becomes a lifetime memory.
          </p>

          <button className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition">
            Book Your Event
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <h2 className="text-center text-5xl font-bold mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">

          <div className="bg-violet-100 p-8 rounded-xl text-center shadow-lg">
            <div className="text-5xl">🏛️</div>
            <h3 className="text-2xl font-bold mt-4">Luxury Hall</h3>
            <p className="mt-3 text-gray-600">
              Elegant banquet halls with modern interiors.
            </p>
          </div>

          <div className="bg-violet-100 p-8 rounded-xl text-center shadow-lg">
            <div className="text-5xl">🌸</div>
            <h3 className="text-2xl font-bold mt-4">Decoration</h3>
            <p className="mt-3 text-gray-600">
              Beautiful floral and themed decorations.
            </p>
          </div>

          <div className="bg-violet-100 p-8 rounded-xl text-center shadow-lg">
            <div className="text-5xl">🍽️</div>
            <h3 className="text-2xl font-bold mt-4">Catering</h3>
            <p className="mt-3 text-gray-600">
              Delicious cuisines prepared by expert chefs.
            </p>
          </div>

          <div className="bg-violet-100 p-8 rounded-xl text-center shadow-lg">
            <div className="text-5xl">🚗</div>
            <h3 className="text-2xl font-bold mt-4">Parking</h3>
            <p className="mt-3 text-gray-600">
              Spacious and secure parking facility.
            </p>
          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="bg-violet-700 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center">

          <div>
            <h2 className="text-5xl font-bold">10+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">1200+</h2>
            <p className="mt-2">Events Hosted</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">980+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">4.9★</h2>
            <p className="mt-2">Customer Rating</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;