import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
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
