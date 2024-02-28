import { FaCloud, FaDroplet } from "react-icons/fa6";
import { MdVisibilityOff, MdWaves } from "react-icons/md";
import { GiWindsock } from "react-icons/gi";
import { useQueryClient } from "@tanstack/react-query";
import { calculateDewPoint } from "../utils/helperFunctions";

function AtmosphereDetail() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueriesData("weather")[0][1];
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-[#D9F4E6] p-4 shadow-lg lg:mb-0">
      {/* visibility */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Visibility</h3>
        <div className="flex items-center gap-2 text-lg   ">
          <span>{data?.visibility / 1000}Km </span>
          <span>
            <MdVisibilityOff className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* wind */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Wind</h3>
        <div className="flex items-center gap-2 text-lg">
          <span>{Math.round(data?.wind?.speed)}mph</span>
          <span>
            <GiWindsock className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* dew point */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Dew Point</h3>
        <div className="flex items-center gap-2 text-lg   ">
          <span>
            {Math.round(
              calculateDewPoint(data?.main?.temp, data?.main?.humidity),
            )}
            °C
          </span>
          <span>
            <FaDroplet className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* humidity */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Humidity</h3>
        <div className="flex items-center gap-2 text-lg">
          <span>{data?.main?.humidity}%</span>
          <span>
            <MdWaves className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* cloudiness */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Cloudiness</h3>
        <div className="flex items-center gap-2 text-lg">
          <span>{data?.clouds?.all}%</span>
          <span>
            <FaCloud className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AtmosphereDetail;
