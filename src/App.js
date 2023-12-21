// App.js

import React, { useState } from 'react';
import './style.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [startUnit, setStartUnit] = useState('celsius');
  const [targetUnit, setTargetUnit] = useState('fahrenheit');
  const [convertedValue, setConvertedValue] = useState(0);
  const [greenConvertedValue, setGreenConvertedValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStartUnitChange = (e) => {
    setStartUnit(e.target.value);
  };

  const handleTargetUnitChange = (e) => {
    setTargetUnit(e.target.value);
  };

  const convertTemperature = () => {
    let convertedTemp = parseFloat(inputValue);

    switch (startUnit) {
      case 'celsius':
        switch (targetUnit) {
          case 'fahrenheit':
            setConvertedValue((convertedTemp * 9/5) + 32);
            setGreenConvertedValue((convertedTemp * 9/5) + 32);
            break;
          case 'kelvin':
            setConvertedValue(convertedTemp + 273.15);
            setGreenConvertedValue(convertedTemp + 273.15);
            break;
          default:
            setConvertedValue(convertedTemp);
            setGreenConvertedValue(convertedTemp);
        }
        break;
      case 'fahrenheit':
        switch (targetUnit) {
          case 'celsius':
            setConvertedValue((convertedTemp - 32) * 5/9);
            setGreenConvertedValue((convertedTemp - 32) * 5/9);
            break;
          case 'kelvin':
            setConvertedValue((convertedTemp - 32) * 5/9 + 273.15);
            setGreenConvertedValue((convertedTemp - 32) * 5/9);
            break;
          default:
            setConvertedValue(convertedTemp);
            setGreenConvertedValue(convertedTemp);
        }
        break;
      case 'kelvin':
        switch (targetUnit) {
          case 'celsius':
            setConvertedValue(convertedTemp - 273.15);
            setGreenConvertedValue(convertedTemp - 273.15);
            break;
          case 'fahrenheit':
            setConvertedValue((convertedTemp - 273.15) * 9/5 + 32);
            setGreenConvertedValue((convertedTemp - 273.15) * 9/5);
            break;
          default:
            setConvertedValue(convertedTemp);
            setGreenConvertedValue(convertedTemp);
        }
        break;
      default:
        setConvertedValue(0);
        setGreenConvertedValue(0);
    }
  };

  const getLiquidLevel = (value) => {
    return `${(value / 100) * 80}%`;
  };

  return (
    <div className="App">
      <div className="thermometer-container">
        <div className="thermometer">
          <div className="liquid" style={{ height: getLiquidLevel(inputValue) }}></div>
        </div>
        <div className="thermometer green">
          <div className="liquid" style={{ height: getLiquidLevel(convertedValue), backgroundColor: '#ff0000' }}></div>
        </div>
      </div>
      <div className="input-container">
        <label style={{ color: '#00ff00' }}>Çevrilecek Değeri Giriniz:</label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="select-container">
        <label style={{ color: '#00ff00' }}>Hangi Değerden Çevrilecek</label>
        <select value={startUnit} onChange={handleStartUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <div className="select-container">
        <label style={{ color: '#ff0000' }}>Hangi Değere Çevrilecek</label>
        <select value={targetUnit} onChange={handleTargetUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <button className="but" onClick={convertTemperature}>
        Çevir
      </button>
      <div className="result-container">
        <p style={{ color: '#ff0000' }}>Sonuç= {convertedValue.toFixed(2)} {targetUnit}</p>
      </div>
    </div>
  );
}

export default App;
