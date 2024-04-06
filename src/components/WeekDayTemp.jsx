import WeekWeatherIcon from "./WeekWeatherIcon";

function WeekDayTemp({ day }) {
  const date = new Date(day?.dt * 1000);
  const dayName = date.toLocaleString("en-US", { weekday: "short" });

  return (
    <div className="mb-3 flex w-[100px] flex-col items-center justify-between gap-3 rounded-xl bg-[#bddcef] py-3 text-center shadow-lg transition-all duration-300 hover:bg-[#8db7cf]">
      <h3 className="text-xl font-bold">{dayName}</h3>
      <WeekWeatherIcon weatherData={day} />
      <div className="flex flex-col items-center">
        <p>{Math.floor(day?.temp?.max)}°C</p>
        <p>{Math.floor(day?.temp?.min)}°C</p>
      </div>
    </div>
  );
}

export default WeekDayTemp;
