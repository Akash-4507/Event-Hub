import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Entertainment = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const navigate = useNavigate();

  const serviceData = [
    { 
      id: 1, 
      name: "Live Band", 
      rating: 4.9, 
      price: "$1500", 
      thumbnail: "https://example.com/live-band.jpg",
      description: "Energetic live band performances for weddings and events.",
      availability: "Available on weekends",
      location: "Austin, TX",
      bookedDates: ["2024-11-20", "2024-11-25"] // Sample booked dates
    },
    { 
      id: 2, 
      name: "Comedy Show", 
      rating: 4.8, 
      price: "$700", 
      thumbnail: "https://example.com/comedy-show.jpg",
      description: "Stand-up comedy shows to bring laughter to your event.",
      availability: "Available weekdays",
      location: "Miami, FL",
      bookedDates: ["2024-11-22", "2024-12-05"] // Sample booked dates
    },
  ];

  const handleShowCalendar = (service) => {
    setSelectedService(service);
    setBookedDates(service.bookedDates);
    setShowCalendar(true);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Service Banner */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Entertainment Services</h1>
        <p className="text-gray-700">Discover entertainment options to elevate your event.</p>
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Live Band</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Comedy</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Magic Show</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Entertainment Providers</h2>
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
              <div className="mt-2">
                <button 
                  onClick={() => handleShowCalendar(service)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Booked Dates
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">Booked Dates</h2>
            <Calendar
              value={bookedDates.map(date => new Date(date))}
              tileDisabled={({ date }) =>
                bookedDates.some(bookedDate => new Date(bookedDate).toDateString() === date.toDateString())
              }
            />
            <button 
              onClick={() => setShowCalendar(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Section: Recommended Services */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recommended Services</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/services/dance-crews" className="bg-blue-50 p-4 rounded-md shadow-md hover:bg-blue-100">
            <p className="text-center font-semibold">Dance Crews</p>
          </Link>
          <Link to="/services/music" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
            <p className="text-center font-semibold">Music</p>
          </Link>
          <Link to="/services/event-planner-crews" className="bg-purple-50 p-4 rounded-md shadow-md hover:bg-purple-100">
            <p className="text-center font-semibold">Event Planner Crews</p>
          </Link>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          For booking assistance, please <button 
            onClick={() => navigate('/contact')}
            className="text-blue-500 underline"
          >
            contact us
          </button>.
        </p>
      </div>
    </div>
  );
};

export default Entertainment;
