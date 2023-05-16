
export const searchedLocationFutureWeather =  async (location) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=35cd382137961ee6440305f74a109a83&units=metric`
      );
      const data= await response.json() || "skyscan"  ;
      if(data.cod === "404") alert("Please enter a valid city name");
      return data.list
        .slice(4,40)
        .map((item, index) => {
          return {
            index: index,
            time: item.dt_txt.split(" ")[1].slice(0, 5),
            date: item.dt_txt.slice(0, 11),
            temp: item.main.temp,
            icon: item.weather[0].icon,
            weather: item.weather[0].main,
          };
        });
    };
   
