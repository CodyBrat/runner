import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './WeeklyActivity.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const WeeklyActivity = ({ runs }) => {
  const data = runs.map((distance, index) => ({
    name: days[index],
    distance: distance,
  }));

  const customTooltipStyle = {
    backgroundColor: '#1c1f26',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '0.8rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
  };

  return (
    <div className="card weekly-activity glass-card">
      <div className="activity-header">
        <span className="section-title">Weekly Activity</span>
        <div className="activity-legend">
          <span className="legend-item"><span className="dot active"></span> Active</span>
          <span className="legend-item"><span className="dot"></span> Rest</span>
        </div>
      </div>

      <div className="activity-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
              <XAxis
                dataKey="name"
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 700 }}
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis
                tick={{ fill: 'var(--text-muted)', fontSize: 11, fontWeight: 700 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.03)', radius: [8, 8, 0, 0] }}
                contentStyle={customTooltipStyle}
                formatter={(value) => [`${value} km`, 'Distance']}
                itemStyle={{ color: 'var(--accent-primary)', fontWeight: 800, fontFamily: 'var(--font-sport)' }}
              />
              <Bar dataKey="distance" radius={[4, 4, 0, 0]} barSize={26}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.distance === 0 ? 'rgba(255,255,255,0.05)' : 'var(--accent-primary)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mini-stats-list">
          {runs.map((distance, idx) => (
            <div key={idx} className="mini-stat-item">
              <span className="mini-day">{days[idx]}</span>
              {distance === 0 ? (
                <span className="mini-val rest">REST</span>
              ) : (
                <span className="mini-val">
                  {distance}<span className="mini-unit">km</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
