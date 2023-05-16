import { useEffect, useState } from "react";
import "./App.css";

import { getCurrentForecast } from "./fetcher/getCurrentForecast";
import { getFutureForecast } from "./fetcher/getFutureForecast";
import { searchedLocationFutureWeather } from "./fetcher/searchedLocationFutureWeather";
import { searchedLocationCurrentWeather } from "./fetcher/searchedLocationCurrentWeather";

const Clear = '/images/clear.gif'
const  Clouds = "/images/Clouds.gif";
const  Drizzle = "/images/Drizzle.gif";
const  Mist = "/images/Mist.gif";
const  Snow = "/images/snow.gif";
const  Thunderstorm = "/images/Thunderstorm2.gif";
const  Tornado = "/images/Tornado.gif";
const  Background = "/images/SAVE_20230501_201918.jpg";
const  Rain = "/images/Rainy.gif";

import BoxLeftTop from "./components/BoxLeftTop";
import BoxRightBottom from "./components/BoxRightBottom";

import Header from "./components/Header";
import Loading from "./components/Loading";


const App = () => {
  const [FutureWeather, setFutureWeather] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState({});
  const [detecting, setDetecting] = useState(true);

  let recommendation = "";
  const getBackgroundImage = () => {
    if (todaysWeather.weather) {
      const weatherType = todaysWeather.weather;
      switch (weatherType){
        case "Clear":
          recommendation = "You can enjoy sitting under the sky and having a bowl of grilled chicken salad or a smootie .";
          return Clear;
        case "Clouds":
          recommendation= "You can enjoy a different soups , creamy pasta or some kind of pie that you love to eat.";
          return Clouds;
        case "Rain":
          recommendation= "Be in a cozy ambience and comfort and chizzling food like Pizza , Hot tea with crispy Pakora.";
          return Rain;
        case "Drizzle":
          recommendation = "Don't forget to keep your umbrella.";
          return Drizzle;
        case "Thunderstorm":
          recommendation = "Have a warm and comforting meal like Soup,Grilled Cheese ,Hot Cocoa drink.";
          return Thunderstorm
        case "Snow":
         recommendation ="Have a try on hot drinks like Hot chocolate milk with grilled Chicken/Panner?vegitables with peri peri sprinklers.";
          return Snow;
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
          recommendation = "Try to be indoor and wear mask in outside environment.";
          return Mist;
        case "Tornado":
          recommendation ="Try to stay at your home.";
          return Tornado;
        default:
          return Background;
      }
    }
    return Background;
  };

  if (detecting) {
    <Loading />;
  }

  const getSearchLocationData = async (data) => {
    setDetecting(true);
    const searchedFutureData = await searchedLocationFutureWeather(data);
    const searchedCurrentData = await searchedLocationCurrentWeather(data);
    setTodaysWeather(searchedCurrentData);
    setFutureWeather(searchedFutureData);
    setDetecting(false);
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
    const CurrentWeather = await getCurrentForecast(latitude, longitude);
    setTodaysWeather(CurrentWeather);
    const futureWeather = await getFutureForecast(latitude, longitude);
    setFutureWeather(futureWeather);
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
    <div
      className="app"
      style={{
        backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 62%), rgb(62 51 57 / 30%)), url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      {detecting ? (
        <Loading />
      ) : (
        <div>
          <Header getSearchLocationData={getSearchLocationData} />
          <div className="box">
            <div className="box-left">
              <BoxLeftTop
                temperature={todaysWeather.temperature}
                weather={todaysWeather.weather}
                icon={todaysWeather.icon}
                location={todaysWeather.location}
                country={todaysWeather.country}
                message= {recommendation}
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
        </div>
      )}
    </div>
  );
};

export default App;
