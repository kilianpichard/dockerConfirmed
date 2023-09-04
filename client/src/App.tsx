import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //fetch localhost:3000
    React.useEffect(() => {
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => console.log(data))
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
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
