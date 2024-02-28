export default async function fetchTime(lat, lng) {
  try {
    const res = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=06A622PMUGW3&format=json&by=position&lat=${lat}&lng=${lng}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to propagate it back to the caller
  }
}
