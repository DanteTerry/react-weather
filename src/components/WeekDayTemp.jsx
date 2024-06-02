import WeekWeatherIcon from "./WeekWeatherIcon";

function WeekDayTemp({ day }) {
  const { dt, temp } = day;
  const date = new Date(dt * 1000);
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  const maxTemp = Math.floor(temp?.max);
  const minTemp = Math.floor(temp?.min);

  return (
    <div className="mb-3 flex w-[100px] flex-col items-center justify-between gap-3 rounded-xl bg-[#bddcef] py-3 text-center shadow-lg transition-all duration-300 hover:bg-[#8db7cf]">
      <h3 className="text-xl font-bold">{dayName}</h3>

      <WeekWeatherIcon weatherData={day} />
      <div className="flex flex-col items-center">
        <p>{maxTemp}°C</p>
        <p>{minTemp}°C</p>
      </div>
    </div>
  );
}

export default WeekDayTemp;
