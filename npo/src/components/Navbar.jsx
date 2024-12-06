import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Camera, Cake, Star, Shield, Clipboard, Music, Users, Calendar, Building, Brush } from 'lucide-react';

const Navbar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-64 h-screen fixed top-0 left-0 p-6">
      <div className="text-2xl font-extrabold mb-10 flex items-center tracking-wide">
        <Home className="mr-3 text-blue-400" />
        <Link to="/" className="hover:text-gray-300 transition duration-200 ease-in-out">DASHBOARD</Link>
      </div>
      
      <div className="text-lg font-semibold flex flex-col gap-6">
        {/* Services Menu */}
        <div>
          <button onClick={toggleSubMenu} className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
            <Star className="mr-3 text-yellow-400" />
            <span className="tracking-wider">Services</span>
          </button>
          {isSubMenuOpen && (
            <div className="ml-6 mt-3 flex flex-col gap-3 text-sm text-gray-300 transition-all duration-200 ease-in-out">
              <Link to="../Services/catering" className="flex items-center hover:text-blue-400">
                <Cake className="mr-2 text-pink-400" />
                Catering
              </Link>
              <Link to="../Services/Entertainment" className="flex items-center hover:text-blue-400">
                <Music className="mr-2 text-purple-400" />
                Music
              </Link>
              <Link to="../Services/dance-crews" className="flex items-center hover:text-blue-400">
                <Users className="mr-2 text-green-400" />
                Dance Crews
              </Link>
              <Link to="../Services/priests" className="flex items-center hover:text-blue-400">
                <Shield className="mr-2 text-red-400" />
                Priests
              </Link>
              <Link to="../Services/marriage-halls" className="flex items-center hover:text-blue-400">
                <Building className="mr-2 text-orange-400" />
                Marriage Halls
              </Link>
              <Link to="../Services/event-halls" className="flex items-center hover:text-blue-400">
                <Building className="mr-2 text-blue-400" />
                Event Halls
              </Link>
              <Link to="../Services/event-planner-crews" className="flex items-center hover:text-blue-400">
                <Clipboard className="mr-2 text-cyan-400" />
                Event Planner Crews
              </Link>
              <Link to="../Services/photography" className="flex items-center hover:text-blue-400">
                <Camera className="mr-2 text-indigo-400" />
                Photography
              </Link>
              <Link to="../Services/makeup" className="flex items-center hover:text-blue-400">
                <Brush className="mr-2 text-yellow-400" />
                Makeup Artists
              </Link>
            </div>
          )}
        </div>

        <Link to="/admin" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <User className="mr-3 text-cyan-400" />
          <span className="tracking-wider">Admin</span>
        </Link>

        <Link to="/gallery" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <Camera className="mr-3 text-indigo-400" />
          <span className="tracking-wider">Gallery</span>
        </Link>

        <Link to="/volunteer" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <User className="mr-3 text-teal-400" />
          <span className="tracking-wider">Vendor</span>
        </Link>

        <Link to="/about" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <User className="mr-3 text-orange-400" />
          <span className="tracking-wider">About Us</span>
        </Link>

        <Link to="/contact" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <User className="mr-3 text-purple-400" />
          <span className="tracking-wider">Contact</span>
        </Link>

        <Link to="/logout" className="flex items-center hover:text-blue-400 transition duration-150 ease-in-out">
          <User className="mr-3 text-red-400" />
          <span className="tracking-wider">Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
