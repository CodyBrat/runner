import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Runner Dashboard</h1>
        <p>India Running League Progress Tracker</p>
      </header>

      <div className="dashboard-grid">
        {/* Components will go here */}
        <div className="component-placeholder">Runner Details</div>
        <div className="component-placeholder">Progress Metrics</div>
        <div className="component-placeholder">Weekly Activity</div>
        <div className="component-placeholder">Leaderboard Snapshot</div>
      </div>
    </div>
  );
}

export default App;
