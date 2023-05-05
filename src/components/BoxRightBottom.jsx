import React, { useEffect, useState } from "react";
import "./BoxRightBottom.css";
import HourlyInfo from "./HourlyInfo";

const BoxRightBottom = ({ weather, description, humidity, windSpeed, day1,day2, day3, day4, day5}) => {


  return (
    <div className="box-info-bottom p-3">
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
        <div className="container">
          <HourlyInfo time={3.0} />
          <HourlyInfo time={6.0} />
          <HourlyInfo time={9.0} />
          <HourlyInfo time={12.0} />
          <HourlyInfo time={15.0} />
          <HourlyInfo time={18.0} />
          <HourlyInfo time={21.0} />
        </div>

        <div className="container">
          <HourlyInfo time={3.0} />
          <HourlyInfo time={6.0} />
          <HourlyInfo time={9.0} />
          <HourlyInfo time={12.0} />
          <HourlyInfo time={15.0} />
          <HourlyInfo time={18.0} />
          <HourlyInfo time={21.0} />
        </div>

        <div className="container">
          <HourlyInfo time={3.0} />
          <HourlyInfo time={6.0} />
          <HourlyInfo time={9.0} />
          <HourlyInfo time={12.0} />
          <HourlyInfo time={15.0} />
          <HourlyInfo time={18.0} />
          <HourlyInfo time={21.0} />
        </div>

        <div className="container">
          <HourlyInfo time={3.0} />
          <HourlyInfo time={6.0} />
          <HourlyInfo time={9.0} />
          <HourlyInfo time={12.0} />
          <HourlyInfo time={15.0} />
          <HourlyInfo time={18.0} />
          <HourlyInfo time={21.0} />
        </div>

        <div className="container">
          <HourlyInfo time={3.0} />
          <HourlyInfo time={6.0} />
          <HourlyInfo time={9.0} />
          <HourlyInfo time={12.0} />
       
        </div>
      </div>
    </div>
  );
};

export default BoxRightBottom;