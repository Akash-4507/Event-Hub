import React, { useState, useEffect, useRef } from 'react';
import { getgallery, addgallery } from '../../server/api'; // Import API functions

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Create refs for form fields
  const titleref = useRef(null);
  const imageref = useRef(null);
  const overviewref = useRef(null);
  const reviewref = useRef(null);
  const specificationsref = useRef(null);
  const feedbackref = useRef(null);
  const contactref = useRef(null);

  // Fetch gallery data from the backend
  const fetchGalleryData = async () => {
    try {
      const { data } = await getgallery();
      console.log(data); // Log data to check structure
      // Check if fetched data is an array and then set it
      if (Array.isArray(data.fetchedData)) {
        setGallery(data.fetchedData);
      } else {
        console.warn("Fetched data is not an array.");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);


  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const gallerydata = {
      title: titleref.current.value,
      image: imageref.current.value,
      overview: overviewref.current.value,
      review: reviewref.current.value,
      specifications: specificationsref.current.value,
      feedback: feedbackref.current.value,
      contact: contactref.current.value,
    };

    try {
      const response = await addgallery(gallerydata);
      response.status(201).json(response)
        fetchGalleryData(); // Refresh gallery data
    } catch (error) {
      console.warn(error);
    }
    setShowForm(false); // Close form after submission
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Event Gallery</h1>
      
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {Array.isArray(gallery) && gallery.map((event) => (
          <div
            key={event.id || event.title} // Use a unique key (id or title)
            className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-700 text-sm mb-2"><strong>Overview:</strong> {event.overview}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Review:</strong> {event.review}</p>
            <p className="text-gray-700 text-sm mb-2"><strong>Specifications:</strong> {event.specifications}</p>
            <p className="text-gray-700 text-sm"><strong>Feedback:</strong> {event.feedback}</p>
            <p className="text-gray-700 text-sm"><strong>Contact:</strong> {event.contact}</p>
          </div>
        ))}
      </div>

      {/* Floating Plus Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition"
      >
        <span className="text-2xl">+</span>
      </button>

      {/* Add Event Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/6">
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Title</label>
                <input
                  type="text"
                  ref={titleref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Image URL</label>
                <input
                  type="text"
                  ref={imageref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                />
               
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Overview</label>
                <textarea
                  ref={overviewref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                ></textarea>
                
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Review</label>
                <textarea
                  ref={reviewref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                ></textarea>
                
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Specifications</label>
                <textarea
                  ref={specificationsref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                ></textarea>
                
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Feedback</label>
                <textarea
                  ref={feedbackref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                ></textarea>
                
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Contact</label>
                <input
                  type="text"
                  ref={contactref}
                  className="w-full px-3 py-2 mt-1 border rounded-md"
                  required
                />
               
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
