import { FaCloud, FaDroplet } from "react-icons/fa6";
import { MdVisibilityOff, MdWaves } from "react-icons/md";
import { GiWindsock } from "react-icons/gi";

function AtmosphereDetail() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-[#D9F4E6] p-4 shadow-lg lg:mb-0">
      {/* visibility */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Visibility</h3>
        <div className="flex items-center gap-2 text-lg   ">
          <span>10Km </span>
          <span>
            <MdVisibilityOff className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* wind */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Wind</h3>
        <div className="flex items-center gap-2 text-lg">
          <span>3mph</span>
          <span>
            <GiWindsock className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* dew point */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Dew Point</h3>
        <div className="flex items-center gap-2 text-lg   ">
          <span>38°F</span>
          <span>
            <FaDroplet className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* humidity */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Humidity</h3>
        <div className="flex items-center gap-2 text-lg">
          <span>89%</span>
          <span>
            <MdWaves className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>

      {/* cloudiness */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 px-1">
        <h3 className="text-lg font-bold">Cloudiness</h3>
        <div className="flex items-center gap-1 text-lg">
          <span>50%</span>
          <span>
            <FaCloud className="text-sm text-[#005225]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AtmosphereDetail;
