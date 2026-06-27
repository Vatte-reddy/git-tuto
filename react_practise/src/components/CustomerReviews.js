import React, { useRef } from 'react'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
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

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      event: "Wedding Event",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The venue was absolutely stunning and the service exceeded our expectations. Royal Celestia made our wedding day truly unforgettable. The decoration, hospitality, and management were exceptional.",
    },
    {
      id: 2,
      name: "Priya Verma",
      event: "Birthday Celebration",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "We celebrated my sister's birthday here and everything was perfect—from the decorations to the food. The staff was friendly, and the hall looked beautiful. Highly recommended!",
    },
    {
      id: 3,
      name: "Amit Mehta",
      event: "Corporate Event",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      review:
        "A perfect place for corporate meetings and conferences. Spacious hall, modern facilities, and professional staff made our event successful. We will definitely book again.",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      event: "Reception",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "Our reception was organized beautifully. The lighting, stage decoration, and seating arrangements were outstanding. Every guest appreciated the venue.",
    },
    {
      id: 5,
      name: "Karthik Rao",
      event: "Engagement Ceremony",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      review:
        "Amazing experience! The management team handled everything professionally. The ambience was luxurious, and the entire event went smoothly without any issues.",
    },
    {
      id: 6,
      name: "Ananya Patel",
      event: "Anniversary Celebration",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      review:
        "Beautiful venue with elegant interiors. Our anniversary celebration became a memorable experience because of the excellent service and well-maintained hall.",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">

            <button onClick={() => navigate("/")} className="absolute top-4 left-4 bg-violet-700 text-white py-2 px-4 rounded"> Home</button>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">What Our Clients Say</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            We take pride in creating unforgettable experiences. Here's what our happy clients have to say.
          </p>
        </div>

        <div className="mb-8">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((item) => (
              <div key={item.id} className="px-3">
                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.event}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{item.review}"</p>
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center gap-4">
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

        <div className="mt-10 flex justify-center">
          <img
            src="https://c8.alamy.com/comp/2JPMFCA/an-interior-design-of-a-wedding-hall-in-chennai-india-2JPMFCA.jpg"
            alt="hall interior"
            className="mx-auto w-full max-w-4xl h-72 rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
 