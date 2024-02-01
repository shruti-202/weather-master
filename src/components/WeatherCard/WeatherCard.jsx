import React from "react";
import "./WeatherCard.css";
import Weather from "../../assets/weather.png";

const WeatherCard = () => {
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          30<sup>o</sup>C
        </div>
        <div className="weather-info">
          <span className="weather-temp-f">
            86<sup>o</sup>F
          </span>
          <span>🌈 49</span>
          <span>🌀 4</span>
          <span>➡️SE</span>
          <span>☁️ 50</span>
        </div>
        <div className="weather-place">Nagpur, India</div>
        <div className="weather-avatar">
          <img src={Weather} alt="weather-cloud" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
