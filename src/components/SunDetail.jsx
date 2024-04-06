import { FaMoon, FaSun } from "react-icons/fa6";
import { convertTimestampToTime, dayOrNight } from "../utils/helperFunctions";

function SunDetail({ weather }) {
  const sunrise = convertTimestampToTime(
    weather?.sys?.sunrise,
    weather?.timezone,
  );

  const sunset = convertTimestampToTime(
    weather?.sys?.sunset,
    weather?.timezone,
  );

  const isDay = dayOrNight(weather);

  return (
    <div
      className={`flex flex-col justify-around gap-5 rounded-2xl border   bg-cover bg-center p-4 shadow-lg  contrast-125 md:gap-3 lg:gap-0 ${isDay ? "bg-day-bg" : "bg-night-bg"}`}
    >
      <div className="flex flex-col items-center gap-1 text-lg">
        <FaSun className="text-[#005225]" />
        <p className="text-2xl capitalize">sunrise</p>
        <span className={`text-xl font-bold ${!isDay && "text-white"}`}>
          {sunrise.time} AM
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 text-xl">
        <FaMoon className="text-[#005225]" />
        <p className="text-2xl capitalize">sunset</p>
        <span className={`text-xl font-bold ${!isDay && "text-white"}`}>
          {sunset.time} PM
        </span>
      </div>
    </div>
  );
}

export default SunDetail;
