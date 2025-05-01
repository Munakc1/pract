import React from 'react';
import './VideoConsult.css';

const VideoConsult = () => {
  return (
    <div className="video-consult">
      <section className="hero-video">
        <h1>Skip the Clinic. Talk to a Doctor Online</h1>
        <p>Consult top doctors via video from the comfort of your home.</p>
        <button>Start Video Consultation</button>
        <p className="doctors-online">87,000+ doctors are available now</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Instant Access</h3>
          <p>Connect with doctors in under 5 minutes — no waiting rooms.</p>
        </div>
        <div className="feature-card">
          <h3>Affordable Care</h3>
          <p>Video consultations starting at just ₹99.</p>
        </div>
        <div className="feature-card">
          <h3>Verified Doctors</h3>
          <p>All consultations are with certified and experienced specialists.</p>
        </div>
        <div className="feature-card">
          <h3>Private & Secure</h3>
          <p>256-bit encrypted video calls. Your health data stays confidential.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Choose a specialization or symptoms.</li>
          <li>Pick a doctor and time slot.</li>
          <li>Pay consultation fee online.</li>
          <li>Start your secure video call.</li>
        </ol>
      </section>

      <section className="specialties">
        <h2>Consult Specialists Across</h2>
        <div className="specialty-list">
          <span>General Physicians</span>
          <span>Dermatologists</span>
          <span>Psychiatrists</span>
          <span>Gynecologists</span>
          <span>ENT Specialists</span>
          <span>Pediatricians</span>
          <span>Dietitians</span>
          <span>Sexologists</span>
        </div>
      </section>

      <section className="download-app">
        <h2>Download the App for the Best Experience</h2>
        <p>Access video consults, prescriptions, records, and more in one app.</p>
        <div className="app-buttons">
          <button>Get it on Google Play</button>
          <button>Get it on App Store</button>
        </div>
      </section>
    </div>
  );
};

export default VideoConsult;
