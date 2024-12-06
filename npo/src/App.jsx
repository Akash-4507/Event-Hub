import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login'; // Add Login component
import Home from './pages/Home';
import Catering from './Services/Catering';
import Music from './Services/Entertainment.jsx';
import HallRentals from './Services/HallRentals';
import Photography from './Services/Photography';
import Makeup from './Services/Makeup';
import Entertainment from './Services/Entertainment';
import DanceCrews from './Services/DanceCrews';
import Priests from './Services/Priests';
import EventPlannerCrews from './Services/EventplannerCrews.jsx';
import MarriageHalls from './Services/MarriageHalls';
import EventHalls from './Services/EventHalls';
import Gallery from './pages/Gallery';
import Volunteer from './pages/Vendor.jsx';
import Admin from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact';
import Logout from './pages/Logout';
import Showservice from './Adminside/Showservice.jsx'
import DancecrewsAd from './Adminside/DancecrewsAd.jsx'
import CateringAd from './Adminside/CateringAd.jsx'
import EventhallAd from './Adminside/EventhallAd.jsx'
import MarriagehallAd from './Adminside/MarriagehallAd.jsx'
import EntertainmentAd from './Adminside/EntertainmentAd.jsx'
import MakeupAd from './Adminside/MakeupAd.jsx'
import PhotographyAd from './Adminside/PhotographyAd.jsx'
import HallrentalAd from './Adminside/HallrentalAd.jsx'
import PriestsAd from './Adminside/PriestsAd.jsx'
import EventplannerAd from './Adminside/EventplannerAd.jsx'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex">
          <Navbar />
          <div className="flex-grow ml-64 bg-gray-100 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Services Routes */}
              <Route path="/services/catering" element={<Catering />} />
              <Route path="/services/entertainment" element={<Music />} />
              <Route path="/services/hall-rentals" element={<HallRentals />} />
              <Route path="/services/photography" element={<Photography />} />
              <Route path="/services/makeup" element={<Makeup />} />
              <Route path="/services/entertainment" element={<Entertainment />} />
              <Route path="/services/dance-crews" element={<DanceCrews />} />
              <Route path="/services/priests" element={<Priests />} />
              <Route path="/services/marriage-halls" element={<MarriageHalls />} />
              <Route path="/services/event-halls" element={<EventHalls />} />
              <Route path="/services/event-planner-crews" element={<EventPlannerCrews />} />
              
              {/* Other Pages */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />

              {/* admin pages */}
              <Route path="/showservice" element={<Showservice />} />
              <Route path="/Dancecrews" element={<DancecrewsAd />} />
              <Route path="/Catering" element={<CateringAd />} />
              <Route path="/Eventhall" element={<EventhallAd />} />
              <Route path="/Eventplanner" element={<EventplannerAd />} />
              <Route path="/Hallrental" element={<HallrentalAd />} />
              <Route path="/Makeup" element={<MakeupAd />} />
              <Route path="/Marriagehall" element={<MarriagehallAd />} />
              <Route path="/Photography" element={<PhotographyAd />} />
              <Route path="/Priests" element={<PriestsAd />} />
              <Route path="/Entertainment" element={<EntertainmentAd />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} /> 
      )}
    </Router>
  );
};

export default App;
