import React from 'react';
import { Zap, Trophy, MapPin } from 'lucide-react';
import './RunnerDetails.css';

const RunnerDetails = ({ data }) => {
  const initials = data.runner.split(' ').map(n => n[0]).join('');

  return (
    <div className="card runner-details glass-card">
      <div className="runner-header-meta">
        <span className="runner-label">Athlete Profile</span>
        <span className="status-indicator">
          <span className="status-dot"></span>
          ACTIVE
        </span>
      </div>

      <div className="runner-main">
        <div className="avatar-container">
          <div className="runner-avatar">
            <span className="avatar-text">{initials}</span>
          </div>
          <svg className="avatar-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" />
          </svg>
        </div>
        
        <div className="runner-identity">
          <h2 className="runner-name">{data.runner}</h2>
          <div className="runner-tags">
            <span className="tier-badge">
              <Zap size={12} fill="currentColor" />
              {data.tier}
            </span>
            <span className="location-tag">
              <MapPin size={12} />
              Mumbai, IND
            </span>
          </div>
        </div>
      </div>

      <div className="runner-footer">
        <div className="challenge-block">
          <div className="challenge-icon-wrapper">
             <Trophy size={20} className="challenge-icon" />
          </div>
          <div className="challenge-info">
            <span className="challenge-label">Current Challenge</span>
            <span className="challenge-value">{data.challenge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunnerDetails;
