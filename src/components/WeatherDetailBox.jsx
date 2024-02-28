import TempDetail from "./TempDetail";
import AtmosphereDetail from "./AtmosphereDetail";
import SunDetail from "./SunDetail";
import WeekDayTemp from "./WeekDayTemp";
import SideWeather from "./SideWeather";
import { useQuery } from "@tanstack/react-query";
import fetchWeather from "../utils/fetchWeather";
import { getCurrentTimeWithOffset } from "../utils/helperFunctions";

function WeatherDetailBox({ city }) {
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const data = await fetchWeather(city);
      return data;
    },
    staleTime: 1000,
  });

  if (isLoading) {
    return <div>Loading...</div>; // Render loading state while fetching data
  }

  if (isError) {
    return <div>Error fetching weather data</div>; // Render error message if there's an error
  }

  const formattedDateTime = new Date(weatherData.dt * 1000).toLocaleString(
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
            {weatherData.name}, {weatherData.sys.country}
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
          <TempDetail />
          <AtmosphereDetail />
          <SunDetail weather={weatherData} />
        </div>

        {/* week temperature detail */}

        <div className="overflow-x-scroll lg:overflow-auto">
          <div className="mx-auto flex w-max gap-5 px-2 md:gap-4  lg:w-max lg:gap-9">
            <WeekDayTemp />
            <WeekDayTemp />
            <WeekDayTemp />
            <WeekDayTemp />
            <WeekDayTemp />
            <WeekDayTemp />
            <WeekDayTemp />
          </div>
        </div>
      </div>

      {/* side weather */}

      <SideWeather />
    </div>
  );
}

export default WeatherDetailBox;
