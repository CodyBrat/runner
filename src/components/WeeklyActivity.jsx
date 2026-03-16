import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './WeeklyActivity.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const WeeklyActivity = ({ runs }) => {
    const data = runs.map((distance, index) => ({
        name: days[index],
        distance: distance,
    }));

    return (
        <div className="card weekly-activity">
            <h3 className="section-title">Weekly Activity</h3>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            contentStyle={{
                                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'var(--text-main)'
                            }}
                            formatter={(value) => [`${value} KM`, 'Distance']}
                        />
                        <Bar dataKey="distance" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.distance === 0 ? 'rgba(255,255,255,0.1)' : 'var(--accent-primary)'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="activity-summary">
                {runs.map((distance, idx) => (
                    <div key={idx} className="activity-row">
                        <span className="activity-day">{days[idx]}</span>
                        <span className={`activity-dist ${distance === 0 ? 'rest' : 'active'}`}>
                            {distance === 0 ? 'Rest' : `${distance} KM`}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyActivity;
