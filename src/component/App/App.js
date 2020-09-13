import React from 'react';
import Calculator from '../Calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <input type="number"></input>
      
      <Calculator />
    </div>
  );
}

export default App;
