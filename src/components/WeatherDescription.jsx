import { FaUmbrella, FaCheckCircle, FaRegSnowflake } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

function WeatherDescription({ weatherDescription }) {
  function getWeatherIcons(weatherDescription) {
    switch (weatherDescription) {
      case "broken clouds":
      case "clouds":
      case "few clouds":
      case "scattered clouds":
      case "overcast clouds":
      case "cloudy":
      case "partly cloudy":
      case "mostly cloudy":
      case "rain":
      case "light rain":
      case "showers":
      case "thunderstorm":
        return (
          <>
            <p className="flex items-center gap-1 text-[14px] capitalize">
              <FaUmbrella className="inline-block text-base" />
              <span className="text-[14px]">{"Umbrella Required"}</span>
            </p>
          </>
        );
      case "clear sky":
        return (
          <>
            <p className="flex items-center gap-1 text-[14px] capitalize">
              <FaCheckCircle className="inline-block text-base" />
              <span className="text-[14px]">{"Ideal Condition"}</span>
            </p>
          </>
        );

      case "snow":
      case "light snow":
      case "heavy snow":
      case "sleet":
      case "hail":
      case "light shower snow":
      case "shower snow":
      case "heavy shower snow":
        return (
          <>
            <p className="flex items-center gap-1 text-[14px] capitalize">
              <FaRegSnowflake className="inline-block  text-base" />;
              <span className="text-[14px]">{"Dress Warmly"}</span>
            </p>
          </>
        );

      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        return (
          <>
            <p className="flex items-center gap-1 text-[14px] capitalize">
              <GoAlertFill className="inline-block text-base" />
              <span className="text-[14px]">{"Low Visibility"}</span>
            </p>
          </>
        );

      default:
        return null;
    }
  }
  return (
    <>
      <div className="flex items-center gap-1 text-[14px] capitalize">
        {getWeatherIcons(weatherDescription)}
      </div>
    </>
  );
}

export default WeatherDescription;
