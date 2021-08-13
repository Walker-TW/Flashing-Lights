import React from 'react';
import TextField from '@material-ui/core/TextField';
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
      <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Write Some Text Here"
          helperText="Make it useful!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
    </div>
  );
}

export default App;
