import React from "react";
import "./HourlyInfo.css"

const HourlyInfo = ({date,time,weather,temp,icon}) => {
  return (
    <div className="hourly-info">
      <p>{date}</p>
      <div>
        {temp && (
          <p className="forecast-temp">{temp}C</p>
        )}
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        <p className="weather">{weather}</p>
        <p className="forecast-time">{time}</p>
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
