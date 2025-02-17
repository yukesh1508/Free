import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import glassmorphism styles

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      onLogin(); // Call parent function to update authentication status
      navigate("/home"); // Redirect to home page directly
    } else {
      alert(data.message); // Display error message if login fails
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <p>
            New user?{" "}
            <button
              type="button"
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
