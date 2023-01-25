import React, { useState } from "react";
import { useMyStore } from "./app/weatherfea";

const Weather = () => {
  const { weatherData, error, isLoading, fetchWeather } = useMyStore();
  const [city, setCity] = useState("");
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);
  return (
    <div>
      <div>
        <input type="text" value={city} onChange={handleCity} />
        <button onClick={() => fetchWeather(city)}>Fetch Weather</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {weatherData && <p>Weather Data: {JSON.stringify(weatherData)}</p>}
      </div>
    </div>
  );
};

export default Weather;
