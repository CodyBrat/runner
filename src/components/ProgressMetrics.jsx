import React from 'react';
import './ProgressMetrics.css';

const ProgressMetrics = ({ data }) => {
  const percentage = Math.min((data.completed_distance / data.target_distance) * 100, 100);
  const remaining = Math.max(data.target_distance - data.completed_distance, 0);

  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (percentage / 100) * circumference;


  const milestones = [20, 40, 60, 80, 100];

  return (
    <div className="card progress-metrics glass-card">
      <h3 className="section-title">Distance Goal</h3>

      <div className="progress-visuals-row">

        <div className="circular-gauge">
          <svg width="108" height="108" viewBox="0 0 108 108">
            <circle
              cx="54" cy="54" r={radius}
              fill="none"
              strokeWidth="8"
              stroke="rgba(255,255,255,0.07)"
            />
            <circle
              cx="54" cy="54" r={radius}
              fill="none"
              strokeWidth="8"
              stroke="var(--accent-primary)"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              transform="rotate(-90 54 54)"
              className="gauge-arc"
            />
          </svg>
          <div className="gauge-label">
            <span className="gauge-pct">{percentage.toFixed(0)}%</span>
            <span className="gauge-sub">done</span>
          </div>
        </div>

        <div className="progress-right">
          <div className="progress-values">
            <div className="value-large">{data.completed_distance} <span>km</span></div>
            <div className="value-separator">/</div>
            <div className="value-small">{data.target_distance} <span>km</span></div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="milestones">
        <span className="milestone-label-left">0 km</span>
        <div className="milestone-track">
          {milestones.map((m) => {
            const reached = data.completed_distance >= (data.target_distance * m / 100);
            return (
              <div key={m} className={`milestone-dot ${reached ? 'reached' : ''}`}>
                <div className="dot-circle" />
                <span className="dot-label">{data.target_distance * m / 100} km</span>
              </div>
            );
          })}
        </div>
        <span className="milestone-label-right">{data.target_distance} km</span>
      </div>

      <div className="progress-stats">
        <div className="stat">
          <span className="stat-label">Remaining</span>
          <span className="stat-value">{remaining} km</span>
        </div>
        <div className="stat text-right">
          <span className="stat-label">Completion</span>
          <span className="stat-value">{percentage.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressMetrics;
