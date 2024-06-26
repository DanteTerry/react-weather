import { FaLocationArrow, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { useCityName } from "../lib/store/store";
import { useState } from "react";
import { fetchCoordsWeather } from "../utils/helperFunctions";

function NavBar() {
  const setCityName = useCityName((state) => state.setCityName);
  const setCityNameFromSide = useCityName((state) => state.setCityNameFromSide);

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          setLat(position?.coords?.latitude);
          setLong(position?.coords?.longitude);
          const data = await fetchCoordsWeather(lat, long);

          console.log(data?.name);

          setCityNameFromSide(data?.name);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  };

  return (
    <nav className=" flex w-full flex-col justify-between gap-4 py-6 lg:flex-row">
      <h1 className=" text-center text-3xl font-bold sm:text-left">
        Weather Dashboard
      </h1>
      <div className="flex w-full gap-4 lg:w-[50%] lg:justify-end">
        <div className="flex w-[80%]  items-center">
          <button
            onClick={handleLocation}
            className="rounded-l-full border border-border bg-primary p-2 text-xl text-border transition-all duration-300 hover:bg-border hover:text-white "
          >
            <FaLocationArrow />
          </button>

          <input
            type="text"
            className="h-full w-full  border border-x-0 border-border px-2 text-lg outline-none"
            placeholder="Search City..."
            onChange={(e) => {
              setCityName(e);
            }}
          />

          <button className="rounded-r-full border border-border bg-primary p-2 text-xl text-border transition-all duration-300 hover:bg-border hover:text-white ">
            <FaMagnifyingGlassLocation />
          </button>
        </div>
        {/* <div className="relative w-[60px]  rounded-l-full rounded-r-full border border-border md:w-[70px]">
          <div className="absolute left-[5px] top-[2px] h-[30px] w-[30px] rounded-full bg-gray-500"></div>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
