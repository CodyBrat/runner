import React from 'react';
import './ProgressMetrics.css';
import { Route, MapPin, Navigation } from 'lucide-react';

const ProgressMetrics = ({ data }) => {
    const percentage = Math.min((data.completed_distance / data.target_distance) * 100, 100).toFixed(1);
    const remaining = Math.max(data.target_distance - data.completed_distance, 0);
    const circleRadius = 40;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;

    return (
        <div className="card progress-metrics">
            <h3 className="section-title">Progress Overview</h3>

            <div className="progress-visualizations">
                <div className="circular-progress-container">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle
                            className="circle-bg"
                            cx="50" cy="50" r={circleRadius}
                            strokeWidth="8" fill="none"
                        />
                        <circle
                            className="circle-fill"
                            cx="50" cy="50" r={circleRadius}
                            strokeWidth="8" fill="none"
                            strokeDasharray={circleCircumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="circular-text">
                        <span>{percentage}%</span>
                    </div>
                </div>

                <div className="linear-progress-wrapper">
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <div className="progress-labels">
                        <span className="progress-start">0 KM</span>
                        <span className="progress-end">{data.target_distance} KM</span>
                    </div>
                </div>
            </div>

            <div className="metrics-grid">
                <div className="metric-box">
                    <Route size={20} className="metric-icon primary" />
                    <span className="metric-value">{data.target_distance} KM</span>
                    <span className="metric-label">Target</span>
                </div>
                <div className="metric-box">
                    <MapPin size={20} className="metric-icon success" />
                    <span className="metric-value">{data.completed_distance} KM</span>
                    <span className="metric-label">Completed</span>
                </div>
                <div className="metric-box">
                    <Navigation size={20} className="metric-icon warning" />
                    <span className="metric-value">{remaining} KM</span>
                    <span className="metric-label">Remaining</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressMetrics;
