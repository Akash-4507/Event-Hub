import React, { useState } from 'react';
import { addvendor } from '../../server/api';
import { useNavigate } from 'react-router-dom';

const Vendor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Handle Vendor Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic (e.g., check credentials, JWT, etc.)
    setIsLoggedIn(true); // Mark vendor as logged in
  };

  const handleAddService = async () => {
    const serviceData = {
      service: serviceDetails, // Send additional fields as needed
    };

    try {
      const response = await addvendor(serviceData); // API call to add service
      if (response.status === 200) {
        console.log('Service added successfully:', response.data);
        setServiceDetails(''); // Clear input after submission
        alert('Service added successfully!');
      } else {
        console.warn('Failed to add service. Status code:', response.status);
        alert('Failed to add service. Please try again.');
      }
    } catch (error) {
      console.error('Error while adding service:', error);
      alert('An error occurred while adding the service. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {!isLoggedIn ? (
        // Render Vendor Login if not logged in
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Vendor Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 border rounded-md"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
              Login
            </button>
          </form>
        </div>
      ) : (
        // Render Vendor Dashboard if logged in
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Vendor Dashboard</h1>

          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add Service Details</h2>

            <textarea
              className="w-full p-4 border rounded-md h-48 resize-none"
              placeholder="Enter service details here..."
              value={serviceDetails}
              onChange={(e) => setServiceDetails(e.target.value)}
            />

            <button
              onClick={handleAddService}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md"
            >
              Add Service
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendor;
