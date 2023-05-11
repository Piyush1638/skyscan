import React, { useState, useEffect } from "react";
import "./BoxLeftTop.css";
import PopUp from "./PopUp";

const BoxLeftTop = ({ location, country, temperature, weather, icon, message }) => {
  return (
    <div className="box-info d-flex flex-column">
      <div className="country-location d-flex ">
        <p className="country ">{country}</p>
        <h3 className="location">{location}</h3>
      </div>
      <h1 className="temperature">{temperature}°C</h1>
      <div className="weather-icon d-flex align-items-center">
        <p className="weather mb-0">{weather}</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <PopUp
        message={message}
      />
    </div>
  );
};

export default BoxLeftTop;
