import React, { useState, useEffect } from "react";
import "./BoxLeftTop.css";

const BoxLeftTop = ({location,country, temperature, weather}) => {
  
  return (
    <div className="box-info d-flex flex-column">
        <p className="country">{country}</p>
        <h3 className="location">{location}</h3> 
        <h1 className="temperature">{temperature}°</h1>
        <p className="weather">{weather}</p>  
    </div>
  );
};

export default BoxLeftTop;
