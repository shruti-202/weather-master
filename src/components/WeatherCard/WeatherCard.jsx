import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({weatherDetails}) => {
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}<sup>o</sup>C
        </div>
        <div className="weather-info">
          <span className="weather-temp-f">
            {weatherDetails.current.temp_f}<sup>o</sup>F
          </span>
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
