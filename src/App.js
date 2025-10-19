/*import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Booking from "./components/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      
      <NavbarComponent onLoginClick={() => setShowLogin(true)} />

      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
*/
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Booking from "./components/Booking"; // ensure default export
import { ToastContainer } from "react-toastify";
import FindOwner from "./components/FindOwner";

import "react-toastify/dist/ReactToastify.css";
import 'leaflet/dist/leaflet.css';
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <NavbarComponent onLoginClick={() => setShowLogin(true)} />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/booking" element={<Booking />} /> {/* only this route */}
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/find-owner" element={<FindOwner />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
