import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const formRef = useRef(null);

  const toggleForm = () => setShowForm(!showForm);
  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Left Section */}
        <div className="navbar-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Practo Logo" className="logo-img" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/doctors">Find Doctors</Link>
            <Link to="/video-consult">Video Consult</Link>
            <Link to="/surgeries">Surgeries</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="nav-item" onClick={() => handleDropdown("corporates")}>
            <span className="new-badge">NEW</span>
            <span>For Corporates</span>
            <span className="arrow">▼</span>
            {openDropdown === "corporates" && (
              <div className="dropdown-menu">
                <Link to="/corporates/insurance">Insurance Plans</Link>
                <Link to="/corporates/wellness">Employee Wellness</Link>
              </div>
            )}
          </div>

          <div className="nav-item" onClick={() => handleDropdown("providers")}>
            <span>For Providers</span>
            <span className="arrow">▼</span>
            {openDropdown === "providers" && (
              <div className="dropdown-menu">
                <Link to="/providers/hospitals">Hospitals</Link>
                <Link to="/providers/clinics">Clinics</Link>
              </div>
            )}
          </div>

          <div className="nav-item" onClick={() => handleDropdown("help")}>
            <span>Security & help</span>
            <span className="arrow">▼</span>
            {openDropdown === "help" && (
              <div className="dropdown-menu">
                <Link to="/help/security">Security</Link>
                <Link to="/help/contact">Contact Support</Link>
              </div>
            )}
          </div>

          {/* Login/Signup */}
          <button className="login-btn" onClick={toggleForm}>
            Login / Signup
          </button>
        </div>
      </nav>

      {/* Login/Signup Form */}
      {showForm && (
        <div className="form-popup" ref={formRef}>
          <div className="form-toggle">
            <button onClick={switchToLogin} className={isLogin ? "active" : ""}>
              Login
            </button>
            <button onClick={switchToSignup} className={!isLogin ? "active" : ""}>
              Signup
            </button>
          </div>

          {isLogin ? (
            <>
              <h2>Login</h2>
              <form className="form-content">
                <label>Mobile Number / Email ID</label>
                <input type="text" placeholder="Enter mobile or email" required />
                <label>Password</label>
                <input type="password" placeholder="Enter password" required />
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                <button type="submit" className="submit-btn">Login</button>
                <p className="switch-form">
                  Don't have an account?{" "}
                  <span onClick={switchToSignup} style={{ color: "#007bff", cursor: "pointer" }}>
                    Signup here
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2>Join Practo</h2>
              <p className="register-subtitle">Register Here</p>
              <form className="form-content">
                <div className="doctor-check">
                  <label>Are you a doctor?</label>
                  <input type="checkbox" />
                </div>
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
                <label>Mobile Number</label>
                <div className="mobile-input">
                  <span className="country-code">+91</span>
                  <input type="text" placeholder="Enter mobile number" required />
                </div>
                <label>Create Password</label>
                <input type="password" placeholder="Create password" required />
                <p className="terms-text">
                  By signing up, I agree to <Link to="/terms">terms</Link>
                </p>
                <button type="submit" className="submit-btn">Register</button>
                <p className="switch-form">
                  Already have an account?{" "}
                  <span onClick={switchToLogin} style={{ color: "#007bff", cursor: "pointer" }}>
                    Login here
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
