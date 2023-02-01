import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Check" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Barcelona</h1>
      <ul>
        <li>Wednesday 15:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear icon"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 55%</li>
            <li>Wind: 4km/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
