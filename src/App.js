import React from "react";
import logo from "./logo.svg";

import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Application</h1>
        <h2>Search a City!</h2>
        <SearchEngine />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
