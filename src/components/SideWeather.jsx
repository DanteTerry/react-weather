import { useEffect, useState } from "react";
import { randomCityNames } from "../constant/data";

import WeatherIcons from "./WeatherIcons";
import { nextLine } from "../utils/helperFunctions";
import { useCityName } from "../lib/store/store";

function SideWeather() {
  const [cities, setCities] = useState([]);
  const setCityNameFromSide = useCityName((state) => state.setCityNameFromSide);

  useEffect(() => {
    const fetchCityData = async () => {
      randomCityNames.forEach(async (city) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHERAPI_KEY}&units=metric`,
          );

          if (!res.ok) {
            throw new Error("Failed to fetch weather data");
          }

          const data = await res.json();

          setCities((prevCities) => {
            if (!prevCities.some((prevCity) => prevCity.name === data.name)) {
              return [...prevCities, data];
            }
            return prevCities;
          });
        } catch (error) {
          throw new Error("Failed to fetch weather data");
        }
      });
    };

    fetchCityData();
  }, []);

  return (
    <div className=" mb-10 rounded-2xl bg-white p-4 shadow-xl  md:mb-0 lg:w-[28%]">
      <div className="border-b pb-1">
        <span className="text-[24px] font-medium">Forecast in other </span>
        <span className="text-[24px] font-semibold">Cities</span>
      </div>

      {cities.map((city, index) => {
        return (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-between  border-b  p-4  hover:bg-neutral-200"
            onClick={() => {
              setCityNameFromSide(city?.name);
            }}
          >
            <div className="flex flex-col items-start">
              <p className="font-bold">{city?.name}</p>
              <p>{city?.sys?.country}</p>
            </div>

            {<WeatherIcons weatherData={city} />}

            <div className="flex flex-col items-end">
              <p className="font-bold">{Math.floor(city?.main?.temp)}°C</p>

              <p
                className={`${city?.weather[0]?.description.length > 10 && "whitespace-pre-line"} text-right `}
              >
                {nextLine(city?.weather[0]?.description)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideWeather;
