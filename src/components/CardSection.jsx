import React, { useState } from "react";
import "./CardSection.css";

import videoConsult from "../assets/video-consultation.png";
import findDoctor from "../assets/find-doctor.png";
import surgeries from "../assets/surgeries.png";
import period from "../assets/period.png";
import acne from "../assets/acne.png";
import performance from "../assets/performance.png";
import cough from "../assets/cough.png";
import child from "../assets/child.png";
import depression from "../assets/depression.png";

const CardSection = () => {
  const [showAll, setShowAll] = useState(false);

  const specialties = [
    {
      img: period,
      title: "Period doubts or Pregnancy",
      link: "javascript:void(0)",
    },
    {
      img: acne,
      title: "Acne, pimple or skin issues",
      link: "javascript:void(0)",
    },
    {
      img: performance,
      title: "Performance issues in bed",
      link: "javascript:void(0)",
    },
    {
      img: cough,
      title: "Cold, cough or fever",
      link: "javascript:void(0)",
    },
    {
      img: child,
      title: "Child not feeling well",
      link: "javascript:void(0)",
    },
    {
      img: depression,
      title: "Depression or anxiety",
      link: "javascript:void(0)",
    },
  ];

  const visibleSpecialties = showAll ? specialties : specialties.slice(0, 2);

  return (
    <div className="card-section">
      <div className="top-cards">
        <div className="card">
          <img src={videoConsult} alt="Instant Video Consultation" />
          <h3>Instant Video Consultation</h3>
          <p>Connect within 60 secs</p>
        </div>
        <div className="card">
          <img src={findDoctor} alt="Find Doctors Near You" />
          <h3>Find Doctors Near You</h3>
          <p>Confirmed appointments</p>
        </div>
        <div className="card">
          <img src={surgeries} alt="Surgeries" />
          <h3>Surgeries</h3>
          <p>Safe and trusted surgery centers</p>
        </div>
      </div>

      <div className="consultation-section">
        <h2>Consult top doctors online for any health concern</h2>
        <p>Private online consultations with verified doctors across all specialties</p>
        {!showAll && (
          <button className="speciality-btn" onClick={() => setShowAll(true)}>
            View All Specialities
          </button>
        )}
      </div>

      <div className="specialities">
        {visibleSpecialties.map((item, index) => (
          <div className="speciality-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <a href={item.link}>CONSULT NOW</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
