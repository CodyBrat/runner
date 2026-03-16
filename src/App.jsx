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
          <a href="#" className="active">Overview</a>
          <a href="#" className="dropdown">Challenges <ChevronDown size={14} /></a>
          <a href="#">Rankings</a>
          <a href="#">Community</a>
          <a href="#" className="dropdown">Profile <ChevronDown size={14} /></a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="bento-grid">
          <div className="bento-item profile">
            <RunnerDetails data={runnerData} />
          </div>
          <div className="bento-item metrics">
            <ProgressMetrics data={runnerData} />
          </div>
          <div className="bento-item rank">
            <LeaderboardSnapshot data={runnerData} />
          </div>
          <div className="bento-item activity">
            <WeeklyActivity runs={runnerData.weekly_runs} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
