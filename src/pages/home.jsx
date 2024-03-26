import React, { useState } from "react";
import { Dado } from '../components/dado';

export default function Home() {
  const [jogador, setJogador] = useState(1);
  const [dadoJogador1, setDadoJogador1] = useState();
  const [dadoJogador2, setDadoJogador2] = useState();
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);

  const handleClickJogar = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    if (jogador === 1) {
      setDadoJogador1(valor);
      setJogador(2);
    } else {
      setDadoJogador2(valor);
      setJogador(1);
      if (dadoJogador1 && dadoJogador2) {
        if (dadoJogador1 > dadoJogador2) {
          setVitoriasJogador1(vitoriasJogador1 + 1);
        } else if (dadoJogador2 > dadoJogador1) {
          setVitoriasJogador2(vitoriasJogador2 + 1);
        }
      }
    }
  }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h2>Jogador 1</h2>
        <Dado valor={dadoJogador1} />
        <button onClick={handleClickJogar} disabled={jogador !== 1}>Jogar Dado</button>
      </div>
      <div>
        <h2>Jogador 2</h2>
        <Dado valor={dadoJogador2} />
        <button onClick={handleClickJogar} disabled={jogador !== 2}>Jogar Dado</button>
      </div>
      <div>
        <h2>Placar</h2>
        <p>Jogador 1: {vitoriasJogador1} vitórias</p>
        <p>Jogador 2: {vitoriasJogador2} vitórias</p>
      </div>
    </div>
  );
}
