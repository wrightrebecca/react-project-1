import React from "react";
import "./Current.css";

export default function Current() {
  let weatherData = {
    city: "Paris",
    date: "Thursday 15:40",
    description: "light cloud",
    humidity: "20%",
    wind: " 6 km/h",
  };

  return (
    <main>
      <div className="Current">
        <div className="weather-data">
          <div>
            <h1>{weatherData.city}</h1>
            <p className="weather-details">
              <span>{weatherData.date}</span>,{" "}
              <span>{weatherData.description}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}</strong>, Wind:
              <strong>{weatherData.wind}</strong>
            </p>
          </div>
          <div className="temperature">
            <div className="weather-icon">⛅</div>
            <div className="weather-temperature-numerals">16</div>
            <div className="weather-temperature-symbol">°c</div>
          </div>
        </div>
      </div>
      <div class="weather-forecast"></div>
    </main>
  );
}
