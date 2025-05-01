import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [results, setResults] = useState([]);

  
  const handleSearch = () => {
    const mockResults = [
      { name: 'Dr. John Doe', description: 'General Practitioner', location: 'New York' },
      { name: 'Dr. Jane Smith', description: 'Dermatologist', location: 'California' },
      { name: 'Dr. Emily Clark', description: 'Pediatrician', location: 'Florida' },
    ];

    const filteredResults = mockResults.filter(result =>
      result.location.toLowerCase().includes(location.toLowerCase()) &&
      result.description.toLowerCase().includes(service.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <div className="search-bar-container">
        <div className="input-group">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-location"
          />
        </div>
        <div className="divider"></div>
        <div className="input-group">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search for services..."
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input-search"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

     
      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.name}</h3>
              <p>{result.description}</p>
              <p>{result.location}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
