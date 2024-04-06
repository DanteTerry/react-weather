import React from "react";

function WeekWeatherIcon({ weatherData }) {
  const weatherDescription = weatherData?.weather[0]?.description;

  const weatherIcon = weatherData?.weather[0]?.icon;
  const isDay = weatherIcon?.includes("d");

  function getWeatherIcon() {
    if (weatherDescription === "clear sky") {
      return isDay
        ? "/src/assets/icons/clear-day.svg"
        : "/src/assets/icons/starry-night.svg";
    } else if (weatherDescription === "few clouds") {
      return isDay
        ? "/src/assets/icons/partly-cloudy-day.svg"
        : "/src/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "scattered clouds") {
      return isDay
        ? "/src/assets/icons/partly-cloudy-day.svg"
        : "/src/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "broken clouds") {
      return isDay
        ? "/src/assets/icons/overcast-day.svg"
        : "/src/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "shower rain") {
      return "/src/assets/icons/rain/raindrops.svg";
    } else if (weatherDescription === "rain") {
      return "/src/assets/icons/rain/rain.svg";
    } else if (weatherDescription === "thunderstorm") {
      return isDay
        ? "/src/assets/icons/thunder-day/thunderstorms-day.svg"
        : "/src/assets/icons/thunder-night/thunderstorms-night.svg";
    } else if (weatherDescription === "snow") {
      return "/src/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "mist") {
      return "/src/assets/icons/atmosphere/mist.svg";
    } else if (weatherDescription === "smoke") {
      return "/src/assets/icons/atmosphere/smoke-particles.svg";
    } else if (weatherDescription === "haze") {
      return isDay
        ? "/src/assets/icons/atmosphere/haze-day.svg"
        : "/src/assets/icons/atmosphere/haze-night.svg";
    } else if (weatherDescription === "dust") {
      return isDay
        ? "/src/assets/icons/atmosphere/dust-day.svg"
        : "/src/assets/icons/atmosphere/dust-night.svg";
    } else if (weatherDescription === "fog") {
      return isDay
        ? "/src/assets/icons/atmosphere/fog-day.svg"
        : "/src/assets/icons/atmosphere/fog-night.svg";
    } else if (weatherDescription === "sand") {
      return "/src/assets/icons/atmosphere/dust-wind.svg";
    } else if (weatherDescription === "ash") {
      return isDay
        ? "/src/assets/icons/atmosphere/extreme-day-smoke.svg"
        : "/src/assets/icons/atmosphere/extreme-night-smoke.svg";
    } else if (weatherDescription === "squall") {
      return isDay
        ? "/src/assets/icons/extreme-day-wind.svg"
        : "/src/assets/icons/extreme-night-wind.svg";
    } else if (weatherDescription === "tornado") {
      return "/src/assets/icons/atmosphere/tornado.svg";
    } else if (weatherDescription === "overcast clouds") {
      return isDay
        ? "/src/assets/icons/overcast-day.svg"
        : "/src/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "cloudy") {
      return isDay
        ? "/src/assets/icons/overcast-day.svg"
        : "/src/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "partly cloudy") {
      return isDay
        ? "/src/assets/icons/partly-cloudy-day.svg"
        : "/src/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "mostly cloudy") {
      return isDay
        ? "/src/assets/icons/overcast-day.svg"
        : "/src/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "light rain") {
      return "/src/assets/icons/rain/drizzle.svg";
    } else if (weatherDescription === "showers") {
      return "/src/assets/icons/atmosphere/raindrops.svg";
    } else if (weatherDescription === "light snow") {
      return isDay
        ? "/src/assets/icons/snow/overcast-day-snow.svg"
        : "/src/assets/icons/snow/overcast-night-snow.svg";
    } else if (weatherDescription === "heavy snow") {
      return isDay
        ? "/src/assets/icons/snow/extreme-day-snow.svg"
        : "/src/assets/icons/snow/extreme-night-snow.svg";
    } else if (weatherDescription === "sleet") {
      return isDay
        ? "/src/assets/icons/snow/extreme-day-sleet.svg"
        : "/src/assets/icons/snow/extreme-night-sleet.svg";
    } else if (weatherDescription === "hail") {
      return isDay
        ? "/src/assets/icons/snow/extreme-day-hail.svg"
        : "/src/assets/icons/snow/extreme-night-hail.svg";
    } else if (weatherDescription === "light shower snow") {
      return "/src/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "shower snow") {
      return "/src/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "light intensity drizzle") {
      return isDay
        ? "/src/assets/icons/rain/overcast-day-drizzle.svg"
        : "/src/assets/icons/rain/overcast-night-drizzle.svg";
    } else if (weatherDescription === "heavy intensity drizzle") {
      return isDay
        ? "/src/assets/icons/rain/extreme-day-drizzle.svg"
        : "/src/assets/icons/rain/extreme-night-drizzle.svg";
    } else if (weatherDescription === "light intensity drizzle rain") {
      return isDay
        ? "/src/assets/icons/rain/overcast-day-drizzle.svg"
        : "/src/assets/icons/rain/overcast-night-drizzle.svg";
    } else if (weatherDescription === "drizzle rain") {
      return isDay
        ? "/src/assets/icons/rain/overcast-day-rain.svg"
        : "/src/assets/icons/rain/overcast-night-rain.svg";
    } else if (weatherDescription === "heavy intensity drizzle rain") {
      return isDay
        ? "/src/assets/icons/rain/extreme-day-drizzle.svg"
        : "/src/assets/icons/rain/extreme-night-drizzle.svg";
    } else if (weatherDescription === "overcast cloud") {
      return isDay
        ? "/src/assets/icons/overcast-day.svg"
        : "/src/assets/icons/overcast-night.svg";
    }
  }
  return <img src={getWeatherIcon()} alt="weather icon" className="w-[80px]" />;
}

export default WeekWeatherIcon;
