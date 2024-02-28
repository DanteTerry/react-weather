import { useState } from "react";
import NavBar from "./components/NavBar";
import WeatherAppContainer from "./components/WeatherAppContainer";
import WeatherDetailBox from "./components/WeatherDetailBox";

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <WeatherAppContainer>
        <div className="mx-auto flex flex-col gap-5 px-4 md:w-[90%]">
          <NavBar city={city} setCity={setCity} />
          <WeatherDetailBox />
        </div>
      </WeatherAppContainer>
    </>
  );
}

export default App;
