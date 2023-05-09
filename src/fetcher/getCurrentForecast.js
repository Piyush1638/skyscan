export const getCurrentForecast = async (latitude,longitude) => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=35cd382137961ee6440305f74a109a83&units=metric"
      );
      const data= await response.json();
      return {
        temperature: data.main.temp,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        country: data.sys.country,
      };
    };
   
