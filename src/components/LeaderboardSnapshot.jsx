import React from 'react';
import './LeaderboardSnapshot.css';
import { Medal, ArrowUp, Flag } from 'lucide-react';

const LeaderboardSnapshot = ({ data }) => {
    return (
        <div className="card leaderboard">
            <h3 className="section-title">Leaderboard Snapshot</h3>

            <div className="rank-display">
                <div className="rank-circle">
                    <Medal size={32} color="var(--accent-secondary)" />
                    <span className="rank-number">#{data.rank}</span>
                </div>
                <div className="rank-text">Current Global Rank</div>
            </div>

            <div className="leaderboard-stats">
                <div className="stat-card">
                    <div className="stat-header">
                        <Flag size={16} className="stat-icon" />
                        <span>Top Runner</span>
                    </div>
                    <div className="stat-value">124 <span className="stat-unit">KM</span></div>
                </div>

                <div className="stat-card highlight">
                    <div className="stat-header">
                        <ArrowUp size={16} className="stat-icon" />
                        <span>Next Rank In</span>
                    </div>
                    <div className="stat-value">3 <span className="stat-unit">KM</span></div>
                    <div className="stat-subtitle">Keep pushing!</div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardSnapshot;
