import { FaLocationArrow, FaMagnifyingGlassLocation } from "react-icons/fa6";

function NavBar({ city, setCity }) {
  return (
    <nav className="flex w-full flex-col justify-between gap-4  py-6 lg:flex-row">
      <h1 className=" text-3xl font-bold">Weather Dashboard</h1>
      <div className="flex w-full gap-4 lg:w-[50%]">
        <div className="flex w-[80%]  items-center">
          <button className="bg-primary border-border text-border hover:bg-border rounded-l-full border p-2 text-xl transition-all duration-300 hover:text-white ">
            <FaLocationArrow />
          </button>
          <form className="h-full w-full">
            <input
              type="text"
              className="border-border h-full w-full border border-x-0 px-2 text-lg outline-none"
              value={city}
              placeholder="Search City..."
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <button className="bg-primary border-border text-border hover:bg-border rounded-r-full border p-2 text-xl transition-all duration-300 hover:text-white ">
            <FaMagnifyingGlassLocation />
          </button>
        </div>
        <div className="border-border relative  w-[60px] rounded-l-full rounded-r-full border md:w-[70px]">
          <div className="absolute left-[5px] top-[2px] h-[30px] w-[30px] rounded-full bg-gray-500"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
