import React from "react";
import "./Loading.css";
const detecting = "/images/WeatherIcons.gif";

const Loading = () => {
  return (
    <div className="Loading d-flex justify-content-center align-items-center flex-column">
      <img src={detecting} alt="loading" />
      <div className="permission-info d-flex justify-content-center align-items-center flex-column">
        <h3>Detecting your location...</h3>
        <p>Your current location will be displayed on the app & will use for calculating Real Time Weather</p>
      </div>
    </div>
  );
};

export default Loading;
