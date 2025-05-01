import React, { useState } from 'react';
import './TestimonialSlider.css';
import profileIcon from '../assets/profile-icon.png'; 

const testimonials = [
  {
    text: "Very easy to book, maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.",
    name: "Jyothi Bhatia",
  },
  {
    text: "Great app! Very helpful for consulting doctors without waiting hours. Loved the experience.",
    name: "Rahul Sharma",
  },
  {
    text: "Easy appointment booking and follow-ups. I feel safe consulting doctors from home itself.",
    name: "Pooja Verma",
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonial-slider">
      <h2 className="section-title">What our users have to say</h2>

      <div className="testimonial-content">
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>

        <div className="user-info">
          <img src={profileIcon} alt="User Icon" className="user-icon" />
          <span className="user-name">{testimonials[currentIndex].name}</span>
        </div>

        <div className="controls">
          <button onClick={handlePrev} className="control-btn">❮</button>
          <button onClick={handleNext} className="control-btn">❯</button>
        </div>

        <div className="dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
