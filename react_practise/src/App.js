import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import ReservationForm from "./components/ReservationForm";
import Gallery from "./components/Gallery";
import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/customerreviews" element={<CustomerReviews />} />
        <Route path="/reviews" element={<CustomerReviews />} />
      </Routes>


      
    </div>
  );
}

export default App;