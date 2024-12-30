import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = "Please enter your email address.";
    if (!password) newErrors.password = "Please enter your password.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/");
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="login-container">
      <div className="login-right">
        <h2>Login To Daltin</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error-input" : ""}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <div className="form-actions">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot your password?</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-login">
          <button className="social-btn google">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
            />
          </button>
          <button className="social-btn apple">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
            />
          </button>
        </div>
        <p className="login-footer">
          Don’t have an account yet? <Link to="/sign-up">Register</Link>
        </p>
      </div>
      <div className="login-left">
        <h1>Welcome Back, Future Achiever!</h1>
        <p>We’re excited to continue where you left off.</p>
      </div>
    </div>
  );
};

export default SignIn;
