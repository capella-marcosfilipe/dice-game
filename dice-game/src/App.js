import "./styles/reset.css";
import "./styles/App.css";
import { Board } from "./components/Board.js";
import React, { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const switchTurns = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo dos Dados</h1>
        <span className="header__author">Marcos Capella</span>
      </header>
      <Board currentPlayer={currentPlayer} switchTurns={switchTurns} />
    </div>
  );
}

export default App;
