import React from "react";

import "../styles/Board.css";
import { Die } from "./Die";

export function Board() {
  return (
    <section className="board">
      <div className="player-1">
        <h2>Jogador 1</h2>
        <Die />
      </div>
      <div className="player-2">
        <h2>Jogador 2</h2>
        <Die />
      </div>
    </section>
  );
}
