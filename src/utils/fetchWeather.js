const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e1c52fa996a6222734052a750750d53&units=metric`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export default fetchWeather;
