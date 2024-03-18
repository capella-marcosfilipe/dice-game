import React from "react";

import "../styles/Board.css";
import { Die } from "./Die";

export function Board({ currentPlayer, switchTurns }) {
  return (
    <section className="board">
      <div className="player-1">
        <h2>Jogador 1</h2>
        <Die
          currentPlayer={currentPlayer}
          playerNumber={1}
          switchTurns={switchTurns}
        />
      </div>
      <div className="player-2">
        <h2>Jogador 2</h2>
        <Die
          currentPlayer={currentPlayer}
          playerNumber={2}
          switchTurns={switchTurns}
        />
      </div>
    </section>
  );
}
