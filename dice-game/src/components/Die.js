import React, { useState } from "react";

import "../styles/Die.css";
import { DadoImg } from "./DadoImg.js";

export function Die() {
  const [num, setNum] = useState(1);

  const handleClickJogar = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNum(randomNumber);
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
