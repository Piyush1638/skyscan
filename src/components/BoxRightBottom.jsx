import React, { useEffect, useRef, useState } from "react";
import "./BoxRightBottom.css";
import HourlyInfo from "./HourlyInfo";
import { BsSearch } from "react-icons/bs";

const BoxRightBottom = ({
  weather,
  description,
  humidity,
  windSpeed,
  futureWeather,
  getSearchLocationData
}) => {
const location=useRef(null)
  const submit = (e) => {
    e.preventDefault();
    getSearchLocationData(location.current.value)
    location.current.value=""
  };




  return (
    <div className="box-info-bottom p-3">
      <div className="search">
        <form onSubmit={submit}>
          <input type="text" className="input" ref={location} placeholder="Search Location" />
          <button  className="submit">
            <BsSearch/>
          </button>
        </form>
      </div>

      <div className="todayWeather">
        <h3 className="weather-heading text-light">Weather Details</h3>
        <p className="p-tag text-light d-flex justify-content-between align-items-center">
          Weather <span className="main">{weather}</span>
        </p>
        <p className="p-tag text-light d-flex justify-content-between align-items-center">
          Description <span className="desc " />
          {description}
        </p>
        <p className="p-tag text-light d-flex justify-content-between align-items-center">
          humidity <span className="humidity">{humidity}%</span>
        </p>
        <p className="p-tag text-light d-flex justify-content-between align-items-center">
          wind Speed <span className="windSpeed">{windSpeed}m/s</span>
        </p>
      </div>

      <div className="next-5-days-forecast pt-3">
        <h3>5 Day Forcast</h3>
        <DaywiseBlock Data={futureWeather.slice(0, 8)} key={1} />
        <DaywiseBlock Data={futureWeather.slice(8, 16)} key={2} />
        <DaywiseBlock Data={futureWeather.slice(16, 24)} key={3} />
        <DaywiseBlock Data={futureWeather.slice(24, 32)} key={4} />
        <DaywiseBlock Data={futureWeather.slice(32, 40)} key={5} />
      </div>
    </div>
  );
};

export default BoxRightBottom;

const DaywiseBlock = ({ Data }) => {
  return (
    <div className="container">
      {Data.map((item) => (
        <HourlyInfo
          className="hourly-info"
          key={item.index}
          date={item.date}
          time={item.time}
          temp={item.temp}
          weather={item.weather}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
