import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCatering } from '../../server/api';

const Catering = () => {
  const [catering, setCatering] = useState([]);
  const navigate = useNavigate();

  const fetchCatering = async () => {
    try {
      const { data } = await getCatering();
      console.log(data);
      setCatering(data);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    fetchCatering();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Service Banner */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Catering Services</h1>
        <p className="text-gray-700">Explore top catering services for all event types.</p>
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buffet</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sit-Down</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Special Cuisines</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Service Providers</h2>
        <div className="grid grid-cols-2 gap-4">
          {catering.map((service) => (
            <div
              key={service.id} // Ensure each item has a unique key
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

      {/* Bottom Section: Personalized Suggestions */}
      <div className="mt-6 bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Personalized Suggestions & Popular Services</h2>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded-md shadow-md w-1/3">
            <h3 className="font-semibold">Trending Services Near You</h3>
            <p className="text-gray-600">Find out what others are booking!</p>
          </div>
          <div 
            className="bg-white p-4 rounded-md shadow-md w-1/3 cursor-pointer"
            onClick={() => navigate('/gallery')}
          >
            <h3 className="font-semibold">User-Favorited Services</h3>
            <p className="text-gray-600">Highly rated by other users.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md w-1/3">
            <h3 className="font-semibold">Recently Viewed Services</h3>
            <p className="text-gray-600">Services you recently checked out.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recommended Services */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recommended/Similar Services</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/services/dance-crews" className="bg-blue-50 p-4 rounded-md shadow-md hover:bg-blue-100">
            <p className="text-center font-semibold">Dance Crews</p>
          </Link>
          <Link to="/services/priests" className="bg-yellow-50 p-4 rounded-md shadow-md hover:bg-yellow-100">
            <p className="text-center font-semibold">Priests</p>
          </Link>
          <Link to="/services/marriage-halls" className="bg-green-50 p-4 rounded-md shadow-md hover:bg-green-100">
            <p className="text-center font-semibold">Marriage Halls</p>
          </Link>
          <Link to="/services/event-halls" className="bg-red-50 p-4 rounded-md shadow-md hover:bg-red-100">
            <p className="text-center font-semibold">Event Halls</p>
          </Link>
          <Link to="/services/event-planner-crews" className="bg-purple-50 p-4 rounded-md shadow-md hover:bg-purple-100">
            <p className="text-center font-semibold">Event Planner Crews</p>
          </Link>
          <Link to="/services/music" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
            <p className="text-center font-semibold">Music</p>
          </Link>
          <Link to="/services/catering" className="bg-indigo-50 p-4 rounded-md shadow-md hover:bg-indigo-100">
            <p className="text-center font-semibold">Catering</p>
          </Link>
          <Link to="/services/grocery-shop" className="bg-teal-50 p-4 rounded-md shadow-md hover:bg-teal-100">
            <p className="text-center font-semibold">Grocery Shop</p>
          </Link>
          <Link to="/services/makeup" className="bg-orange-50 p-4 rounded-md shadow-md hover:bg-orange-100">
            <p className="text-center font-semibold">Makeup</p>
          </Link>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          If you feel difficulty in booking, please{' '}
          <button 
            onClick={() => navigate('/contact')}
            className="text-blue-500 underline"
          >
            contact us
          </button>
          for assistance.
        </p>
      </div>
    </div>
  );
};

export default Catering;
