let inputbox = document.querySelector(".input");
let search = document.getElementById("searchbtn");
let weather_img = document.getElementById("image");
let temperature = document.getElementById("temp");
let temperature_type = document.getElementById("temp_type");
let humidity = document.getElementById("humid_percent");
let wind_speed = document.getElementById("wind_percent");

async function checkweather(city){
  let api_key= "993917912cf221095c387e9166af8ebb";  
  let weather_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`).then (response =>response.json());

  console.log(weather_data);
  temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
  temperature_type.innerHTML=`${weather_data.weather[0].main}`;
  humidity.innerHTML=`${weather_data.main.humidity}%`;
  wind_speed.innerHTML=`${weather_data.wind.speed} Km/h`;

  switch(weather_data.weather[0].main){
    case "Clouds":
      weather_img.src="cloud_weather.png";
      break;
    case "Clear":
      weather_img.src="clear_weather.png";
      break;
    case "Snow":
      weather_img.src="snow.png";
      break;
    case "Rain" ,"Mist":
      weather_img.src="rain.png";
      break;
    case "Haze":
      weather_img.src="haze.png";
      break;
  }
}

search.addEventListener('click', ()=>{
  checkweather(inputbox.value);
});
