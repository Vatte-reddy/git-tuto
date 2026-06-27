import React from "react";
import { useNavigate } from 'react-router-dom';

const ReservationForm = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 relative">
      <button onClick={() => navigate('/')} className="absolute top-4 left-4 bg-violet-700 text-white py-2 px-4 rounded">Home</button>
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-violet-700 mb-8">
          Book Your Event
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <input
            type="number"
            placeholder="Number of Guests"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <input
            type="date"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <input
            type="time"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600"
          />

          <select className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600">
            <option>Select Occasion</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Engagement</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Corporate Event</option>
          </select>

          <select className="border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600">
            <option>Select Hall</option>
            <option>Royal Hall</option>
            <option>Grand Palace</option>
            <option>Luxury Banquet</option>
            <option>Premium Hall</option>
          </select>

          <textarea
            rows="4"
            placeholder="Additional Requirements"
            className="md:col-span-2 border border-gray-300 rounded-lg p-3 outline-none focus:border-violet-600 resize-none"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-violet-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-violet-700 transition"
          >
            Reserve Now
          </button>

        </form>
      </div>
    </div>
  );
};

export default ReservationForm;