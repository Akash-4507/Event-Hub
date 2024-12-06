import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      {/* Important Notifications Section */}
      <div className="bg-yellow-200 text-yellow-800 p-4 rounded-lg mb-6 max-w-4xl w-full shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Important Announcement</h2>
        <p className="text-lg">
          We're currently offering a 20% discount on all bookings made before the end of this month! Book your event today and save on venues, catering, and more.
        </p>
      </div>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Welcome to One Stop Event Booking System
      </h1>
      
      <p className="text-xl text-gray-800 mb-4 max-w-4xl font-medium">
        Our mission is to simplify the event planning process by providing a comprehensive platform that connects users with venues, vendors, and essential services. We aim to make your event booking experience seamless and efficient.
      </p>
      
      <p className="text-lg text-gray-700 mb-8 max-w-3xl font-light">
        Whether you are planning a wedding, corporate event, or any special occasion, our platform is designed to meet your needs. Join us in creating unforgettable experiences, where every detail is taken care of, and every moment is cherished.
      </p>

      {/* Booking Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Booking Page?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          The Booking page is where you can easily reserve venues and services for your events. Our user-friendly interface allows you to explore a variety of options and find the perfect fit for your occasion. From spaces to caterers, everything is just a click away.
        </p>
        <Link to="/services"> {/* Change the link to /services */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition duration-300">
            Start Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
