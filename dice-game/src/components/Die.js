import React, { useState } from "react";

import "../styles/Die.css";
import { DadoImg } from "./DadoImg.js";

export function Die({ currentPlayer, playerNumber, switchTurns }) {
  const [num, setNum] = useState(1);

  const [rolled, setRolled] = useState(false);

  const handleClickJogar = () => {
    if (currentPlayer === playerNumber && !rolled) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setNum(randomNumber);
      setRolled(true);
      switchTurns();
    }
  };

  return (
    <div className="game">
      <button onClick={handleClickJogar} className="die">
        Jogue o dado
      </button>
      <DadoImg valor={num} />
    </div>
  );
}
