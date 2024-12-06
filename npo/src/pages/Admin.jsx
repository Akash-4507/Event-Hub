import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate after successful login

  // Hardcoded email and password for admin verification
  const adminEmail = 'admin@example.com';
  const adminPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // Simple email and password verification
    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
      navigate('/showservice'); // Navigate to Showservice page after successful login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xl">
        {/* Admin Login Form */}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="Enter admin email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="Enter password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
