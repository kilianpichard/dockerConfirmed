import React, {useEffect} from 'react';
import './App.css';

function App() {

    const [message, setMessage] = React.useState('');
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const fetchMessage = () => {
        fetch(`${SERVER_URL}/messages/random`)
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => setMessage(error.message));
    }

    useEffect(() => {
        fetchMessage();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
            {message}
        </p>
        <br />
          <p>
              The backend API URL is: <a href={SERVER_URL} target="_blank"><b>{SERVER_URL}</b></a>
        </p>
      </header>
    </div>
  );
}

export default App;
