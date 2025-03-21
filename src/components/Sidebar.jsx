import React, { useState } from 'react';

const Sidebar = ({ query, setQuery, handleSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="sidebar">
      <div className="app-title">
        <div className="title-icon">🏙️</div>
        <div className="title-content">
          <h1>The 15-Minute City</h1>
          <p>Learn more about your surroundings!</p>
        </div>
      </div>
      
      <div className="search-container">
        <div className="search-input">
          <div className={`input-wrapper ${isFocused ? 'focused' : ''}`}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter location or query..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <div className="input-highlight"></div>
          </div>
          <button 
            onClick={handleSearch}
            className="primary-button"
          >
            <span className="button-icon">🔍</span>
            <span className="button-text">Analyze Area</span>
          </button>
        </div>
      </div>
      
      <div className="instructions">
        <h3>Follow these steps:</h3>
        <ol>
          <li><span className="step-number">🚶🏻</span> Enter a location to analyze</li>
          <li><span className="step-number">🚲</span> Click "Analyze Area"</li>
          <li><span className="step-number">🏙️</span> Explore the 15-minute city metrics</li>
        </ol>
      </div>
    </div>
  );
}


export default Sidebar;