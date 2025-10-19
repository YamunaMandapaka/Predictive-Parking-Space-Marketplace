import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google login successful!");
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-center mb-3">Login</h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />

        <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => {
              onClose();
              navigate("/create-account"); // Navigate to separate Create Account page
            }}
          >
            Create one
          </button>
        </p>

        <button className="btn btn-danger w-100" onClick={handleGoogleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
}
