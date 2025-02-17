import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Add your styles for the signup form

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      alert("Signup successful! Please log in.");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <form onSubmit={handleSignup} className="signup-form">
          <h2 className="signup-title">Signup</h2>
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
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Creating Account..." : "Signup"}
          </button>
          <p className="login-link">
            Already have an account?{" "}
            <button
              type="button"
              className="login-button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
