import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FindDoctors from "./pages/FindDoctors";
import VideoConsult from "./pages/VideoConsult";
import Surgeries from "./pages/Surgeries";
import SearchBar from "./components/SearchBar";
import CardSection from "./components/CardSection";
import AppointmentSection from './components/AppointmentSection';
import DownloadApp from './components/DownloadApp';
import TestimonialSlider from './components/TestimonialSlider';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          {/* ✅ Home Page — will show by default */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <CardSection />
                <AppointmentSection />
                <TestimonialSlider />
                <DownloadApp />
              </>
            }
          />

          {/* ✅ Other pages */}
          <Route path="/doctors" element={<FindDoctors />} />
          <Route path="/video-consult" element={<VideoConsult />} />
          <Route path="/surgeries" element={<Surgeries />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
