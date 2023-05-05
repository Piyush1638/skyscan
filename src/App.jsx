// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import BoxLeftTop from "./components/BoxLeftTop";
import BoxRightBottom from "./components/BoxRightBottom";
import Header from "./components/Header";

const App = () => {
  const [locationWeather, setLocationWeather] = useState({});
  const [FutureWeather, setFutureWeather] = useState([]);
  const [todaysWeather, setTodaysWeather] = useState({});
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
  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    const getCurrentWeather = async () => {
      const api_call1 = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=35cd382137961ee6440305f74a109a83&units=metric"
      );
      return api_call1.json();
    };
    const getFutureWeather=async()=>{
      const api_call2= await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=35cd382137961ee6440305f74a109a83&units=metric"
      )
      return api_call2.json();
    }
    const getWeather = async () => {
      const CurrentWeather = await getCurrentWeather();
      const currWeather = {
        temperature: CurrentWeather.main.temp,
        weather: CurrentWeather.weather[0].main,
        description: CurrentWeather.weather[0].description,
        icon: CurrentWeather.weather[0].icon,
        humidity: CurrentWeather.main.humidity,
        windSpeed: CurrentWeather.wind.speed,
        location: CurrentWeather.name,
        country: CurrentWeather.sys.country,
      };
      setTodaysWeather(currWeather);
      const futureWeather = await getFutureWeather();

      const filtered_data = futureWeather.list
        .slice(4, 40)
        .map((item, index) => {
          return {
            index: index,
            time: item.dt_txt.split(" ")[1].slice(0, 5),
            temp: item.main.temp,
            icon: item.weather[0].icon,
            weather: item.weather[0].main,
          };
        });
      setFutureWeather(filtered_data);
    };
    getWeather();
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
      <Header />
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
            weather={todaysWeather.weather}
            description={todaysWeather.description}
            humidity={todaysWeather.humidity}
            windSpeed={todaysWeather.windSpeed}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
