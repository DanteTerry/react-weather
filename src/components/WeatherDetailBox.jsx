import TempDetail from "./TempDetail";
import AtmosphereDetail from "./AtmosphereDetail";
import SunDetail from "./SunDetail";
import SideWeather from "./SideWeather";
import { getCurrentTimeWithOffset } from "../utils/helperFunctions";
import WeekWeatherDetail from "./WeekWeatherDetail";

function WeatherDetailBox({ weatherData }) {
  const formattedDateTime = new Date(weatherData?.dt * 1000).toLocaleString(
    undefined,
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="flex flex-col gap-10 sm:gap-8 md:gap-8 lg:flex-row lg:gap-8">
      <div className="flex flex-col gap-6 rounded-2xl bg-white px-7 py-5 shadow-lg lg:w-[75%]">
        {/* header title and content */}
        <div>
          <span className="text-[24px] font-medium">Forecast in </span>
          <span className="text-[24px] font-semibold">
            {weatherData?.name}, {weatherData?.sys?.country}
          </span>
          <p className="text-[20px]">
            {formattedDateTime} at{" "}
            {getCurrentTimeWithOffset(weatherData?.timezone).toLocaleTimeString(
              undefined,
              {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              },
            )}{" "}
            {new Date(weatherData?.dt * 1000).getHours() >= 12 ? "PM" : "AM"}
          </p>
        </div>

        {/* temperature details */}
        <div className="grid w-full gap-5 md:gap-7 lg:grid-cols-[38%,32%,25%] lg:gap-x-5 ">
          <TempDetail weatherData={weatherData} />
          <AtmosphereDetail weatherData={weatherData} />
          <SunDetail weather={weatherData} />
        </div>

        {/* week temperature detail */}
        <WeekWeatherDetail weatherData={weatherData} />
      </div>

      {/* side weather */}

      <SideWeather />
    </div>
  );
}

export default WeatherDetailBox;
