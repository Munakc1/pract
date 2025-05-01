import React, { useState } from 'react';
import './DownloadApp.css';
import doctorImage from '../assets/doctor.jpg'; 
import googlePlay from '../assets/google-play.png'; 
import appStore from '../assets/app-store.png'; 

const DownloadApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Only digits
    setPhoneNumber(input);
  };

  const handleSendSMS = () => {
    if (phoneNumber.length === 10) {
      alert(`SMS sent to +91-${phoneNumber}`);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  return (
    <section className="download-app-section">
      <div className="download-app-container">
        <div className="download-app-left">
          <img src={doctorImage} alt="Doctor Video Call" className="doctor-image" />
        </div>

        <div className="download-app-right">
          <h2>Get the Practo App</h2>
          <p className="description">
            Book appointments, consult doctors online, order medicines and manage your health records—anytime, anywhere.
          </p>

          <div className="phone-input-container">
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input 
                type="text" 
                placeholder="Enter 10-digit phone number" 
                maxLength="10"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </div>
            <button className="send-sms-btn" onClick={handleSendSMS}>
              Send App Link
            </button>
          </div>

          <div className="or-divider">or</div>

          <div className="app-store-buttons">
            <a 
              href="https://play.google.com/store/apps/details?id=com.practo.fabric&hl=en&gl=US" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-link"
            >
              <img src={googlePlay} alt="Get it on Google Play" className="store-icon" />
            </a>
            <a 
              href="https://apps.apple.com/in/app/practo/id953772015" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="store-link"
            >
              <img src={appStore} alt="Download on the App Store" className="store-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
