import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [searchInput, setSearchInput] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeatherInfo({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });

    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `74373fd9c9c828199b66c103f4039a7d`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(displayWeather);
  }

  function updateInput(event) {
    setSearchInput(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateInput}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <h3>In {searchInput} it is...</h3>
        <ul>
          <li>{weatherInfo.temperature}°C</li>
          <li>{weatherInfo.description}</li>
          <li>{weatherInfo.humidity}%</li>
          <li>{weatherInfo.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return <div className="SearchEngine">{form}</div>;
  }
}
