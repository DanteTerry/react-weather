function SideWeather() {
  return (
    <div className=" rounded-2xl bg-white p-4  shadow-xl lg:w-[25%]">
      <div className="border-b pb-1">
        <span className="text-[24px] font-medium">Forecast in other </span>
        <span className="text-[24px] font-semibold">Cities</span>
      </div>

      <div className="flex items-center justify-between  border-b  p-4 pb-2">
        <div className="flex flex-col items-start">
          <p className="font-bold">London</p>
          <p>GB</p>
        </div>

        <img className="w-[50px]" src="/src/assets/icons/clear-day.svg" />

        <div className="flex flex-col items-end">
          <p className="font-bold">53°F</p>
          <p>Broken</p>
          <p>Cloud</p>
        </div>
      </div>

      <div className="flex items-center justify-between  border-b  p-4 pb-2">
        <div className="flex flex-col items-start">
          <p className="font-bold">London</p>
          <p>GB</p>
        </div>

        <img className="w-[50px]" src="/src/assets/icons/clear-day.svg" />

        <div className="flex flex-col items-end">
          <p className="font-bold">53°F</p>
          <p>Broken</p>
          <p>Cloud</p>
        </div>
      </div>

      <div className="flex items-center justify-between  border-b  p-4 pb-2">
        <div className="flex flex-col items-start">
          <p className="font-bold">London</p>
          <p>GB</p>
        </div>

        <img className="w-[50px]" src="/src/assets/icons/clear-day.svg" />

        <div className="flex flex-col items-end">
          <p className="font-bold">53°F</p>
          <p>Broken</p>
          <p>Cloud</p>
        </div>
      </div>
    </div>
  );
}

export default SideWeather;
