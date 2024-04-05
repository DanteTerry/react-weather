function breakString(text) {
  let words = text.split(" ");
  if (words.length === 3) {
    return words[0] + " " + words[1] + "\n" + words[2];
  } else if (words.length === 2) {
    return words[0] + "\n" + words[1];
  } else {
    return text;
  }
}

function calculateDewPoint(temperature, relativeHumidity) {
  const es = 6.112 * Math.exp((17.67 * temperature) / (temperature + 243.5));
  const ea = (relativeHumidity / 100) * es;
  return (243.5 * Math.log(ea / 6.112)) / (17.67 - Math.log(ea / 6.112));
}

const breakStringAndReturnOne = (text) => {
  let words = text?.split(" ");
  return words && words.length > 1 ? words[1] : null;
};

function getCurrentTimeWithOffset(timezoneOffsetSeconds) {
  const currentTime = new Date();
  const currentOffsetMinutes = currentTime.getTimezoneOffset();
  return new Date(
    currentTime.getTime() +
      (currentOffsetMinutes + timezoneOffsetSeconds / 60) * 60 * 1000,
  );
}

function convertTimestampToTime(timestamp, timezoneOffsetSeconds) {
  const date = new Date(timestamp * 1000);
  const isDST = date.getTimezoneOffset() < 0;
  const adjustedOffset = timezoneOffsetSeconds + (isDST ? -3600 : 0);
  const timezoneOffsetMilliseconds = adjustedOffset * 1000;
  const adjustedTime = date.getTime() + timezoneOffsetMilliseconds;
  const adjustedDate = new Date(adjustedTime);
  const hours = adjustedDate.getHours().toString().padStart(2, "0");
  const minutes = adjustedDate.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

// let's write function to give the correct image based on the weather condition and time of the day

function getWeatherIcon(weatherData, currentTime) {}

export {
  breakString,
  calculateDewPoint,
  breakStringAndReturnOne,
  getCurrentTimeWithOffset,
  convertTimestampToTime,
};
