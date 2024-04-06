import React from "react";

function WeekWeatherIcon({ weatherData }) {
  const weatherDescription = weatherData?.weather[0]?.description;

  const weatherIcon = weatherData?.weather[0]?.icon;
  const isDay = weatherIcon?.includes("d");

  function getWeatherIcon() {
    if (weatherDescription === "clear sky") {
      return isDay
        ? "/assets/icons/clear-day.svg"
        : "/assets/icons/starry-night.svg";
    } else if (weatherDescription === "few clouds") {
      return isDay
        ? "/assets/icons/partly-cloudy-day.svg"
        : "/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "scattered clouds") {
      return isDay
        ? "/assets/icons/partly-cloudy-day.svg"
        : "/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "broken clouds") {
      return isDay
        ? "/assets/icons/overcast-day.svg"
        : "/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "shower rain") {
      return "/assets/icons/rain/raindrops.svg";
    } else if (weatherDescription === "rain") {
      return "/assets/icons/rain/rain.svg";
    } else if (weatherDescription === "thunderstorm") {
      return isDay
        ? "/assets/icons/thunder-day/thunderstorms-day.svg"
        : "/assets/icons/thunder-night/thunderstorms-night.svg";
    } else if (weatherDescription === "snow") {
      return "/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "mist") {
      return "/assets/icons/atmosphere/mist.svg";
    } else if (weatherDescription === "smoke") {
      return "/assets/icons/atmosphere/smoke-particles.svg";
    } else if (weatherDescription === "haze") {
      return isDay
        ? "/assets/icons/atmosphere/haze-day.svg"
        : "/assets/icons/atmosphere/haze-night.svg";
    } else if (weatherDescription === "dust") {
      return isDay
        ? "/assets/icons/atmosphere/dust-day.svg"
        : "/assets/icons/atmosphere/dust-night.svg";
    } else if (weatherDescription === "fog") {
      return isDay
        ? "/assets/icons/atmosphere/fog-day.svg"
        : "/assets/icons/atmosphere/fog-night.svg";
    } else if (weatherDescription === "sand") {
      return "/assets/icons/atmosphere/dust-wind.svg";
    } else if (weatherDescription === "ash") {
      return isDay
        ? "/assets/icons/atmosphere/extreme-day-smoke.svg"
        : "/assets/icons/atmosphere/extreme-night-smoke.svg";
    } else if (weatherDescription === "squall") {
      return isDay
        ? "/assets/icons/extreme-day-wind.svg"
        : "/assets/icons/extreme-night-wind.svg";
    } else if (weatherDescription === "tornado") {
      return "/assets/icons/atmosphere/tornado.svg";
    } else if (weatherDescription === "overcast clouds") {
      return isDay
        ? "/assets/icons/overcast-day.svg"
        : "/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "cloudy") {
      return isDay
        ? "/assets/icons/overcast-day.svg"
        : "/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "partly cloudy") {
      return isDay
        ? "/assets/icons/partly-cloudy-day.svg"
        : "/assets/icons/partly-cloudy-night.svg";
    } else if (weatherDescription === "mostly cloudy") {
      return isDay
        ? "/assets/icons/overcast-day.svg"
        : "/assets/icons/overcast-night.svg";
    } else if (weatherDescription === "light rain") {
      return "/assets/icons/rain/drizzle.svg";
    } else if (weatherDescription === "showers") {
      return "/assets/icons/atmosphere/raindrops.svg";
    } else if (weatherDescription === "light snow") {
      return isDay
        ? "/assets/icons/snow/overcast-day-snow.svg"
        : "/assets/icons/snow/overcast-night-snow.svg";
    } else if (weatherDescription === "heavy snow") {
      return isDay
        ? "/assets/icons/snow/extreme-day-snow.svg"
        : "/assets/icons/snow/extreme-night-snow.svg";
    } else if (weatherDescription === "sleet") {
      return isDay
        ? "/assets/icons/snow/extreme-day-sleet.svg"
        : "/assets/icons/snow/extreme-night-sleet.svg";
    } else if (weatherDescription === "hail") {
      return isDay
        ? "/assets/icons/snow/extreme-day-hail.svg"
        : "/assets/icons/snow/extreme-night-hail.svg";
    } else if (weatherDescription === "light shower snow") {
      return "/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "shower snow") {
      return "/assets/icons/snow/snow.svg";
    } else if (weatherDescription === "light intensity drizzle") {
      return isDay
        ? "/assets/icons/rain/overcast-day-drizzle.svg"
        : "/assets/icons/rain/overcast-night-drizzle.svg";
    } else if (weatherDescription === "heavy intensity drizzle") {
      return isDay
        ? "/assets/icons/rain/extreme-day-drizzle.svg"
        : "/assets/icons/rain/extreme-night-drizzle.svg";
    } else if (weatherDescription === "light intensity drizzle rain") {
      return isDay
        ? "/assets/icons/rain/overcast-day-drizzle.svg"
        : "/assets/icons/rain/overcast-night-drizzle.svg";
    } else if (weatherDescription === "drizzle rain") {
      return isDay
        ? "/assets/icons/rain/overcast-day-rain.svg"
        : "/assets/icons/rain/overcast-night-rain.svg";
    } else if (weatherDescription === "heavy intensity drizzle rain") {
      return isDay
        ? "/assets/icons/rain/extreme-day-drizzle.svg"
        : "/assets/icons/rain/extreme-night-drizzle.svg";
    } else if (weatherDescription === "overcast cloud") {
      return isDay
        ? "/assets/icons/overcast-day.svg"
        : "/assets/icons/overcast-night.svg";
    }
  }
  return <img src={getWeatherIcon()} alt="weather icon" className="w-[80px]" />;
}

export default WeekWeatherIcon;
