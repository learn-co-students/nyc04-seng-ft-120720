export function getWeather(lat, lng) {
  // this API isn't the most fun to work with, need to make multiple fetches to get the forecast
  return fetch(`https://api.weather.gov/points/${lat},${lng}`)
    .then((r) => r.json())
    .then((data) => fetch(data.properties.forecast))
    .then((r) => r.json())
    .then((data) => {
      return formatForecast(data.properties.periods[0]);
    })
    .catch((err) => {
      console.error("Weather fetch failed, using fallback data");
      return {
        temperature: 55,
        temperatureUnit: "F",
        shortForecast: "Sunny",
        icon: "☀️",
      };
    });
}

function formatForecast({ shortForecast, temperature, temperatureUnit }) {
  let forecast = shortForecast.toLowerCase();

  let icon = "☀️";
  if (forecast.includes("sun")) {
    icon = "☀️";
  } else if (
    forecast.includes("rain") ||
    forecast.includes("storm") ||
    forecast.includes("shower") ||
    forecast.includes("drizzle")
  ) {
    icon = "🌧";
  } else if (forecast.includes("cloud")) {
    icon = "☁️";
  } else if (forecast.includes("snow")) {
    icon = "❄️";
  }

  return {
    temperature,
    temperatureUnit,
    shortForecast,
    icon,
  };
}
