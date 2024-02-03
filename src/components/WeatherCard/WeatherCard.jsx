import React, { useState } from "react";
import "./WeatherCard.css";

const WeatherCard = ({weatherDetails}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temperature = isCelsius
    ? weatherDetails.current.temp_c + "°C"
    : weatherDetails.current.temp_f + "°F";

  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp clickable" onClick={toggleUnit}>
         {temperature}
        </div>
        <div className="weather-info">
          <span>Humidity: {weatherDetails.current.humidity}💧</span><br/>
          <span>Wind Speed: {weatherDetails.current.wind_kph}km/h</span>
          <span>Wind Direction: {weatherDetails.current.wind_dir}</span><br/>
          <span>Weather Overview: {weatherDetails.current.condition.text}</span>
        </div>
        <div className="weather-place">{weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}</div>
        <div className="weather-avatar">
          <img src={weatherDetails.current.condition.icon} alt="weather-cloud" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
