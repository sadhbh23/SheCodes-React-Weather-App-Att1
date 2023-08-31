import React from "react";

import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Application</h1>
        <h2>Search a City!</h2>
        <SearchEngine />
        <small>
          This project was coded by Sadhbh Redmond and is{" "}
          <a href="https://github.com/sadhbh23/SheCodes-React-Weather-App">
            open-sourced.
          </a>
        </small>
        <h4>Test: Axios Install</h4>
      </header>
    </div>
  );
}

export default App;
