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
  //   const {latitude,longitude} = position.coords;
  //   console.log(position)
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude)
  //   const currentWeather= async ()=>{
  //     const api_call1 = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=35cd382137961ee6440305f74a109a83&units=metric"
  //     );
  //     return api_call1.json();
  //   }
  //   const FutureWeather=async()=>{
  //     const api_call2= await fetch(
  //       "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=35cd382137961ee6440305f74a109a83&units=metric"
  //     )
  //     return api_call2.json();
  //   }
  //   const getWeather = async ()=>{
  //     const getcurrentWeather=currentWeather();
  //     const getFutureWeather=FutureWeather();
  //    const [data1,data2]=Promise.all([getcurrentWeather,getFutureWeather])
  //     setLocationWeather({
  //       country: data1.sys.country,
  //       temperature: data1.main.temp,
  //       weather: data1.weather[0].main,
  //       location: data1.name,
  //       description: data1.weather[0].description,
  //       humidity: data1.main.humidity,
  //       windSpeed: data1.wind.speed
  //     })

  //     setDay1({
  //      Day1_3: data2.list[4].weather[0].main,
  //      Day1_6:data2.list[5].weather[0].main,
  //      Day1_9:data2.list[6].weather[0].main,
  //      Day1_12:data2.list[7].weather[0].main,
  //      Day1_15:data2.list[8].weather[0].main,
  //      Day1_18:data2.list[9].weather[0].main,
  //      Day1_21:data2.list[10].weather[0].main,
  //     })

  //     setDay2({
  //      Day1_3: data2.list[12].weather[0].main,
  //      Day1_6:data2.list[13].weather[0].main,
  //      Day1_9:data2.list[14].weather[0].main,
  //      Day1_12:data2.list[15].weather[0].main,
  //      Day1_15:data2.list[16].weather[0].main,
  //      Day1_18:data2.list[17].weather[0].main,
  //      Day1_21:data2.list[18].weather[0].main,
  //     })

  //     setDay3({
  //      Day1_3: data2.list[20].weather[0].main,
  //      Day1_6:data2.list[21].weather[0].main,
  //      Day1_9:data2.list[22].weather[0].main,
  //      Day1_12:data2.list[23].weather[0].main,
  //      Day1_15:data2.list[24].weather[0].main,
  //      Day1_18:data2.list[25].weather[0].main,
  //      Day1_21:data2.list[26].weather[0].main,
  //     })


  //     setDay4({
  //      Day1_3: data2.list[28].weather[0].main,
  //      Day1_6:data2.list[29].weather[0].main,
  //      Day1_9:data2.list[30].weather[0].main,
  //      Day1_12:data2.list[31].weather[0].main,
  //      Day1_15:data2.list[32].weather[0].main,
  //      Day1_18:data2.list[33].weather[0].main,
  //      Day1_21:data2.list[34].weather[0].main,
  //     })


  //     setDay5({
  //      Day1_3: data2.list[36].weather[0].main,
  //      Day1_6:data2.list[37].weather[0].main,
  //      Day1_9:data2.list[38].weather[0].main,
  //      Day1_12:data2.list[39].weather[0].main,
  //     })

       
  //     console.log("Day 1",day1)
  //     console.log("Day 2",day2)
  //     console.log("Day 3",day3)
  //     console.log("Day 4",day4)
  //     console.log("Day 5",day5)


  //     // console.log(data1);
  //     // console.log(locationWeather)
  //     // console.log("5 day forecast: ",data2);
  //   }
  //   getWeather();
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
