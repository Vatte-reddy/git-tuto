import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
    const navigate = useNavigate();

    const services = [
  {
    id: 1,
    title: "Banquet Hall",
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    description:
      "Spacious and luxurious banquet halls for weddings, receptions, birthdays, and corporate events.",
  },
  {
    id: 2,
    title: "Decoration",
    icon: "🌸",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    description:
      "Elegant floral decorations, themed stage setups, lighting, and customized event décor.",
  },
  {
    id: 3,
    title: "Catering",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    description:
      "Delicious vegetarian and non-vegetarian cuisines prepared by experienced chefs with premium quality.",
  },
  {
    id: 4,
    title: "Photography",
    icon: "📸",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    description:
      "Professional photography and videography services to capture every unforgettable moment.",
  },
  {
    id: 5,
    title: "Music & Entertainment",
    icon: "🎵",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    description:
      "Live music, DJ, premium sound systems, and entertainment to make your celebration lively.",
  },
  {
    id: 6,
    title: "Event Management",
    icon: "👨‍💼",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    description:
      "Our experienced event managers handle every detail, ensuring a smooth and stress-free celebration.",
  },
  {
    id: 7,
    title: "Parking Facility",
    icon: "🚗",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800",
    description:
      "Large and secure parking space with dedicated security staff for all guests.",
  },
  {
    id: 8,
    title: "Bridal Room",
    icon: "👑",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    description:
      "Luxurious bridal suite with elegant interiors, makeup area, air conditioning, and private amenities.",
  },
];


  return (
    <div className="relative min-h-screen bg-gray-100 py-8">
      <button onClick={() => navigate('/')} className="absolute top-4 left-4 bg-violet-700 text-white py-2 px-4 rounded">Home</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6 text-center">
        <div className="text-5xl">{service.icon}</div>

        <h2 className="text-2xl font-bold mt-4">
          {service.title}
        </h2>

        <p className="text-gray-600 mt-3">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Service
