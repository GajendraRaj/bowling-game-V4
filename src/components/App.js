import React from "react";
import Constants from "../constants";
import BowlingGame from "./bowling-game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.APP_TITLE}</h1>
      </header>
      <BowlingGame />
    </div>
  );
}

export default App;
