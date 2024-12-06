import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Photography = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const serviceData = [
    { 
      id: 1, 
      name: "Wedding Photography", 
      rating: 4.9, 
      price: "$2500", 
      thumbnail: "https://example.com/wedding-photography.jpg",
      description: "Capturing every magical moment of your special day.",
      availability: "Available on weekends",
      location: "Los Angeles, CA"
    },
    { 
      id: 2, 
      name: "Event Photography", 
      rating: 4.7, 
      price: "$1500", 
      thumbnail: "https://example.com/event-photography.jpg",
      description: "Professional photography for any type of event.",
      availability: "Available weekdays",
      location: "New York, NY"
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Service Banner */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Photography Services</h1>
        <p className="text-gray-700">Explore the best photography services for your event or special day.</p>
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Wedding</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Event</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Portrait</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Photography Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <img src={service.thumbnail} alt={service.name} className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-600"><strong>Rating: </strong>{service.rating} ★</p>
              <p className="text-gray-600">Starting Price: {service.price}</p>
              <p className="text-gray-600">Availability: {service.availability}</p>
              <p className="text-gray-600">Location: {service.location}</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Recommended Services */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recommended Services</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/services/makeup" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
            <p className="text-center font-semibold">Makeup</p>
          </Link>
          <Link to="/services/music" className="bg-yellow-50 p-4 rounded-md shadow-md hover:bg-yellow-100">
            <p className="text-center font-semibold">Music</p>
          </Link>
          <Link to="/services/dance-crews" className="bg-blue-50 p-4 rounded-md shadow-md hover:bg-blue-100">
            <p className="text-center font-semibold">Dance Crews</p>
          </Link>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          If you need help with booking, please <button 
            onClick={() => navigate('/contact')}
            className="text-blue-500 underline"
          >
            contact us
          </button> for assistance.
        </p>
      </div>
    </div>
  );
};

export default Photography;
