import React, { useEffect } from "react";
import background from "./assets/19cover.webp";
import dexter from "./assets/dexter.png";
import "./Navbar.css";
import "./Getweather.css";
import { Link } from "react-router-dom";
import gif from "./assets/logo.gif";
import { useState } from "react";
export const Getweather = () => {
  const [weatherdata, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getWeather = (e) => {
    setCity(e.target.value);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=741d8c07144dd1244e67d2e1cf8c254e`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  return (
    <div>
      <div className="Navbar">
        <ul className="Navbar-right">
          <div className="Nav">
            <Link to="/">Weather Forecast App</Link>
          </div>
          <div>
            <img className="Logo" src={gif} alt="logo"></img>
          </div>

          <div className="Navbar-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/getweather">Get Weather</Link>
            </li>
            <li>
              <Link to="/converter">Temperature Converter</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="Background-image">
        <img
          className="Background-img"
          src={background}
          alt="backgroundimage"
        ></img>
      </div>
      <div>
        <img className="Dexter-img" src={dexter} alt="arrowimage"></img>
      </div>
      <div className="City-text">
        <input
          className="Input"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={getWeather}
        ></input>
        {typeof weatherdata.main === "undefined" ? (
          <p></p>
        ) : (
          <div className="">
            <p>City: {weatherdata.name}</p>
            <p>
              Maximum Temperature{" "}
              {Math.floor(weatherdata.main.temp_max - 273.15)} C
            </p>
            <p>
              Minimum Temperature{" "}
              {Math.floor(weatherdata.main.temp_min - 273.15)} C
            </p>
            <p>Weather: {weatherdata.weather[0].main}</p>
            <p>Wind Speed: {weatherdata.wind.speed} Km/h</p>
          </div>
        )}
        {weatherdata.cod == "404" ? <p>City Not found</p> : <></>}
      </div>
    </div>
  );
};
