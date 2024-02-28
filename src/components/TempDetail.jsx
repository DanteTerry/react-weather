import { useQueryClient } from "@tanstack/react-query";
import { FaUmbrella } from "react-icons/fa6";

function TempDetail() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueriesData("weather")[0][1];

  return (
    <div className="rounded-2xl  border border-gray-300 bg-[#BFEDFB] p-4 px-5 shadow-lg lg:mb-0">
      <div className="flex flex-col items-center justify-between gap-16">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[40px] font-bold">
              {Math.round(data?.main?.temp)}°C
            </h2>
            <span>/ °F</span>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 ">
              <span className="text-[14px]">high</span>
              <span className="text-[20px]">
                {Math.round(data?.main?.temp_max)}°C
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 ">
              <span className="text-[14px]">low</span>
              <span className="text-[20px]">
                {Math.round(data?.main?.temp_min)}°C
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-[16px]">
            <p>{data?.weather[0]?.main}</p>
            <p>Feels like {Math.round(data?.main?.feels_like)}°C</p>

            <p className="flex items-center gap-1 text-[14px]">
              <FaUmbrella className="inline-block text-base" /> Umbrella
              required
            </p>
          </div>
          <img className="w-[80px]" src="/src/assets/icons/clear-day.svg" />
        </div>
      </div>
    </div>
  );
}

export default TempDetail;
