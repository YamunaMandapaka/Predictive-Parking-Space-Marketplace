/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import userIcon from "./images.png"; // <-- import your image here

export default function NavbarComponent({ onLoginClick }) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) setUser(currentUser);
            else setUser(null);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            alert("Logged out successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">ParkingEase</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>

                    {user === null && (
                        <button className="btn btn-primary" onClick={onLoginClick}>
                            Login
                        </button>
                    )}

                    {user && (
                        <Dropdown align="end" id="user-dropdown">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center">
                                <div className="profile-image-container">
                                    <img
                                        src={userIcon} // <-- use imported image
                                        alt="User"
                                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                    />
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="profile-card p-3">
                                    <div className="profile-info text-center">
                                        <h6>{user.displayName || "User"}</h6>
                                        <p>{user.email}</p>
                                        <button className="btn btn-danger w-100" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </div>
        </nav>
    );
}
*/


/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import userIcon from "./images.png"; // User profile image

export default function NavbarComponent({ onLoginClick }) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) setUser(currentUser);
            else setUser(null);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            alert("Logged out successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <nav className="navbar custom-navbar navbar-expand-lg shadow-sm">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold" to="/">ParkHub</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/booking">Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                        
                    </ul>

                    {!user && (
                        <button className="btn btn-outline-light ms-3" onClick={onLoginClick}>
                            Login
                        </button>
                    )}

                    {user && (
                        <Dropdown align="end" id="user-dropdown" className="ms-3">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center p-0">
                                <img
                                    src={userIcon}
                                    alt="User"
                                    className="profile-img"
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="profile-card p-3 text-center">
                                    <h6 className="mb-1">{user.displayName || "User"}</h6>
                                    <p className="mb-2">{user.email}</p>
                                    <button className="btn btn-danger w-100" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </div>
        </nav>
    );
}*/


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import userIcon from "./images.png"; // User profile image

export default function NavbarComponent({ onLoginClick }) {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) setUser(currentUser);
            else setUser(null);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            alert("Logged out successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <nav className="navbar custom-navbar navbar-expand-lg shadow-sm">
            <div className="container">
                {/* Brand Name */}
                <Link className="navbar-brand text-white fw-bold" to="/">
                    ParkHub
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/booking">Booking</Link>
                        </li>

                        {/* ✅ New "Find Owner" Nav Link */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/find-owner">Find Owner</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Login Button (only shown when no user is logged in) */}
                    {!user && (
                        <button className="btn btn-outline-light ms-3" onClick={onLoginClick}>
                            Login
                        </button>
                    )}

                    {/* User Profile Dropdown */}
                    {user && (
                        <Dropdown align="end" id="user-dropdown" className="ms-3">
                            <Dropdown.Toggle
                                variant="light"
                                id="dropdown-basic"
                                className="d-flex align-items-center p-0"
                            >
                                <img
                                    src={userIcon}
                                    alt="User"
                                    className="profile-img"
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="profile-card p-3 text-center">
                                    <h6 className="mb-1">{user.displayName || "User"}</h6>
                                    <p className="mb-2">{user.email}</p>
                                    <button className="btn btn-danger w-100" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </div>
        </nav>
    );
}
