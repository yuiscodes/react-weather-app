import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Osaka"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://preeminent-macaron-0a3447.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Yui Serikawa{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/yuiscodes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a> and hosted on <a href="https://superlative-fairy-51011a.netlify.app/"  target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}


