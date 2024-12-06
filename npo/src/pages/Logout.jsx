import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    // Reload the page after a short delay
    const timeout = setTimeout(() => {
      window.location.reload(); // Reload the current page
    }, 2000); // Reload after 2 seconds

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Logout</h1>
        <p className="text-lg">You have successfully logged out. Thank you for being part of our organization.</p>
        <p className="text-gray-500 mt-2">Reloading the page...</p>
      </div>
    </div>
  );
};

export default Logout;
