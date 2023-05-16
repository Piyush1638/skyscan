
export const searchedLocationCurrentWeather =  async (location) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=35cd382137961ee6440305f74a109a83&units=metric`
      );
      const data= await response.json();
      if(data.cod === "404") alert("Please enter a valid city name");
      console.log(data)
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
   
