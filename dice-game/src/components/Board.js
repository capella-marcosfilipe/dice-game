import React from "react";

import "../styles/Board.css";
import { Die } from "./Die";

export function Board() {
  return (
    <section className="board">
      <div className="player-1">
        <Die />
      </div>
      <div className="player-2">
        <Die />
      </div>
    </section>
  );
}
