import React from "react";
import { Link } from "react-router-dom";
import background from "./assets/19cover.webp";
import gif from "./assets/logo.gif";
import "./Navbar.css";

export const Home = () => {
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
              <Link className="List" to="/">
                Home
              </Link>
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
        <p className="Background-text">
          Weather is the state of the atmosphere, describing for example the
          degree to which it is hot or cold, wet or dry, calm or stormy, clear
          or cloudy.
          <p>
            On Earth, most weather phenomena occur in the lowest layer of the
            planet's atmosphere, the troposphere,[2][3] just below the
            stratosphere. Weather refers to day-to-day temperature,
            precipitation, and other atmospheric conditions, whereas climate is
            the term for the averaging of atmospheric conditions over longer
            periods of time.[4] When used without qualification, "weather" is
            generally understood to mean the weather of Earth.
          </p>
          <p>
            Weather is driven by air pressure, temperature, and moisture
            differences between one place and another. These differences can
            occur due to the Sun's angle at any particular spot, which varies
            with latitude. The strong temperature contrast between polar and
            tropical air gives rise to the largest scale atmospheric
            circulations: the Hadley cell, the Ferrel cell, the polar cell, and
            the jet stream. Weather systems in the middle latitudes, such as
            extratropical cyclones, are caused by instabilities of the jet
            streamflow.
          </p>
          <p>
            Because Earth's axis is tilted relative to its orbital plane (called
            the ecliptic), sunlight is incident at different angles at different
            times of the year. On Earth's surface, temperatures usually range
            ±40 °C (−40 °F to 104 °F) annually. Over thousands of years, changes
            in Earth's orbit can affect the amount and distribution of solar
            energy received by Earth, thus influencing long-term climate and
            global climate change.
          </p>
        </p>
      </div>
    </div>
  );
};
