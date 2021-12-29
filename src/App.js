import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/characterList';
import { Routes, Route, Link } from "react-router-dom";
import Character from './pages/Character';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Routes>
        <Route path="/" element={ <CharacterList/>} />
        <Route path="/:id" element={ <Character/>} />
      </Routes>
     
    </div>
  );
}

export default App;
