// frontend/src/App.js
import React from 'react';
import './styles.css';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-time Chat Application</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
}

export default App;
