import React from 'react';
import './FindDoctor.css'; // Make sure you link the CSS file

const FindDoctor = () => {
  return (
    <div className="find-doctor">
      <section className="hero">
        <h1>Your home for health</h1>
        <h2>Find and Book</h2>
        <p className="location">Bangalore</p>
        <input type="text" placeholder="Search doctors, clinics, hospitals, etc." />
        <div className="popular-searches">
          <span>Popular searches:</span>
          <button>Dermatologist</button>
          <button>Pediatrician</button>
          <button>Gynecologist/Obstetrician</button>
          <button>Others</button>
        </div>
      </section>

      <section className="services">
        <div className="service-card">Consult with a doctor</div>
        <div className="service-card">Order Medicines</div>
        <div className="service-card">View medical records <span className="badge">New</span></div>
        <div className="service-card">Book test</div>
        <div className="service-card">Read articles</div>
      </section>

      <section className="trust">
        <h3>Safety of your data is our top priority.</h3>
        <ul>
          <li>Multi-level security checks</li>
          <li>Multiple data backups</li>
          <li>Stringent data privacy policies</li>
        </ul>
        <div className="badges">
          <span>256-bit encryption</span>
          <span>ISO 27001 certified</span>
          <span>HIPAA compliant data centers</span>
          <span>DSCI member</span>
        </div>
      </section>

      <section className="quick-access">
        <h3>Instant appointment with doctors. Guaranteed.</h3>
        <p>100,000 Verified doctors · 3M+ Patient recommendations · 25M Patients/year</p>
        <button>Find me the right doctor</button>
      </section>

      <section className="consult-online">
        <h3>Skip the waiting room. Consult online</h3>
        <p>Fees starting at ₹99 · Verified doctors respond in 5 mins · 100% confidential</p>
        <button>Consult now</button>
        <p>86279 doctors online</p>
      </section>

      <section className="articles">
        <h3>Read top articles from health experts</h3>
        <button>More articles</button>
      </section>

      <section className="medicines">
        <h3>Get all your medicines. Every time. On time.</h3>
        <ul>
          <li>Guaranteed availability</li>
          <li>130,000+ genuine medicines</li>
          <li>Home delivery in 24hrs</li>
        </ul>
        <button>Order Medicines</button>
        <p>Last order delivered 5 hours 54 mins ago in Jogeshwari East, Mumbai</p>
      </section>

      <section className="records">
        <h3>All your medical records in one secure app.</h3>
        <ul>
          <li>256-bit end to end encryption</li>
          <li>Records are accessible only by you</li>
          <li>Access your records across 8000+ centers</li>
        </ul>
        <button>Find out more</button>
      </section>

      <section className="providers">
        <h3>Leading Healthcare Providers</h3>
        <ul>
          <li>Get seen by 25M+ patients on Practo.com</li>
          <li>Advanced software for clinics and hospitals</li>
          <li>Business analytics for enterprises</li>
        </ul>
        <button>Learn more</button>
      </section>

      <footer className="app-footer">
        <h3>Download the Practo app</h3>
        <ul>
          <li>Book appointments and lab tests</li>
          <li>Order medicines</li>
          <li>Consult doctors online</li>
          <li>Set medicine reminders</li>
          <li>Store health records</li>
          <li>Read health tips</li>
        </ul>
        <div className="app-buttons">
          <button>Get it on Google Play</button>
          <button>Get it on App Store</button>
        </div>
        <div className="countries">
          <p>India · Singapore · Philippines · Indonesia · Brazil</p>
        </div>
      </footer>
    </div>
  );
};

export default FindDoctor;
