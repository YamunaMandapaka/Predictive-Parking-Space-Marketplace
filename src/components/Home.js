
/*import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "./first.jpg";
import img2 from "./second.jpg";
import img3 from "./third.jpg";

// Service images
import service1 from "./navigation.jpg";
import service2 from "./realtime.jpg";
import service3 from "./booking.jpg";


export default function Home() {
    return (
        <div>
           
            <div className="home-container">
                <div className="content-box">
                    <div className="images-section">
                        <div className="vertical-images">
                            <img src={img1} alt="Top" className="image-item" />
                            <img src={img2} alt="Bottom" className="image-item" />
                        </div>

                        <div className="middle-image">
                            <img src={img3} alt="Middle" className="image-item" />
                        </div>
                    </div>

                    <div className="text-section">
                        <h1>
                            Enhance the parking experience <br />
                            for users and enable seamless updates
                        </h1>
                        <p>
                            Our platform simplifies parking management by allowing users and owners
                            to stay connected, access real-time updates, and streamline operations
                            with ease and efficiency.
                        </p>

                        <Link to="/booking">
                            <button className="bookings-btn">Bookings</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="services-section">
                <div className="hell"><p className="para">Our Services</p>
                <p>Premium parking solutions for all. Our system delivers unparalleled expertise and seamless service</p></div>
                <div className="services-cards">
                    <div className="service-card">
                        <img src={service1} alt="Real-time Availability" />
                        <h4>Real-time Availability</h4>
                        <p>Check available parking slots instantly in your area.</p>
                    </div>
                    <div className="service-card">
                        <img src={service2} alt="Advance Booking" />
                        <h4>Advance Parking Booking</h4>
                        <p>Reserve your parking spot ahead of time without hassle.</p>
                    </div>
                    <div className="service-card">
                        <img src={service3} alt="Navigation Assistance" />
                        <h4>Navigation Smart Assistance</h4>
                        <p>Get guided directions to your reserved parking spot.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
*/

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "./first.jpg";
import img2 from "./second.jpg";
import img3 from "./third.jpg";

// Service images
import service1 from "./navigation.jpg";
import service2 from "./realtime.jpg";
import service3 from "./booking.jpg";

// Mission image
import missionImg from "./mission.jpg"; // add your mission image in components folder

export default function Home() {
    return (
        <div>
            {/* About Section */}
            <div className="home-container">
                <div className="content-box">
                    <div className="images-section">
                        <div className="vertical-images">
                            <img src={img1} alt="Top" className="image-item" />
                            <img src={img2} alt="Bottom" className="image-item" />
                        </div>

                        <div className="middle-image">
                            <img src={img3} alt="Middle" className="image-item" />
                        </div>
                    </div>

                    <div className="text-section">
                        <h1>
                            Enhance the parking experience <br />
                            for users and enable seamless updates
                        </h1>
                        <p>
                            Our platform simplifies parking management by allowing users and owners
                            to stay connected, access real-time updates, and streamline operations
                            with ease and efficiency.
                        </p>

                        <Link to="/booking">
                            <button className="bookings-btn">Bookings</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-section">
                <div className="hell">
                    <p className="para"><h1>Our Services</h1></p>
                    <p>
                        Premium parking solutions for all. Our system delivers unparalleled expertise and seamless service.
                    </p>
                </div>
                <div className="services-cards">
                    <div className="service-card">
                        <img src={service1} alt="Real-time Availability" />
                        <h4>Real-time Availability</h4>
                        <p>Check available parking slots instantly in your area.</p>
                    </div>
                    <div className="service-card">
                        <img src={service2} alt="Advance Booking" />
                        <h4>Advance Parking Booking</h4>
                        <p>Reserve your parking spot ahead of time without hassle.</p>
                    </div>
                    <div className="service-card">
                        <img src={service3} alt="Navigation Assistance" />
                        <h4>Navigation Smart Assistance</h4>
                        <p>Get guided directions to your reserved parking spot.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="mission-content">
                    <div className="mission-text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to transform urban parking into a seamless and efficient experience.
                            We aim to save drivers time, reduce congestion, and make parking stress-free.
                            Using real-time updates and smart navigation, we empower both users and parking owners.
                            Our platform ensures easy reservations, transparency, and reliable service.
                            We focus on creating a greener, more organized city with better traffic flow.
                            At ParkingEase, we are committed to innovation, convenience, and customer satisfaction.
                        </p>
                    </div>

                    <div className="mission-image">
                        <img src={missionImg} alt="Our Mission" />
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="features-section">
                <div className="features-box">
                    <h2 className="features-heading">Our Key Features</h2>
                    <p className="features-subtitle">
                        Simplifying parking through innovation, automation, and user-first design.
                    </p>

                    <div className="features-columns">
                        {/* Feature 1 */}
                        <div className="feature">
                            <i className="fas fa-map-marked-alt"></i>
                            <div>
                                <h4>Smart Location Detection</h4>
                                <p>Automatically identifies your current location and displays nearby parking areas instantly.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature">
                            <i className="fas fa-calendar-check"></i>
                            <div>
                                <h4>Advance Booking</h4>
                                <p>Book your parking slot beforehand and get instant confirmation on your device.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature">
                            <i className="fas fa-wallet"></i>
                            <div>
                                <h4>Secure Digital Payments</h4>
                                <p>Pay securely through cards, UPI, or wallets with quick, verified transactions.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature">
                            <i className="fas fa-bell"></i>
                            <div>
                                <h4>Live Slot Notifications</h4>
                                <p>Stay updated in real-time about parking slot availability and status changes.</p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature">
                            <i className="fas fa-chart-line"></i>
                            <div>
                                <h4>Owner Insights</h4>
                                <p>Gain valuable insights on usage, earnings, and trends through the admin panel.</p>
                            </div>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature">
                            <i className="fas fa-robot"></i>
                            <div>
                                <h4>AI Chat Assistance</h4>
                                <p>Get instant help with your bookings and queries through our intelligent chatbot.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Owners Section */}
            <section className="owners-section">
                <h2 className="owners-heading">Our Parking Owners</h2>
                <p className="owners-subtitle">Meet the trusted parking providers in our network.</p>

                <div className="owners-container">
                    {/* Owner 1 */}
                    <div className="owner-card">
                        <img src={require("./owner1.jpg")} alt="Owner 1" className="owner-img" />
                        <div className="owner-info">
                            <h4>Ravi Kumar</h4>
                            <p className="owner-services">
                                Premium parking services with real-time slot updates and secure payments.
                            </p>
                            <div className="owner-details">
                                <span className="owner-rating">⭐ 4.8</span>
                                <span className="owner-users">500+ Users</span>
                                <span className="owner-location">Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Owner 2 */}
                    <div className="owner-card">
                        <img src={require("./owner2.jpg")} alt="Owner 2" className="owner-img" />
                        <div className="owner-info">
                            <h4>Sneha Sharma</h4>
                            <p className="owner-services">
                                Hassle-free parking experience with advance slot booking and AI guidance.
                            </p>
                            <div className="owner-details">
                                <span className="owner-rating">⭐ 4.6</span>
                                <span className="owner-users">350+ Users</span>
                                <span className="owner-location">Bengaluru, India</span>
                            </div>
                        </div>
                    </div>
                    {/* Owner 3 */}
                    <div className="owner-card">
                        <img src={require("./parking3.jpeg")} alt="Owner 2" className="owner-img" />
                        <div className="owner-info">
                            <h4>Arjun Mehta</h4>
                            <p className="owner-services">
                                Multi-level parking with real-time availability and digital payments.
                            </p>
                            <div className="owner-details">
                                <span className="owner-rating">⭐ 4.8</span>
                                <span className="owner-users">1,200+ Users</span>
                                <span className="owner-location">Bandra West, Mumbai, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="faq-section">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <p className="faq-subtitle">Answers to common queries from our users.</p>

                <div className="faq-container">
                    <FAQItem
                        question="How do I book a parking slot?"
                        answer="You can book a parking slot by clicking on the 'Bookings' button, selecting your desired location and time, and confirming your reservation."
                    />
                    <FAQItem
                        question="Can I cancel or reschedule my booking?"
                        answer="Yes, you can cancel or reschedule your booking from your account dashboard before the reserved time. Refunds are processed according to our cancellation policy."
                    />
                    <FAQItem
                        question="Are payments secure?"
                        answer="Absolutely. We use secure digital payment methods including cards, UPI, and wallets. All transactions are encrypted for your safety."
                    />
                    <FAQItem
                        question="How do I find nearby parking locations?"
                        answer="Our smart location detection feature shows all nearby parking areas in real-time. You can filter by availability and services."
                    />
                    <FAQItem
                        question="Can owners update slot availability?"
                        answer="Yes, owners can manage their parking slots in real-time through the admin panel, ensuring users always see accurate availability."
                    />
                </div>
            </section>
            {/* User Feedback Section */}
            <section className="user-feedback-section">
                <h2 className="feedback-heading">What Our Users Say</h2>
                <p className="feedback-subtitle">See why thousands trust ParkingEase every day.</p>

                <div className="feedback-container">
                    {/* User 1 */}
                    <div className="feedback-card">
                        <div className="feedback-header">
                            <img src={require("./user1.jpeg")} alt="User 1" className="feedback-img" />
                            <div className="feedback-user-info">
                                <h4>Rahul Verma</h4>
                                <div className="feedback-rating">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            </div>
                        </div>
                        <p>
                            ParkingEase has made my daily commute so much easier! The app shows available
                            slots in real-time and booking is a breeze.
                        </p>
                    </div>

                    {/* User 2 */}
                    <div className="feedback-card">
                        <div className="feedback-header">
                            <img src={require("./user2.jpeg")} alt="User 2" className="feedback-img" />
                            <div className="feedback-user-info">
                                <h4>Priya Sharma</h4>
                                <div className="feedback-rating">⭐ ⭐ ⭐ ⭐</div>
                            </div>
                        </div>
                        <p>
                            I love how I can pay digitally and get notifications when slots are free.
                            It saves me so much time and stress.
                        </p>
                    </div>

                    {/* User 3 */}
                    <div className="feedback-card">
                        <div className="feedback-header">
                            <img src={require("./user3.jpeg")} alt="User 3" className="feedback-img" />
                            <div className="feedback-user-info">
                                <h4>Vikram Singh</h4>
                                <div className="feedback-rating">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            </div>
                        </div>
                        <p>
                            The app is extremely reliable, and the owners are responsive. Highly recommend
                            for city parking!
                        </p>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <footer className="footer-section">
                <div className="footer-content">
                    {/* Email */}
                    <div className="footer-email">
                        <p>Contact us: <a href="mailto:support@parkingease.com">support@parkingease.com</a></p>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <a href="#" target="_blank" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} ParkingEase. All rights reserved.
                </div>
            </footer>


        </div>
    );
    {/* FAQ Item Component */ }
    function FAQItem({ question, answer }) {
        const [open, setOpen] = React.useState(false);

        return (
            <div className={`faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <div className="faq-question">
                    {question} <span className="faq-toggle">{open ? "-" : "+"}</span>
                </div>
                {open && <div className="faq-answer">{answer}</div>}
            </div>
        );
    }

}
