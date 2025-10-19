// src/components/Booking.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useNavigate } from "react-router-dom"; // ✅ navigation
import { toast } from "react-toastify"; // ✅ toast
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Booking.css";

const Booking = () => {
    const [userPosition, setUserPosition] = useState(null);
    const [parkingSpots, setParkingSpots] = useState([]);
    const navigate = useNavigate();

    // Custom map icons
    const parkingIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [35, 35],
        iconAnchor: [17, 35],
    });

    const userIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        iconSize: [35, 35],
        iconAnchor: [17, 35],
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords = [pos.coords.latitude, pos.coords.longitude];
                    setUserPosition(coords);
                    setParkingSpots([
                        { position: [coords[0] + 0.002, coords[1] + 0.002], name: "Central Parking" },
                        { position: [coords[0] - 0.003, coords[1] - 0.004], name: "City Mall Parking" },
                        { position: [coords[0] + 0.004, coords[1] - 0.003], name: "Downtown Parking" },
                    ]);
                },
                () => {
                    alert("Please allow location access to show nearby parking areas.");
                }
            );
        } else {
            alert("Geolocation not supported by your browser.");
        }
    }, []);

    // ✅ When user clicks "Book Your Slot"
    const handleBook = () => {
        toast.success("Redirecting to Find Owner page...");
        setTimeout(() => {
            navigate("/find-owner");
        }, 1500); // waits a bit before redirect
    };

    return (
        <div className="booking-container">
            <h2>Parking Booking Map</h2>
            <p className="subtext">Find nearby parking and book your slot easily.</p>

            <div className="map-box">
                {userPosition ? (
                    <MapContainer
                        center={userPosition}
                        zoom={15}
                        style={{ height: "400px", width: "100%", borderRadius: "15px" }}
                    >
                        <TileLayer
                            url="use your link"
                            attribution='&copy; <a href="use your link">OpenStreetMap</a>'
                        />
                        <Marker position={userPosition} icon={userIcon}>
                            <Popup>
                                <strong>Your Location</strong>
                                <br />You are here 🚗
                            </Popup>
                        </Marker>

                        {parkingSpots.map((spot, i) => (
                            <Marker key={i} position={spot.position} icon={parkingIcon}>
                                <Popup>{spot.name}</Popup>
                                <Circle
                                    center={spot.position}
                                    radius={60}
                                    pathOptions={{ color: "#007bff", fillOpacity: 0.2 }}
                                />
                            </Marker>
                        ))}
                    </MapContainer>
                ) : (
                    <p>Loading map...</p>
                )}
            </div>

            <div className="booking-btn-container">
                <button className="book-slot-btn" onClick={handleBook}>
                    Book Your Slot
                </button>
            </div>

            <div className="note">
                <p>🚗 Select a nearby parking area and book your slot to ensure availability.</p>
            </div>
        </div>
    );
};

export default Booking;
