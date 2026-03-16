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
        backgroundColor: 'var(--bg-main)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '4px',
        color: 'var(--text-primary)',
        padding: '8px 12px',
        fontSize: '0.85rem'
    };

    return (
        <div className="card weekly-activity glass-card">
            <h3 className="section-title">Weekly Activity</h3>

            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            tick={{ fill: 'var(--text-secondary)', fontSize: 12, fontWeight: 500 }}
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />
                        <YAxis
                            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            dx={-10}
                        />
                        <Tooltip
                            cursor={{ fill: 'var(--bg-main)' }}
                            contentStyle={customTooltipStyle}
                            formatter={(value) => [`${value} km`, 'Distance']}
                            itemStyle={{ color: 'var(--accent-primary)', fontWeight: 600 }}
                        />
                        <Bar dataKey="distance" radius={4}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.distance === 0 ? 'var(--border-subtle)' : 'var(--accent-primary)'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="activity-list">
                {runs.map((distance, idx) => (
                    <div key={idx} className="activity-item">
                        <div className="day-name">{days[idx]}</div>
                        <div className="day-val">
                            {distance === 0 ? <span className="rest-tag">Rest</span> : `${distance} km`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyActivity;
