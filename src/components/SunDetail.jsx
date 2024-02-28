import { FaMoon, FaSun } from "react-icons/fa6";

function SunDetail() {
  return (
    <div className="flex flex-col justify-around gap-5 rounded-2xl border  bg-grid-bg bg-cover bg-center p-4 shadow-lg  contrast-125 md:gap-3 lg:gap-0">
      <div className="flex flex-col items-center gap-1 text-lg">
        <FaSun className="text-[#005225]" />
        <p className="text-2xl capitalize">sunrise</p>
        <span className="text-xl font-bold">06:58 AM</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-xl">
        <FaMoon className="text-[#005225]" />
        <p className="text-2xl capitalize">sunset</p>
        <span className="text-xl font-bold ">05:58 PM</span>
      </div>
    </div>
  );
}

export default SunDetail;
