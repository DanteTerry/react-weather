import WeatherDescription from "./WeatherDescription";
import WeatherIcons from "./WeatherIcons";

function TempDetail({ weatherData }) {
  const weatherDescription = weatherData?.weather[0]?.description;

  return (
    <div className="rounded-2xl  border border-gray-300 bg-[#BFEDFB] p-4 px-5 shadow-lg lg:mb-0">
      <div className="flex flex-col items-center justify-between gap-16">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[40px] font-bold">
              {Math.round(weatherData?.main?.temp)}°C
            </h2>
            <span>/ °F</span>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 ">
              <span className="text-[14px]">high</span>
              <span className="text-[20px]">
                {Math.round(weatherData?.main?.temp_max)}°C
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 ">
              <span className="text-[14px]">low</span>
              <span className="text-[20px]">
                {Math.round(weatherData?.main?.temp_min)}°C
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-[16px]">
            <p className="capitalize">{weatherData?.weather[0]?.description}</p>
            <p>Feels like {Math.round(weatherData?.main?.feels_like)}°C</p>

            <WeatherDescription weatherDescription={weatherDescription} />
          </div>
          <WeatherIcons weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}

export default TempDetail;
