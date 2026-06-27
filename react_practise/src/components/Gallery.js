import React, { useRef } from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useNavigate} from 'react-router-dom'

const Gallery = () => {
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const galleryData = [
    {
      id: 1,
      title: "Royal Wedding Setup",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Banquet Hall",
      category: "Reception",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "Birthday",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    },
    {
      id: 4,
      title: "Corporate Conference",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    },
    {
      id: 5,
      title: "Engagement Ceremony",
      category: "Engagement",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    },
    {
      id: 6,
      title: "Grand Reception Hall",
      category: "Reception",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
    {
      id: 7,
      title: "Traditional Wedding Stage",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    },
    {
      id: 8,
      title: "Elegant Dining Area",
      category: "Dining",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
  ];

  const galleryHighlights = [
    {
      id: 1,
      title: "Grand Wedding Ceremony",
      category: "Wedding",
      description: "Elegant hall with premium floral decorations and luxurious seating.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    },
    {
      id: 2,
      title: "Royal Reception",
      category: "Reception",
      description: "Spacious venue perfect for receptions with modern lighting.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 3,
      title: "Birthday Party",
      category: "Birthday",
      description: "Colorful decorations and customized themes for birthday celebrations.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    },
    {
      id: 4,
      title: "Corporate Conference",
      category: "Corporate",
      description: "Professional conference setup with audio and projector facilities.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    },
    {
      id: 5,
      title: "Engagement Function",
      category: "Engagement",
      description: "Beautifully decorated stage for memorable engagement ceremonies.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    },
    {
      id: 6,
      title: "Anniversary Celebration",
      category: "Anniversary",
      description: "Premium banquet setup for family gatherings and anniversaries.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
            <button onClick={() => navigate("/")} className="absolute top-4 left-4 bg-violet-700 text-white py-2 px-4 rounded"> Home</button>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

        <div className="mb-6">
          <Slider ref={sliderRef} {...settings}>
            {galleryData.map((item) => (
              <div key={item.id} className="px-3">
                <div className="overflow-hidden rounded-xl shadow-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => sliderRef.current && sliderRef.current.slickNext()}
          >
            Next
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryHighlights.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
