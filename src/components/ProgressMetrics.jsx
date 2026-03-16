import React from 'react';
import './ProgressMetrics.css';

const ProgressMetrics = ({ data }) => {
    const percentage = Math.min((data.completed_distance / data.target_distance) * 100, 100);
    const remaining = Math.max(data.target_distance - data.completed_distance, 0);

    return (
        <div className="card progress-metrics">
            <h3 className="section-title">Distance Goal</h3>

            <div className="progress-values">
                <div className="value-large">
                    {data.completed_distance} <span>km</span>
                </div>
                <div className="value-separator">/</div>
                <div className="value-small">
                    {data.target_distance} <span>km</span>
                </div>
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
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
