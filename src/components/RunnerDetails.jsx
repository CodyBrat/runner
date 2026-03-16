import React from 'react';
import './RunnerDetails.css';

const RunnerDetails = ({ data }) => {
    return (
        <div className="card runner-details">
            <div className="runner-header">
                <h2 className="runner-title">Runner Profile</h2>
            </div>

            <div className="runner-info">
                <div className="runner-name-block">
                    <h3>{data.runner}</h3>
                    <span className="tier-badge">{data.tier}</span>
                </div>

                <div className="runner-challenge">
                    <div className="challenge-label">Current Challenge</div>
                    <div className="challenge-value">{data.challenge}</div>
                </div>
            </div>
        </div>
    );
};

export default RunnerDetails;
