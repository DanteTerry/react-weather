import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import WeatherDetailBox from "./components/WeatherDetailBox";
import { useDebounce } from "use-debounce";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const [cityText] = useDebounce(city, 1000);

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e1c52fa996a6222734052a750750d53&units=metric`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await res.json();
        console.log(data);

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
          <NavBar city={city} setCity={setCity} />
          <WeatherDetailBox weatherData={weatherData} />
        </div>
      </main>
    </>
  );
}

export default App;
