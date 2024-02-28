const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e1c52fa996a6222734052a750750d53&units=metric`,
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchWeather;
