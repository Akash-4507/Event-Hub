import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Priests = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const serviceData = [
    { 
      id: 1, 
      name: "Hindu Priest", 
      rating: 4.8, 
      price: "$500", 
      thumbnail: "https://example.com/hindu-priest.jpg",
      description: "Experienced priest for all Hindu ceremonies, including weddings, poojas, and more.",
      availability: "Available on weekends",
      location: "San Jose, CA"
    },
    { 
      id: 2, 
      name: "Christian Priest", 
      rating: 4.7, 
      price: "$400", 
      thumbnail: "https://example.com/christian-priest.jpg",
      description: "Professional Christian priest for weddings, baptisms, and other services.",
      availability: "Available weekdays",
      location: "Los Angeles, CA"
    },
    { 
      id: 3, 
      name: "Muslim Imam", 
      rating: 4.9, 
      price: "$450", 
      thumbnail: "https://example.com/muslim-imam.jpg",
      description: "Imam for Islamic ceremonies, including weddings and religious events.",
      availability: "Available on weekends",
      location: "Chicago, IL"
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Service Banner */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Priests Services</h1>
        <p className="text-gray-700">Find experienced priests for your religious ceremonies and events.</p>
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Hindu</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Christian</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Muslim</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Priests Services</h2>
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
          <Link to="/services/music" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
            <p className="text-center font-semibold">Music</p>
          </Link>
          <Link to="/services/dance-crews" className="bg-yellow-50 p-4 rounded-md shadow-md hover:bg-yellow-100">
            <p className="text-center font-semibold">Dance Crews</p>
          </Link>
          <Link to="/services/event-planner-crews" className="bg-blue-50 p-4 rounded-md shadow-md hover:bg-blue-100">
            <p className="text-center font-semibold">Event Planner Crews</p>
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

export default Priests;
