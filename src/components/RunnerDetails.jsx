import React from 'react';
import './RunnerDetails.css';

const RunnerDetails = ({ data }) => {
  const initials = data.runner.split(' ').map(n => n[0]).join('');

  return (
    <div className="card runner-details glass-card">
      <span className="runner-label">Runner Profile</span>

      <div className="runner-main">
        <div className="runner-avatar">{initials}</div>
        <div className="runner-identity">
          <h2 className="runner-name">{data.runner}</h2>
          <span className="tier-badge">{data.tier}</span>
        </div>
      </div>

      <div className="runner-challenge">
        <span className="challenge-label">Current Challenge</span>
        <span className="challenge-value">{data.challenge}</span>
      </div>
    </div>
  );
};

export default RunnerDetails;
