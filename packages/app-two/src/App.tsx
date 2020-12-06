import { RedButton } from '@namespace/core';
import './App.css';
import logo from './logo.svg';

function App(): JSX.Element {
  return (
    <div className="App">
      <p>
        <RedButton label="Core Button" />
      </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
