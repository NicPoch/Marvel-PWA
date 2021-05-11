import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/characterList';

function App() {
  return (
    <div className="App">
      <h1>Marvel PWA</h1>
      <CharacterList/>
    </div>
  );
}

export default App;
