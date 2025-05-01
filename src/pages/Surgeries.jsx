import React from 'react';
import './Surgeries.css';

const Surgeries = () => {
  return (
    <div className="surgeries">
      <section className="intro">
        <h1>Advanced Surgeries. Expert Care.</h1>
        <p>Get access to high-quality, safe, and affordable surgical care across India. From diagnosis to recovery, we’re with you every step of the way.</p>
        <button>Book a Free Consultation</button>
      </section>

      <section className="why-choose">
        <h2>Why Choose Us for Your Surgery?</h2>
        <div className="grid">
          <div className="card">
            <h3>Certified Surgeons</h3>
            <p>Consult with top-rated, experienced surgeons across specialities.</p>
          </div>
          <div className="card">
            <h3>Modern Facilities</h3>
            <p>Partnered with over 500+ NABH-accredited hospitals with cutting-edge technology.</p>
          </div>
          <div className="card">
            <h3>End-to-End Support</h3>
            <p>Dedicated care coordinators handle everything — paperwork, tests, insurance, follow-ups.</p>
          </div>
          <div className="card">
            <h3>Cashless Insurance</h3>
            <p>We assist with instant approvals from 30+ insurers to ensure a stress-free experience.</p>
          </div>
        </div>
      </section>

      <section className="procedures">
        <h2>Most Common Surgeries We Offer</h2>
        <ul>
          <li>Hernia Repair</li>
          <li>Gallbladder Removal (Laparoscopic Cholecystectomy)</li>
          <li>Appendectomy (Appendix Removal)</li>
          <li>Fissure, Fistula, Piles Treatment</li>
          <li>Varicose Vein Surgery</li>
          <li>Hysterectomy (Uterus Removal)</li>
          <li>Cataract Surgery</li>
          <li>Laser Prostate Surgery</li>
          <li>Kidney Stone Removal</li>
        </ul>
      </section>

      <section className="safety">
        <h2>Safety is Our Priority</h2>
        <div className="safety-points">
          <p>✅ COVID-safe hospitals with strict hygiene protocols</p>
          <p>✅ Daily sanitization of operation theatres</p>
          <p>✅ Digital prescriptions and reports to avoid paper handling</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Patients Say</h2>
        <div className="testimonial-card">
          <p>
            “My mother underwent gallbladder surgery. Everything was managed so well — from tests to discharge. We didn’t have to worry about anything. The team was professional and kind.”  
          </p>
          <p className="author">– Karan S., Bangalore</p>
        </div>
        <div className="testimonial-card">
          <p>
            “I was nervous about getting laser surgery for piles, but the doctor and Practo team made it very smooth. They even handled the insurance process. Highly recommended.”  
          </p>
          <p className="author">– Anjali T., Mumbai</p>
        </div>
      </section>

      <section className="consult-cta">
        <h2>Need Surgery? Talk to an Expert Now</h2>
        <p>100% free consultation with a senior surgeon. No obligations.</p>
        <button>Book Consultation</button>
      </section>
    </div>
  );
};

export default Surgeries;
