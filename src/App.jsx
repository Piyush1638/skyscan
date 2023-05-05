// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BoxLeftTop from "./components/BoxLeftTop";
import BoxRightBottom from "./components/BoxRightBottom";
import Header from "./components/Header";

const App = ()=> {


  const [locationWeather, setLocationWeather] = useState({});
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [day1, setDay1]= useState({});
  const [day2, setDay2]= useState({});
  const [day3, setDay3]= useState({});
  const [day4, setDay4]= useState({});
  const [day5, setDay5]= useState({});


  useEffect(()=>{
    getLocation()
  },[navigator.geolocation])


  const getLocation = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }else{
      alert("Your browser doesn't support geolocation")
    }
  }


  // ShowPosition
  // const showPosition =(position)=>{
 
  // }


  // Handle Error 
  const showError = (error)=>{
    switch(error.code){
      case error.PERMISSION_DENIED:
        alert("Your have denied the request for geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable");
        break;
      case error.TIMEOUT:
        alert("The request to get your location is timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error has occured");
        break;
    }
  }
  return (
    <div className="app">
     <Header/>
      <div className="box">
        <div className="box-left">
          <BoxLeftTop
            location={locationWeather.location}
            country={locationWeather.country}
            temperature={locationWeather.temperature}
            weather={locationWeather.weather}
          />
        </div>
        <div className="box-right">
          <BoxRightBottom
            day1={day1}
            day2={day2}
            day3={day3}
            day4={day4}
            day5={day5}
            weather={locationWeather.weather}
            description={locationWeather.description}
            humidity={locationWeather.humidity}
            windSpeed={locationWeather.windSpeed}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
