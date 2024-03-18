import "./styles/reset.css";
import "./styles/App.css";
import { Board } from "./components/Board.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo dos Dados</h1>
        <span className="header__author">Marcos Capella</span>
      </header>
      <Board />
    </div>
  );
}

export default App;
