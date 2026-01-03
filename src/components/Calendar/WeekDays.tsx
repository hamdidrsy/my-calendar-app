import React from 'react';

const WEEK_DAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

export const WeekDays: React.FC = () => {
    return (
        <div className="calendar-weekdays">
            {WEEK_DAYS.map(day => (
                <div key={day} className="weekday">{day}</div>
            ))}
        </div>
    );
};