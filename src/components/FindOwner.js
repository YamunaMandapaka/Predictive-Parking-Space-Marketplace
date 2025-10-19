import React, { useState } from "react";
import "./FindOwner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Import local images from same folder
import owner1 from "./owner1.jpg";
import owner2 from "./owner2.jpg";

const ownersData = [
    {
        id: 1,
        name: "Ravi Kumar",
        location: "MG Road, Bangalore",
        feedback: "Excellent parking service, secure and easy to book.",
        timings: "Mon - Sat: 8 AM - 9 PM",
        vehicleType: "Car",
        availableDays: ["Monday", "Wednesday", "Friday"],
        status: "Available",
        price: "₹100/hour",
        image: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
        parkingImage: owner1, // ✅ uses your local image
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "T Nagar, Chennai",
        feedback: "Convenient location, staff is helpful and polite.",
        timings: "All Days: 7 AM - 10 PM",
        vehicleType: "Bike",
        availableDays: ["Tuesday", "Thursday", "Saturday"],
        status: "Limited Slots",
        price: "₹40/hour",
        image: "https://cdn-icons-png.flaticon.com/512/4825/4825070.png",
        parkingImage: owner2, // ✅ uses your local image
    },
    {
        id: 3,
        name: "Sneha Sharma",
        location: "Hitech City, Hyderabad",
        feedback: "Clean parking space with proper lighting and security.",
        timings: "Mon - Sun: 6 AM - 11 PM",
        vehicleType: "Car",
        availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
        status: "Available",
        price: "₹80/hour",
        image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
        parkingImage: owner1,
    },
    {
        id: 4,
        name: "Ayesha Khan",
        location: "Banjara Hills, Hyderabad",
        feedback: "Spacious parking and fast online confirmation.",
        timings: "Mon - Sat: 9 AM - 8 PM",
        vehicleType: "Electric Car",
        availableDays: ["Wednesday", "Thursday", "Saturday"],
        status: "Few Slots Left",
        price: "₹120/hour",
        image: "https://cdn-icons-png.flaticon.com/512/2972/2972235.png",
        parkingImage: owner2,
    },
];

export default function FindOwner() {
    const [selectedOwner, setSelectedOwner] = useState(null);

    const handleBookSlot = () => {
        toast.success("✅ Slot booked successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="find-owner-container">
            <h2 className="page-title">Find a Parking Owner</h2>
            <p className="subtitle">Select an owner to view details and book your slot</p>

            <div className="owners-list">
                {ownersData.map((owner) => (
                    <div
                        key={owner.id}
                        className={`owner-card ${selectedOwner?.id === owner.id ? "active" : ""}`}
                        onClick={() => setSelectedOwner(owner)}
                    >
                        <img src={owner.image} alt={owner.name} className="owner-img" />
                        <h4>{owner.name}</h4>
                        <p className="owner-location">{owner.location}</p>
                        <button className="view-btn">View Details</button>
                    </div>
                ))}
            </div>

            {selectedOwner && (
                <div className="owner-details-card">
                    <div className="details-left">
                        <h3>{selectedOwner.name}</h3>
                        <p><strong>Location:</strong> {selectedOwner.location}</p>
                        <p><strong>Feedback:</strong> {selectedOwner.feedback}</p>
                        <p><strong>Office Timings:</strong> {selectedOwner.timings}</p>

                        <div className="booking-info">
                            <h4>Booking Details</h4>
                            <p><strong>Vehicle Type:</strong> {selectedOwner.vehicleType}</p>
                            <p><strong>Available Days:</strong> {selectedOwner.availableDays.join(", ")}</p>
                            <p><strong>Status:</strong> {selectedOwner.status}</p>
                            <p><strong>Price:</strong> {selectedOwner.price}</p>
                        </div>

                        <button className="book-slot-btn" onClick={handleBookSlot}>
                            Book Your Slot
                        </button>
                    </div>

                    <div className="details-right">
                        <img
                            src={selectedOwner.parkingImage}
                            alt="Parking Area"
                            className="parking-image"
                        />
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}
