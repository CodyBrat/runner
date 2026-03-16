import React from 'react';
import { runnerData } from './mockData';
import RunnerDetails from './components/RunnerDetails';
import ProgressMetrics from './components/ProgressMetrics';
import WeeklyActivity from './components/WeeklyActivity';
import LeaderboardSnapshot from './components/LeaderboardSnapshot';
import './App.css';

function App() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-logo">IRL tracker</div>
        <div className="nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Challenges</a>
          <a href="#">Community</a>
        </div>
        <button className="nav-btn">Join Us</button>
      </nav>

      <main className="main-content">
        <div className="dashboard-grid">
          <div className="section-left">
            <RunnerDetails data={runnerData} />
            <ProgressMetrics data={runnerData} />
          </div>
          <div className="section-right">
            <LeaderboardSnapshot data={runnerData} />
            <WeeklyActivity runs={runnerData.weekly_runs} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
