import React from "react";
import "./HourlyInfo.css"

const HourlyInfo = ({time,weather,temp}) => {
  return (
    <div className="hourly-info">
      <div>
        {temp && (
          <p className="forecast-temp">{temp}C</p>
        )}
        <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="icon" />
        <p className="weather">{weather}</p>
        <p className="forecast-time">{time.toFixed(2)}</p>
        {time>12 ? (
          <p className="meridian">PM</p>
        ):(
          <p className="meridian">AM</p>
        )}
      </div>
    </div>
  );
};

export default HourlyInfo;
