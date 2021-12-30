import { TextEntry } from './Components/TextEntry'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="Github-link"
          href="https://github.com/Walker-TW/Flashing-Lights"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flashing Lights!
        </a>
      </header>
      <div>
        <TextEntry/>
      </div>
    </div>
  );
}

export default App;
