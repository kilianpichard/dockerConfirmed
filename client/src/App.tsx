import React, {useEffect} from 'react';
import './App.css';

function App() {

    const [message, setMessage] = React.useState('');
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

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
      </header>
    </div>
  );
}

export default App;
