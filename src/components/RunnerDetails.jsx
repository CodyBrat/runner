import React from 'react';
import './RunnerDetails.css';
import { User, Target, Trophy } from 'lucide-react';

const RunnerDetails = ({ data }) => {
    return (
        <div className="card runner-details">
            <div className="runner-header">
                <div className="avatar">
                    <User size={32} color="var(--accent-primary)" />
                </div>
                <div>
                    <h2 className="runner-name">{data.runner}</h2>
                    <span className="badge tier-badge">
                        <Trophy size={14} className="badge-icon" />
                        {data.tier}
                    </span>
                </div>
            </div>

            <div className="info-group mt-1">
                <Target size={18} className="info-icon" />
                <div className="info-text">
                    <span className="info-label">Current Challenge</span>
                    <span className="info-value">{data.challenge}</span>
                </div>
            </div>
        </div>
    );
};

export default RunnerDetails;
