// WeatherWise — weather.js
// Designed & Developed by Aaditya Bansal

function getWeatherEmoji(id) {
  if (id >= 200 && id < 300) return "⛈️";
  if (id >= 300 && id < 400) return "🌦️";
  if (id >= 500 && id < 600) return "🌧️";
  if (id >= 600 && id < 700) return "❄️";
  if (id >= 700 && id < 800) return "🌫️";
  if (id === 800)             return "☀️";
  if (id === 801)             return "🌤️";
  if (id === 802)             return "⛅";
  if (id >= 803)              return "☁️";
  return "🌡️";
}

async function weather() {
  const city = document.getElementById("search").value.trim();
  if (!city) return;

  const errorEl = document.getElementById("error_msg");
  errorEl.style.display = "none";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba439bd69e805343404955a719d8098f&units=metric`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.cod !== 200) throw new Error("City not found");

    document.getElementById("location_val").innerHTML = result.name + ", " + result.sys.country;
    document.getElementById("temp_val").innerHTML = Math.floor(result.main.temp);
    document.getElementById("pre_val").innerHTML = result.main.pressure + " mb";
    document.getElementById("feels_like").innerHTML = "Feels like " + Math.floor(result.main.feels_like) + "°C &nbsp;·&nbsp; " + result.weather[0].description;
    document.getElementById("hum_val").innerHTML = result.main.humidity + "%";
    document.getElementById("wind_val").innerHTML = result.wind.speed + " km/h";
    document.getElementById("weather_icon").innerHTML = getWeatherEmoji(result.weather[0].id);

  } catch (error) {
    errorEl.style.display = "block";
  }
}

// Allow Enter key to search
document.addEventListener("DOMContentLoaded", () => {
  weather(); // load on start
  document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") weather();
  });
});
