import { FaUmbrella } from "react-icons/fa6";

function TempDetail() {
  return (
    <div className="rounded-2xl  border border-gray-300 bg-[#BFEDFB] p-4 px-5 shadow-lg lg:mb-0">
      <div className="flex flex-col items-center justify-between gap-16">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[40px] font-bold">40°F</h2>
            <span>/ °C</span>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 ">
              <span className="text-[14px]">high</span>
              <span className="text-[20px]">42°F</span>
            </div>
            <div className="flex items-center justify-between gap-2 ">
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
          <img className="w-[80px]" src="/src/assets/icons/clear-day.svg" />
        </div>
      </div>
    </div>
  );
}

export default TempDetail;
