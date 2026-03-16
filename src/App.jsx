import React, { useState, useEffect } from 'react';
import { runnerData } from './mockData';
import RunnerDetails from './components/RunnerDetails';
import ProgressMetrics from './components/ProgressMetrics';
import WeeklyActivity from './components/WeeklyActivity';
import LeaderboardSnapshot from './components/LeaderboardSnapshot';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#" className="dropdown">How it works <ChevronDown size={14} /></a>
          <a href="#">Events</a>
          <a href="#">Stories</a>
          <a href="#" className="dropdown">Contact <ChevronDown size={14} /></a>
        </div>
        <div className="nav-actions">
          <button className="nav-btn">Join Us</button>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
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
