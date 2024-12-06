import React, { useState, useEffect } from 'react';
import { getvendor } from '../../server/api'; // Import your API function
import { Link } from 'react-router-dom';

const Showservice = () => {
  const [vendor, setVendor] = useState([]); // Initialize as an empty array

  // Fetch vendor data from the backend
  const fetchVendorData = async () => {
    try {
      const response = await getvendor(); // Fetch data using getvendor
      const data = response.data;  // Access data from the 'data' property

      // Directly set the vendor data if it's an array
      if (Array.isArray(data)) {
        setVendor(data);  // Set the vendor state to the fetched array
      } else {
        console.error('Fetched data is not an array:', data);
        setVendor([]);  // Set vendor to an empty array if the data is not an array
      }
    } catch (error) {
      console.error('Error fetching vendor data:', error);
      setVendor([]);  // Set vendor to an empty array in case of error
    }
  };

  useEffect(() => {
    fetchVendorData();  // Fetch vendor data when the component mounts
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4 text-center">Managing Services</h2>
          <p className="text-gray-700 text-center mb-6">
            Here, you can view, edit, or delete the services listed on your platform.
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recommended/Similar Services</h2>
            <div className="grid grid-cols-3 gap-4">
              <Link to="/Dancecrews" className="bg-blue-50 p-4 rounded-md shadow-md hover:bg-blue-100">
                <p className="text-center font-semibold">Dance Crews</p>
              </Link>
              <Link to="/Priests" className="bg-yellow-50 p-4 rounded-md shadow-md hover:bg-yellow-100">
                <p className="text-center font-semibold">Priests</p>
              </Link>
              <Link to="/Marriagehall" className="bg-green-50 p-4 rounded-md shadow-md hover:bg-green-100">
                <p className="text-center font-semibold">Marriage Halls</p>
              </Link>
              <Link to="/Eventhall" className="bg-red-50 p-4 rounded-md shadow-md hover:bg-red-100">
                <p className="text-center font-semibold">Event Halls</p>
              </Link>
              <Link to="/Eventplanner" className="bg-purple-50 p-4 rounded-md shadow-md hover:bg-purple-100">
                <p className="text-center font-semibold">Event Planner Crews</p>
              </Link>
              <Link to="/Entertainment" className="bg-pink-50 p-4 rounded-md shadow-md hover:bg-pink-100">
                <p className="text-center font-semibold">Music</p>
              </Link>
              <Link to="/Catering" className="bg-indigo-50 p-4 rounded-md shadow-md hover:bg-indigo-100">
                <p className="text-center font-semibold">Catering</p>
              </Link>
              <Link to="/Photography" className="bg-teal-50 p-4 rounded-md shadow-md hover:bg-teal-100">
                <p className="text-center font-semibold">Photography</p>
              </Link>
              <Link to="/Makeup" className="bg-orange-50 p-4 rounded-md shadow-md hover:bg-orange-100">
                <p className="text-center font-semibold">Makeup</p>
              </Link>
              <Link to="/Hallrental" className="bg-orange-50 p-4 rounded-md shadow-md hover:bg-orange-100">
                <p className="text-center font-semibold">Hall Rental</p>
              </Link>
            </div>
          </div>

          {/* Vendor Service Box */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Vendor Services</h3>
            {vendor.length > 0 ? (
              vendor.map((services) => (
                <div key={services._id} className="bg-white p-6 rounded-md shadow-md mb-4">
                  <div className="bg-gray-50 p-4 rounded-md shadow-inner">
                    <p className="text-center font-semibold mb-4">{services.service}</p>

                    {/* Action buttons */}
                    <div className="flex justify-between">
                      <button
                        className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-700"
                        // onClick={() => handleDelete(services._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                        // onClick={() => handleOk(services._id)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No vendor services available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showservice;
