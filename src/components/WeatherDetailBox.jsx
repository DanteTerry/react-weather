import TempDetail from "./TempDetail";
import AtmosphereDetail from "./AtmosphereDetail";
import SunDetail from "./SunDetail";
import WeekDayTemp from "./WeekDayTemp";
import SideWeather from "./SideWeather";

function WeatherDetailBox() {
  return (
    <div className="flex flex-col gap-10 sm:gap-8 md:gap-8 lg:flex-row lg:gap-8">
      <div className="flex flex-col gap-6 rounded-2xl bg-white px-7 py-5 shadow-2xl lg:w-[75%]">
        {/* header title and content */}
        <div>
          <span className="text-[24px] font-medium">Forecast in </span>
          <span className="text-[24px] font-semibold">Prague, CZ</span>
          <p className="text-[20px]">Wednesday, February 28 at 01:40 AM</p>
        </div>

        {/* temperature details */}
        <div className="grid w-full gap-5 md:gap-7 lg:grid-cols-[38%,32%,25%] lg:gap-x-5 ">
          <TempDetail />
          <AtmosphereDetail />
          <SunDetail />
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
