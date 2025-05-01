import React from 'react';
import './AppointmentSection.css';
import dentistImg from '../assets/dentist.jpg';
import gynoImg from '../assets/gyno.jpg';
import dietitianImg from '../assets/dietitian.jpg';
import physioImg from '../assets/physio.jpg';
import article1Img from '../assets/article1.jpg';
import article2Img from '../assets/article2.jpg';

const AppointmentSection = () => {
  return (
    <div className="appointment-container">
      <h2 className="title">Book an appointment for an in-clinic consultation</h2>
      <p className="subtitle">Find experienced doctors across all specialties</p>

      
      <div className="specialties-scroll">
        <div className="specialty-card">
          <img src={dentistImg} alt="Dentist" />
          <h3>Dentist</h3>
          <p>Teething troubles? Schedule a dental checkup</p>
        </div>
        <div className="specialty-card">
          <img src={gynoImg} alt="Gynecologist" />
          <h3>Gynecologist/Obstetrician</h3>
          <p>Explore for women’s health, pregnancy and infertility treatments</p>
        </div>
        <div className="specialty-card">
          <img src={dietitianImg} alt="Dietitian" />
          <h3>Dietitian/Nutrition</h3>
          <p>Get guidance on eating right, weight management and sports nutrition</p>
        </div>
        <div className="specialty-card">
          <img src={physioImg} alt="Physiotherapist" />
          <h3>Physiotherapist</h3>
          <p>Pulled a muscle? Get it treated by a trained physiotherapist</p>
        </div>
      </div>

     
      <div className="articles-section">
        <h2 className="title">Read top articles from health experts</h2>
        <p className="subtitle">Health articles that keep you informed about good health practices and achieve your goals.</p>
        <button className="see-all-btn">See all articles</button>

        <div className="articles">
          <div className="article-card">
            <img src={article1Img} alt="Coronavirus Myths" />
            <h5 className="category">CORONAVIRUS</h5>
            <h4 className="article-title">12 Coronavirus Myths and Facts That You Should Be Aware Of</h4>
          </div>
          <div className="article-card">
            <img src={article2Img} alt="Build Immunity" />
            <h5 className="category">VITAMINS AND SUPPLEMENTS</h5>
            <h4 className="article-title">Eating Right to Build Immunity Against Cold and Viral Infections</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
