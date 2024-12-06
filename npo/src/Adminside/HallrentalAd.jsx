import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Edit3, Trash2, PlusCircle } from 'lucide-react';

const HallrentalAd = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showAddService, setShowAddService] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const priceRef = useRef();
  const availabilityRef = useRef();
  const locationRef = useRef();
  const imgUrlRef = useRef();

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
    // More mock data as needed
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!titleRef.current.value) newErrors.title = "Title is required";
    if (!descRef.current.value) newErrors.description = "Description is required";
    if (!ratingRef.current.value || isNaN(ratingRef.current.value) || ratingRef.current.value <= 0) 
      newErrors.rating = "Rating must be a positive number";
    if (!priceRef.current.value) newErrors.price = "Starting price is required";
    if (!availabilityRef.current.value) newErrors.availability = "Availability is required";
    if (!locationRef.current.value) newErrors.location = "Location is required";
    if (!imgUrlRef.current.value || !/^https?:\/\/.+\.(jpg|jpeg|png)$/.test(imgUrlRef.current.value))
      newErrors.imgUrl = "A valid image URL ending in .jpg, .jpeg, or .png is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddService = () => {
    if (!validateForm()) return;
    const newService = {
      id: serviceData.length + 1,
      name: titleRef.current.value,
      description: descRef.current.value,
      rating: parseFloat(ratingRef.current.value),
      price: priceRef.current.value,
      availability: availabilityRef.current.value,
      location: locationRef.current.value,
      thumbnail: imgUrlRef.current.value
    };

    console.log("New Service:", newService);
    setShowAddService(false);
  };

  const handleEdit = (id) => {
    console.log(`Edit service with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete service with id: ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Admin Description */}
      <div className="bg-gray-200 p-6 text-center rounded-md mb-6">
        <h1 className="text-3xl font-semibold mb-2">Manage Dance Crew Services</h1>
        <p className="text-gray-700">Add, edit, or delete dance crew services available on the platform.</p>
      </div>

      {/* Add Service Button */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setShowAddService(!showAddService)}
          className="flex items-center bg-green-500 text-white px-3 py-2 rounded-md"
        >
          <PlusCircle className="mr-2" /> Add Service
        </button>
      </div>

      {/* Add Service Form */}
      {showAddService && (
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Add New Dance Crew Service</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input ref={titleRef} type="text" placeholder="Service Title" className="p-2 border rounded-md" />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div>
              <input ref={descRef} type="text" placeholder="Description" className="p-2 border rounded-md" />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>
            <div>
              <input ref={ratingRef} type="number" placeholder="Rating" className="p-2 border rounded-md" />
              {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
            </div>
            <div>
              <input ref={priceRef} type="text" placeholder="Starting Price" className="p-2 border rounded-md" />
              {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
            </div>
            <div>
              <input ref={availabilityRef} type="text" placeholder="Availability" className="p-2 border rounded-md" />
              {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
            </div>
            <div>
              <input ref={locationRef} type="text" placeholder="Location" className="p-2 border rounded-md" />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>
            <div>
              <input ref={imgUrlRef} type="text" placeholder="Image URL" className="p-2 border rounded-md" />
              {errors.imgUrl && <p className="text-red-500 text-sm">{errors.imgUrl}</p>}
            </div>
          </div>
          <button 
            onClick={handleAddService}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Service
          </button>
        </div>
      )}

      {/* Service Cards */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Dance Crews</h2>
        <div className="grid grid-cols-2 gap-4">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md p-4 rounded-md relative cursor-pointer hover:bg-gray-100"
            >
              <img src={service.thumbnail} alt={service.name} className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-600"><strong>Rating: </strong>{service.rating} ★</p>
              <p className="text-gray-600">Starting Price: {service.price}</p>
              <p className="text-gray-600">Availability: {service.availability}</p>
              <p className="text-gray-600">Location: {service.location}</p>
              
              <div className="flex mt-4 space-x-2">
                <button 
                  onClick={() => handleEdit(service.id)}
                  className="flex items-center bg-blue-500 text-white px-2 py-1 rounded-md"
                >
                  <Edit3 className="mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(service.id)}
                  className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  <Trash2 className="mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


     {/* Bottom Section: Recommended Services */}
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

      {/* Contact Button */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          If you need help with managing services, please <button 
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

export default HallrentalAd;
