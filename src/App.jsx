import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import WeatherDetailBox from "./components/WeatherDetailBox";
import { useDebounce } from "use-debounce";
import { useCityName } from "./lib/store/store";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const cityName = useCityName((state) => {
    return state.cityName;
  });

  const [cityText] = useDebounce(cityName, 1000);

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHERAPI_KEY}&units=metric`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await res.json();

        setWeatherData(data);
      } catch (error) {
        throw new Error("Failed to fetch weather data");
      }
    };

    fetchWeather(cityText || "prague");
  }, [cityText]);

  return (
    <>
      <main className="h-screen w-full bg-primary">
        <div className="mx-auto flex flex-col gap-1  px-4 sm:w-[80%] lg:w-[90%]">
          <NavBar />
          <WeatherDetailBox weatherData={weatherData} />
        </div>
      </main>
    </>
  );
}

export default App;
