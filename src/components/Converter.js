import React, { useState } from "react";
import background from "./assets/19cover.webp";
import arrow from "./assets/arrow.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";
import gif from "./assets/logo.gif";
import "./Converter.css";
export const Converter = () => {
  const [convertF, setConvertF] = useState("");
  const [convertC, setConvertC] = useState("");

  const TemperatureFarenheit = (F) => {
    F.preventDefault();
    setConvertF(F.target.value);
  };
  const TemperatureCelcius = (C) => {
    C.preventDefault();
    setConvertC(C.target.value);
  };
  // console.log(fromF);
  const Temperatureconverter = () => {
    if (convertF) {
      setConvertC(() => ((convertF - 32) * 5) / 9);
    }
    if (convertC) {
      {
        setConvertF(() => convertC * (9 / 5) + 32);
      }
    }
  };

  const Resettemperature = () => {
    setConvertF("");
    setConvertC("");
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
        <div className="Converter">
          Temperature Converter
          <div>
            <input
              type="number"
              placeholder="Temp in F"
              name="Farenheit"
              value={convertF}
              onChange={TemperatureFarenheit}
            ></input>
            <span className="Degree">F</span>
          </div>
          <img className="Arrow-img" src={arrow} alt="arrowimage"></img>
          <div>
            <input
              type="number"
              placeholder="Temp in C"
              name="celcius"
              value={convertC}
              onChange={TemperatureCelcius}
            ></input>
            <span className="Degree">C</span>
          </div>
          <button className="Convert-btn" onClick={Temperatureconverter}>
            Convert
          </button>
          <button className="Reset-btn" onClick={Resettemperature}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
