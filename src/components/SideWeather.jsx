import { useEffect, useState } from "react";
import { randomCityNames } from "../constant/data";

import WeatherIcons from "./WeatherIcons";
import { checkFirstTwoWords } from "../utils/helperFunctions";

function SideWeather() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      randomCityNames.forEach(async (city) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e1c52fa996a6222734052a750750d53&units=metric`,
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

  console.log(cities);
  return (
    <div className=" mb-10 rounded-2xl bg-white p-4 shadow-xl  md:mb-0 lg:w-[25%]">
      <div className="border-b pb-1">
        <span className="text-[24px] font-medium">Forecast in other </span>
        <span className="text-[24px] font-semibold">Cities</span>
      </div>

      {
        //  i want to map through the cities array and display the city name, country, temperature, weather description and icon
        cities.map((city, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-between  border-b  p-4  pb-2 hover:bg-neutral-200"
            >
              <div className="flex flex-col items-start">
                <p className="font-bold">{city?.name}</p>
                <p>{city?.sys?.country}</p>
              </div>

              {<WeatherIcons weatherData={city} />}

              <div className="flex flex-col items-end">
                <p className="font-bold">{Math.floor(city?.main?.temp)}°C</p>

                <p className=" whitespace-nowrap">
                  {checkFirstTwoWords(city?.weather[0]?.description)}
                </p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default SideWeather;
