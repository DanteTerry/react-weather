function WeekDayTemp() {
  return (
    <div className="mb-3     flex w-[100px] flex-col items-center justify-between gap-3 rounded-xl bg-[#E6F2F9] py-3 text-center shadow-lg transition-all duration-300 hover:bg-[#C1E3F6]">
      <h3 className="text-xl font-bold">mon</h3>
      <img className="w-[60px]" src="/src/assets/icons/clear-day.svg" />
      <div className="flex flex-col items-center">
        <p>43°F</p>
        <p>37°F</p>
      </div>
    </div>
  );
}

export default WeekDayTemp;
