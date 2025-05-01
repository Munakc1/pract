import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Practo</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>For patients</h4>
          <ul>
            <li>Search for doctors</li>
            <li>Search for clinics</li>
            <li>Search for hospitals</li>
            <li>Practo Plus</li>
            <li>Covid Hospital listing</li>
            <li>Practo Care Clinics</li>
            <li>Read health articles</li>
            <li>Read about medicines</li>
            <li>Practo drive</li>
            <li>Health app</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>For doctors</h4>
          <ul>
            <li>Practo Profile</li>
          </ul>
          <h4>For clinics</h4>
          <ul>
            <li>Ray by Practo</li>
            <li>Practo Reach</li>
            <li>Ray Tab</li>
            <li>Practo Pro</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>For hospitals</h4>
          <ul>
            <li>Insta by Practo</li>
            <li>Qikwell by Practo</li>
            <li>Practo Profile</li>
            <li>Practo Reach</li>
            <li>Practo Drive</li>
          </ul>
          <h4>For Corporates</h4>
          <ul>
            <li>Wellness Plans</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>Help</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>PCS T&C</li>
            <li>Healthcare Directory</li>
            <li>Practo Health Wiki</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Github</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="Practo Logo" className="footer-logo" />
        <p>Copyright © 2017, Practo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
