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
  return {
    hours,
    time: `${hours}:${minutes}`,
  };
}

export const dayOrNight = (weather) => {
  const sunrise = convertTimestampToTime(
    weather?.sys?.sunrise,
    weather?.timezone,
  );

  const sunset = convertTimestampToTime(
    weather?.sys?.sunset,
    weather?.timezone,
  );

  const currentTime = getCurrentTimeWithOffset(
    weather?.timezone,
  ).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const time = [...currentTime.split(":")];

  const isDay =
    Number(time[0]) >= Number(sunrise.hours) &&
    Number(time[0]) < Number(sunset.hours);

  return isDay;
};

// write a function that takes a string and if the first two words are less than 10 characters, return the first two words, else return the first word

export function nextLine(sentence) {
  const word = sentence.split(" ");
  if (word.length === 1) {
    return sentence;
  } else if (word.length === 2) {
    return `${word[0]} \n ${word[1]}`;
  } else if (word.length === 3) {
    return `${word[1]} \n ${word[2]}`;
  } else {
    return;
  }
}

export {
  breakString,
  calculateDewPoint,
  breakStringAndReturnOne,
  getCurrentTimeWithOffset,
  convertTimestampToTime,
};
