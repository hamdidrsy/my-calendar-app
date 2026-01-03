import React from 'react';
import type { CalendarDay as CalendarDayType } from '../../types';

interface DayProps {
    day: CalendarDayType;
    onClick: (date: Date) => void;
}

export const CalendarDay: React.FC<DayProps> = ({ day, onClick }) => {
    return (
        <div
            className={`day ${day.isToday ? 'today' : ''} ${!day.isCurrentMonth ? 'other-month' : ''}`}
            onClick={() => onClick(day.date)}
        >
            <span className="day-number">{day.date.getDate()}</span>
            {/* İleride buraya event noktaları gelecek */}
        </div>
    );
};