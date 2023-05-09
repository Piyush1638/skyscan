import { useEffect, useState } from "react";
import "./App.css";
import BoxLeftTop from "./components/BoxLeftTop";
import BoxRightBottom from "./components/BoxRightBottom";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import Loading from "./components/Loading";
import { getCurrentForecast } from "./fetcher/getCurrentForecast";
import { getFutureForecast } from "./fetcher/getFutureForecast";
import { searchedLocationFutureWeather } from "./fetcher/searchedLocationFutureWeather";
import { searchedLocationCurrentWeather } from "./fetcher/searchedLocationCurrentWeather";

const App = () => {
  const [FutureWeather, setFutureWeather] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState({});
  const [detecting ,setDetecting] = useState(true);

  if(detecting){
    <Loading/>
  }

const getSearchLocationData= async(data)=>{
  setDetecting(true);
  const searchedFutureData=await searchedLocationFutureWeather(data);
  const searchedCurrentData=await searchedLocationCurrentWeather(data);
  setTodaysWeather(searchedCurrentData)
  setFutureWeather(searchedFutureData)
  setDetecting(false)
  };
  
  useEffect(() => {
    getLocation();
  }, [navigator.geolocation]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Your browser doesn't support geolocation");
    }
  };

  // ShowPosition
  const showPosition = async (position) => {
    const { latitude, longitude } = position.coords;
    const CurrentWeather = await getCurrentForecast(latitude,longitude);
    setTodaysWeather(CurrentWeather);
    const futureWeather = await getFutureForecast(latitude,longitude);
    setFutureWeather(futureWeather);
    // console.log(futureWeather)
    setDetecting(false);
  };
  // Handle Error
  const showError = (error) => {
    switch (error.code) {
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
  };
  return (
    <div className="app">
     {detecting ?(<Loading/>):(
      <div>
      <Header getSearchLocationData={getSearchLocationData} />
      <div className="box">
        <div className="box-left">
          <BoxLeftTop
            temperature={todaysWeather.temperature}
            weather={todaysWeather.weather}
            // description={todaysWeather.description}
            icon={todaysWeather.icon}
            // humidity={todaysWeather.humidity}
            // windSpeed={todaysWeather.windSpeed}
            location={todaysWeather.location}
            country={todaysWeather.country}
          />

        </div>
        <div className="box-right">
          <BoxRightBottom
            futureWeather={FutureWeather}
            getSearchLocationData={getSearchLocationData} 
            weather={todaysWeather.weather}
            description={todaysWeather.description}
            humidity={todaysWeather.humidity}
            windSpeed={todaysWeather.windSpeed}
          />
        </div>
      </div>

      <PopUp/>
    </div>
     )}
    </div>
  );
};

export default App;
