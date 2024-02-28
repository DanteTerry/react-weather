// Breaks a string into two lines based on the number of words
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

// Calculates the dew point given temperature (in Celsius) and relative humidity (in percentage)
function calculateDewPoint(temperature, relativeHumidity) {
  const es = 6.112 * Math.exp((17.67 * temperature) / (temperature + 243.5));
  const ea = (relativeHumidity / 100) * es;
  return (243.5 * Math.log(ea / 6.112)) / (17.67 - Math.log(ea / 6.112));
}

// Splits a string into words and returns the second word, or null if there's no second word
const breakStringAndReturnOne = (text) => {
  let words = text?.split(" ");
  return words && words.length > 1 ? words[1] : null;
};

// Returns the current time adjusted for the provided timezone offset (in seconds)
function getCurrentTimeWithOffset(timezoneOffsetSeconds) {
  const currentTime = new Date();
  const currentOffsetMinutes = currentTime.getTimezoneOffset();
  // Adjust the time based on the timezone offset
  return new Date(
    currentTime.getTime() +
      (currentOffsetMinutes + timezoneOffsetSeconds / 60) * 60 * 1000,
  );
}

// Converts a timestamp (in seconds) to a formatted time string based on the provided timezone offset (in seconds)
function convertTimestampToTime(timestamp, timezoneOffsetSeconds) {
  const date = new Date(timestamp * 1000);
  // Check if current time is in DST
  const isDST = date.getTimezoneOffset() < 0;
  // Adjust the timezone offset if DST is in effect
  const adjustedOffset = timezoneOffsetSeconds + (isDST ? -3600 : 0);
  const timezoneOffsetMilliseconds = adjustedOffset * 1000;
  const adjustedTime = date.getTime() + timezoneOffsetMilliseconds;
  // Create a new Date object with the adjusted time
  const adjustedDate = new Date(adjustedTime);
  const hours = adjustedDate.getHours().toString().padStart(2, "0");
  const minutes = adjustedDate.getMinutes().toString().padStart(2, "0");
  // Construct the formatted time string
  return `${hours}:${minutes}`;
}

export {
  breakString,
  calculateDewPoint,
  breakStringAndReturnOne,
  getCurrentTimeWithOffset,
  convertTimestampToTime,
};
