import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Your Journey Abroad Starts Here!</h1>
        <p>
          Join thousands of students who’ve found their dream universities with
          us.
        </p>
      </div>
      <div className="login-right">
        <h2>Create an account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className={`form-group ${errors.fullName ? "error" : ""}`}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="error-text">{errors.fullName}</span>
            )}
          </div>
          <div className={`form-group ${errors.email ? "error" : ""}`}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className={`form-group ${errors.password ? "error" : ""}`}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <div
            className={`form-group ${errors.confirmPassword ? "error" : ""}`}
          >
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </div>
          <button
            onClick={() => navigate("/info")}
            type="submit"
            className="register-btn"
          >
            Register Now
          </button>
        </form>
        <p className="login-footer">
          Already have an account? <Link to="/sign-in">Login Now</Link>
        </p>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-login">
          <button className="social-btn google">G</button>
          <button className="social-btn apple"></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
