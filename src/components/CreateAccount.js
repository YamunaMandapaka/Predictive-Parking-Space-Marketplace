import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import logImage from "./log.jpg"; // ✅ Import your image here

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        bloodGroup: "",
        role: "user",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            toast.success("Account created successfully!");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="create-account-container">
            {/* Left side image */}
            <div className="create-account-image">
                <img src={logImage} alt="Create Account" />
            </div>

            {/* Right side form */}
            <div className="create-account-form">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Blood Group</label>
                    <input
                        type="text"
                        name="bloodGroup"
                        placeholder="Enter your blood group"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                    />

                    <label>Role</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="user">User</option>
                        <option value="owner">Owner</option>
                    </select>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
