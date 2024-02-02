// App.js
import React from 'react';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <HomePage />
      </div>
      <div className="app-right">
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
