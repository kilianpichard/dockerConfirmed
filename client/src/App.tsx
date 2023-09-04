import React, {useEffect} from 'react';
import './App.css';

function App() {

    const [message, setMessage] = React.useState('');
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const {NODE_ENV} = process.env;

    const fetchMessage = () => {
        fetch(`${SERVER_URL}/messages/random`)
        .then(response => response.json())
        .then(data => setMessage(data.message))
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
        <p>
            You are running this application in <b>{NODE_ENV}</b> mode.
        <br />
            The backend API URL is: <b>{SERVER_URL}</b>
        </p>
      </header>
    </div>
  );
}

export default App;
