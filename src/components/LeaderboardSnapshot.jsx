import React from 'react';
import './LeaderboardSnapshot.css';

const LeaderboardSnapshot = ({ data }) => {
    return (
        <div className="card leaderboard">
            <div className="leaderboard-header">
                <h3 className="section-title">Global Leaderboard</h3>

                <div className="tabs">
                    <div className="tab active">Season 1</div>
                    <div className="tab">All Time</div>
                </div>
            </div>

            <div className="rank-container">
                <div className="rank-badge">
                    <span className="rank-hash">#</span>{data.rank}
                </div>
                <p className="rank-label">Your Current Position</p>
            </div>

            <div className="stats-row">
                <div className="stat-block">
                    <div className="stat-title">Top Runner</div>
                    <div className="stat-value">{124} <span>km</span></div>
                </div>

                <div className="stat-block highlight">
                    <div className="stat-title">Next Rank In</div>
                    <div className="stat-value">{3} <span>km</span></div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardSnapshot;
