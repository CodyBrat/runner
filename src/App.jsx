import React from 'react';
import { runnerData } from './mockData';
import RunnerDetails from './components/RunnerDetails';
import ProgressMetrics from './components/ProgressMetrics';
import WeeklyActivity from './components/WeeklyActivity';
import LeaderboardSnapshot from './components/LeaderboardSnapshot';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Runner Dashboard</h1>
        <p style={{ color: "var(--text-muted)" }}>India Running League Progress Tracker</p>
      </header>

      <div className="dashboard-grid">
        <div className="left-panel">
          <RunnerDetails data={runnerData} />
          <ProgressMetrics data={runnerData} />
        </div>
        <div className="right-panel">
          <WeeklyActivity runs={runnerData.weekly_runs} />
          <LeaderboardSnapshot data={runnerData} />
        </div>
      </div>
    </div>
  );
}

export default App;
