import React from 'react';
import {Calculator} from './Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="number"></input>
      <button onClick={changeUnit}>{}</button>
      <Calculator />
    </div>
  );
}

export default App;
