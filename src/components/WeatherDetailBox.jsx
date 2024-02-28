import { FaCloud, FaDroplet, FaMoon, FaSun, FaUmbrella } from "react-icons/fa6";
import { MdVisibilityOff, MdWaves } from "react-icons/md";
import { GiWindsock } from "react-icons/gi";

function WeatherDetailBox() {
  return (
    <div className="flex gap-6">
      <div className="w-[75%] rounded-2xl bg-white px-7 py-4 shadow-2xl">
        <span className="text-[24px] font-medium">Forecast in </span>
        <span className="text-[24px] font-semibold">Prague, CZ</span>
        <p className="mb-10 text-[20px]">Wednesday, February 28 at 01:40 AM</p>

        {/* temperature details */}
        <div className="grid w-full grid-cols-[38%,32%,25%] gap-x-5 ">
          <div className="rounded-2xl border border-gray-300 bg-[#BFEDFB] p-4 px-5 shadow-lg">
            <div className="flex flex-col items-center justify-between gap-16">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-[40px] font-bold">40°F</h2>
                  <span>/ C</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 ">
                    <span className="text-[14px]">high</span>
                    <span className="text-[20px]">42°F</span>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <span className="text-[14px]">low</span>
                    <span className="text-[20px]">20°F</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between">
                <div className="text-[16px]">
                  <p>Overcast Clouds</p>
                  <p>Feels like 40°F</p>

                  <p className="flex items-center gap-1 text-[14px]">
                    <FaUmbrella className="inline-block text-base" /> Umbrella
                    required
                  </p>
                </div>
                <img
                  className="w-[80px]"
                  src="/src/assets/icons/clear-day.svg"
                />
              </div>
            </div>
          </div>

          {/* div 2 */}
          <div className="flex flex-col gap-4 rounded-2xl border bg-[#D9F4E6] p-4 shadow-lg">
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
              <div className="flex items-center gap-2 text-lg">
                <span>50%</span>
                <span>
                  <FaCloud className="text-sm text-[#005225]" />
                </span>
              </div>
            </div>
          </div>

          {/* div 3 */}
          <div className="bg-grid-bg flex flex-col  justify-between rounded-2xl border bg-cover bg-center  p-4 shadow-lg">
            <div className="flex flex-col items-center gap-2 text-xl">
              <FaSun className="text-[#005225]" />
              <p>sunrise</p>
              <span>06:58 AM</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-xl">
              <FaMoon className="text-[#005225]" />
              <p>sunset</p>
              <span>05:58 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] rounded-2xl bg-black"></div>
    </div>
  );
}

export default WeatherDetailBox;
