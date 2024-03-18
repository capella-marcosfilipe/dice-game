import React, { useState } from "react";

import "../styles/Die.css";
import { Dado } from "./Dado";

export function Die() {
  const [num, setNum] = useState(<p>Inicie o jogo</p>);

  const rollDie = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNum(randomNumber);
  };

  return (
    <div className="game">
      <button onClick={rollDie} className="die">
        Jogue o Dado
      </button>
      {num && (
        <div>
          <p>
            Resultado: <Dado valor={num} />
          </p>
        </div>
      )}
    </div>
  );
}
