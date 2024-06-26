import { useEffect, useState } from "react";
import WeekDayTemp from "./WeekDayTemp";

function WeekWeatherDetail({ weatherData }) {
  const [weekWeather, setWeekWeather] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${weatherData?.coord?.lat}&lon=${weatherData?.coord?.lon}&exclude=current,minutely,hourly,alerts&appid=${import.meta.env.VITE_WEEKLY_WEATHERAPI_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeekWeather = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setWeekWeather(data);
    };

    if (!weatherData) return;
    fetchWeekWeather(apiUrl);
  }, [apiUrl, weatherData]);

  const nextSevenDays = weekWeather?.daily?.slice(1, 8);

  return (
    <div className="overflow-x-scroll lg:overflow-auto">
      <div className="mx-auto flex w-max gap-5 px-2 md:gap-4  lg:w-max lg:gap-9">
        {nextSevenDays?.map((day, index) => (
          <WeekDayTemp key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default WeekWeatherDetail;
