import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DanceCrews = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookedDates, setBookedDates] = useState(new Date()); // Example: useState for initial date
  const navigate = useNavigate();

  const serviceData = [
    { 
      id: 1, 
      name: "Urban Dance Crew", 
      rating: 4.9, 
      price: "$1200", 
      thumbnail: "https://example.com/urban-dance.jpg",
      description: "High-energy urban dance performances for all events.",
      availability: "Available on weekends",
      location: "San Francisco, CA"
    },
    { 
      id: 2, 
      name: "Classical Dance Troupe", 
      rating: 4.7, 
      price: "$950", 
      thumbnail: "https://example.com/classical-dance.jpg",
      description: "Elegant classical dance performances for traditional events.",
      availability: "Available weekdays",
      location: "Chicago, IL"
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Service Banner */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Dance Crew Services</h1>
        <p className="text-gray-700">Explore top dance crew services for your event.</p>
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Urban</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Classical</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contemporary</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Dance Crews</h2>
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
              <button 
                onClick={() => setShowCalendar(true)} 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Booked Dates
              </button>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Select Booked Dates</h2>
            <DatePicker
              selected={bookedDates}
              onChange={(date) => setBookedDates(date)}
              inline
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowCalendar(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section: Recommended Services */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recommended Services</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/services/music" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
            <p className="text-center font-semibold">Music</p>
          </Link>
          <Link to="/services/priests" className="bg-yellow-50 p-4 rounded-md shadow-md hover:bg-yellow-100">
            <p className="text-center font-semibold">Priests</p>
          </Link>
          <Link to="/services/event-planner-crews" className="bg-purple-50 p-4 rounded-md shadow-md hover:bg-purple-100">
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

export default DanceCrews;
